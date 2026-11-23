/* Cycladic Villa Kea — cinema (v6)
   Shared by every page. Needs GSAP + ScrollTrigger (assets/vendor/gsap), and still works without them.

   1. Zoom films  [data-film]
      A scene that stays on screen while you scroll. The camera moves into one spot of a photograph
      and the next, closer photograph of that same spot opens exactly there: estate → terrace → sunset.
      Each frame (.film__frame) carries data-to="x y zoom": the point (0–1 of the photo) the camera
      travels to, and how much closer it gets before the next frame takes over. The last frame has none.
      Captions: .film__cap[data-frame="n"] show while frame n is settled. .film__intro belongs to frame 0.

   2. Drift  [data-drift]  — a photo moves a little slower than the page (depth), scrubbed by scroll.

   Reduced motion: no pinning, no zoom; each film shows its first frame as a still, with its text.
   ========================================================================== */
(function () {
  'use strict';
  var root = document.documentElement;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var G = window.gsap, ST = window.ScrollTrigger;
  if (G && ST) G.registerPlugin(ST);
  root.classList.add(reduce ? 'cine-still' : 'cine');

  var clamp = function (v) { return v < 0 ? 0 : v > 1 ? 1 : v; };
  var smooth = function (a, b, v) { var t = clamp((v - a) / (b - a)); return t * t * (3 - 2 * t); };
  var inOut = function (t) { return t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; };   // camera travel
  var sine = function (t) { return -(Math.cos(Math.PI * t) - 1) / 2; };                             // zoom rate

  /* Header height → CSS */
  var header = document.querySelector('.site-header');
  function syncHeader() { if (header) root.style.setProperty('--hdr', header.getBoundingClientRect().height + 'px'); }
  syncHeader();

  /* Transparent header over the opening film (v6.1): only when the page starts with a film.
     It lies over the photograph with light text, and turns solid once the film has scrolled away. */
  var topFilm = document.querySelector('main > [data-film]:first-child, main > .film:first-child');
  if (topFilm && header) {
    root.classList.add('film-top');
    var solid = null;
    var syncSolid = function () {
      var on = topFilm.getBoundingClientRect().bottom <= window.innerHeight - 2;   // solid as soon as the film starts to leave the screen
      if (on !== solid) { solid = on; root.classList.toggle('header-solid', on); }
    };
    window.addEventListener('scroll', syncSolid, { passive: true });
    window.addEventListener('resize', syncSolid);
    syncSolid();
  }

  /* ---------------------------------------------------------------- Films */
  function Film(sec) {
    this.sec = sec;
    this.stage = sec.querySelector('.film__stage');
    this.frames = Array.prototype.map.call(sec.querySelectorAll('.film__frame'), function (el) {
      var img = el.querySelector('img');
      var to = (el.getAttribute('data-to') || '').trim().split(/\s+/).map(parseFloat);
      var at = (el.getAttribute('data-at') || '').trim().split(/\s+/).map(parseFloat);   // optional resting point of the last frame
      return {
        el: el, img: img,
        iw: +img.getAttribute('width'), ih: +img.getAttribute('height'),
        u: to.length === 3 ? to[0] : (at.length === 2 ? at[0] : .5),
        v: to.length === 3 ? to[1] : (at.length === 2 ? at[1] : .5),
        S: to.length === 3 ? to[2] : 1
      };
    });
    this.caps = Array.prototype.slice.call(sec.querySelectorAll('[data-frame]'));
    this.intro = sec.querySelector('.film__intro');
    this.count = sec.querySelector('.film__n');
    this.bar = sec.querySelector('.film__bar i');
    this.cue = sec.querySelector('.film__cue');
    this.n = this.frames.length;
    this.p = 0;
    this.layout();
  }

  /* Timeline: a short hold on the first frame (its text), the moves, a hold on the last. */
  Film.prototype.segment = function (p) {
    var n = this.n - 1, h0 = .14, h1 = .14, gap = .05;
    var move = (1 - h0 - h1 - gap * (n - 1)) / n;
    if (p <= h0) return { k: 0, t: 0 };
    var x = p - h0;
    for (var k = 0; k < n; k++) {
      if (x <= move) return { k: k, t: x / move };
      x -= move;
      if (k < n - 1) { if (x <= gap) return { k: k + 1, t: 0 }; x -= gap; }
    }
    return { k: n - 1, t: 1 };
  };

  /* World layout: frame 0 fills the stage. Frame k+1 is the part of frame k the camera ends on. */
  Film.prototype.layout = function () {
    var W = this.stage.clientWidth, H = this.stage.clientHeight;
    if (!W || !H) return;
    this.W = W; this.H = H;
    var box = { x: 0, y: 0, w: W, h: H };
    for (var k = 0; k < this.n; k++) {
      var f = this.frames[k];
      // Image laid out to cover the stage; panned so its target point sits as central as the photo allows.
      var s = Math.max(W / f.iw, H / f.ih), dw = f.iw * s, dh = f.ih * s;
      var left = Math.min(0, Math.max(W - dw, W / 2 - f.u * dw));
      var top = Math.min(0, Math.max(H - dh, H / 2 - f.v * dh));
      f.img.style.width = dw + 'px'; f.img.style.height = dh + 'px';
      f.img.style.transform = 'translate3d(' + left + 'px,' + top + 'px,0)';
      f.box = { x: box.x, y: box.y, w: box.w, h: box.h };
      var k1 = box.w / W;                       // world units per stage pixel inside this frame
      f.P = { x: box.x + (left + f.u * dw) * k1, y: box.y + (top + f.v * dh) * k1 };
      box = { w: box.w / f.S, h: box.h / f.S };
      box.x = f.P.x - box.w / 2; box.y = f.P.y - box.h / 2;
    }
    this.render(this.p, true);
  };

  Film.prototype.render = function (p, force) {
    if (!this.W) return;
    if (!force && Math.abs(p - this.p) < 1e-5) return;
    this.p = p;
    var W = this.W, H = this.H, seg = this.segment(p), k = seg.k, t = seg.t;
    var f = this.frames[k], last = k === this.n - 1;
    // Camera: zoom grows evenly (exponential); the target point glides to the centre of the screen.
    var Zk = W / f.box.w, Z = Zk, Cx = f.box.x + f.box.w / 2, Cy = f.box.y + f.box.h / 2;
    if (!last && t > 0) {
      Z = Zk * Math.pow(f.S, sine(t));
      var e = inOut(t);
      var s0x = (f.P.x - Cx) * Zk + W / 2, s0y = (f.P.y - Cy) * Zk + H / 2;
      var sx = s0x + (W / 2 - s0x) * e, sy = s0y + (H / 2 - s0y) * e;
      Cx = f.P.x - (sx - W / 2) / Z; Cy = f.P.y - (sy - H / 2) / Z;
    }
    var fadeIn = last ? 0 : smooth(.2, .78, t);
    for (var j = 0; j < this.n; j++) {
      var fr = this.frames[j], el = fr.el;
      var on = j === k || (j === k + 1 && fadeIn > 0);
      if (!on) { if (el.style.visibility !== 'hidden') el.style.visibility = 'hidden'; continue; }
      var sc = fr.box.w * Z / W;
      var x = (fr.box.x - Cx) * Z + W / 2, y = (fr.box.y - Cy) * Z + H / 2;
      el.style.visibility = 'visible';
      // 1px overscan on every side, so rounding never shows a hairline of the frame underneath
      var so = (W * sc + 2) / W;
      el.style.transform = 'translate3d(' + (x - 1).toFixed(2) + 'px,' + (y - 1).toFixed(2) + 'px,0) scale(' + so.toFixed(5) + ')';
      if (j === k + 1) {
        el.style.opacity = fadeIn.toFixed(3);
        // Soft edge while the closer photo is smaller than the screen; it hardens only as it fills the frame.
        el.style.setProperty('--feather', (6 + 94 * smooth(.5, 1.08, sc)).toFixed(1) + '%');
        el.classList.add('is-incoming');
      } else {
        el.style.opacity = 1;
        el.classList.remove('is-incoming');
      }
    }
    // Which frame "owns" the screen: drives captions, counter, intro text.
    var w = [];
    for (var i = 0; i < this.n; i++) w[i] = 0;
    w[k] = last ? 1 : 1 - smooth(0, .42, t);
    if (!last) w[k + 1] = smooth(.62, 1, t);
    for (var c = 0; c < this.caps.length; c++) {
      var cap = this.caps[c], a = w[+cap.getAttribute('data-frame')] || 0;
      cap.style.opacity = a.toFixed(3);
      cap.style.transform = 'translate3d(0,' + ((1 - a) * 14).toFixed(1) + 'px,0)';
      cap.style.visibility = a > .01 ? 'visible' : 'hidden';
    }
    if (this.intro) {
      var ia = 1 - smooth(.02, .16, p);
      this.intro.style.opacity = ia.toFixed(3);
      this.intro.style.transform = 'translate3d(0,' + (-(1 - ia) * 28).toFixed(1) + 'px,0)';
      this.intro.style.visibility = ia > .01 ? 'visible' : 'hidden';
    }
    if (this.cue) this.cue.style.opacity = (1 - smooth(0, .05, p)).toFixed(3);
    if (this.count) {
      var cur = (!last && t > .5) ? k + 2 : k + 1;
      if (this.count._v !== cur) { this.count._v = cur; this.count.textContent = ('0' + cur).slice(-2); }
    }
    if (this.bar) this.bar.style.transform = 'scaleX(' + p.toFixed(4) + ')';
  };

  var films = [];
  if (!reduce) {
    Array.prototype.forEach.call(document.querySelectorAll('[data-film]'), function (sec) {
      var film = new Film(sec);
      films.push(film);
      // Frames after the first load once the page has settled, so they are ready before the camera arrives.
      var warm = function () { film.frames.forEach(function (f) { if (f.img.loading === 'lazy') f.img.loading = 'eager'; }); };
      if (document.readyState === 'complete') setTimeout(warm, 300); else window.addEventListener('load', function () { setTimeout(warm, 300); });
      film.frames.forEach(function (f) { if (!f.img.complete) f.img.addEventListener('load', function () { film.render(film.p, true); }); });

      if (G && ST) {
        var state = { p: 0 };
        G.to(state, {
          p: 1, ease: 'none',
          scrollTrigger: {
            trigger: sec, start: function () { return 'top top+=' + (parseFloat(getComputedStyle(film.stage).top) || 0); },
            end: 'bottom bottom', scrub: .7, invalidateOnRefresh: true
          },
          onUpdate: function () { film.render(state.p); }
        });
      } else {
        var tick = false;
        var onScroll = function () { if (!tick) { tick = true; requestAnimationFrame(function () { tick = false; var r = sec.getBoundingClientRect(), H0 = parseFloat(getComputedStyle(film.stage).top) || 0, run = r.height - film.stage.clientHeight; film.render(run > 0 ? clamp((H0 - r.top) / run) : 0); }); } };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
      }
    });
  }

  /* ---------------------------------------------------------------- Drift */
  if (!reduce && G && ST) {
    Array.prototype.forEach.call(document.querySelectorAll('[data-drift]'), function (el) {
      var amt = parseFloat(el.getAttribute('data-drift')) || 8;
      var img = el.querySelector('img') || el;
      G.set(img, { scale: 1 + amt / 50, transformOrigin: '50% 50%' });
      G.fromTo(img, { yPercent: -amt / 2 }, {
        yPercent: amt / 2, ease: 'none',
        scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true }
      });
    });
  }

  /* ---------------------------------------------------------------- Resize */
  var rt;
  window.addEventListener('resize', function () {
    clearTimeout(rt);
    rt = setTimeout(function () { syncHeader(); films.forEach(function (f) { f.layout(); }); if (ST) ST.refresh(); }, 120);
  });
  // Fonts or late images can change the page height: let ScrollTrigger measure again.
  window.addEventListener('load', function () { syncHeader(); films.forEach(function (f) { f.layout(); }); if (ST) ST.refresh(); });

  window.__cvkCinema = { films: films };
})();

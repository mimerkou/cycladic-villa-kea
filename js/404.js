/* Cycladic Villa Kea — 404 page (page not found)
   Shared with the other pages: header, mobile menu, EN/EL, smooth in-page scroll.
   No sticky "Request availability" bar here: the page is one screen and already has the button.
   English loads first; a language chosen in this browser tab carries over between pages. */
(function () {
  'use strict';
  var root = document.documentElement;
  clearTimeout(window.__cvkFailsafe);

  var T = {
 "en": {
  "skip": "Skip to content",
  "brandAria": "Cycladic Villa Kea — Home",
  "place": "Ioulida · Kea",
  "navMain": "Main",
  "langGroup": "Language",
  "menu": "Menu",
  "menuClose": "Close",
  "fContact": "Contact",
  "askContact": "Contact us",
  "navHome": "Home",
  "navVilla": "The villa",
  "navLocation": "Location",
  "navContact": "Contact",
  "cta": "Request availability",
  "kAsk": "Availability",
  "askTitle": "Tell us <em>your dates.</em>",
  "askP": "Send us the dates you have in mind and how many of you are coming. We’ll check availability and reply personally with the total price for your stay.",
  "askLangs": "We reply in English, Greek or French.",
  "askCall": "Call us",
  "tagline": "Your Cycladic escape above the sea.",
  "fExplore": "Explore",
  "fFollow": "Follow us",
  "fLangs": "English · Ελληνικά · Français",
  "privacy": "Privacy policy",
  "credit": "Website by Michalis Merkouris",
  "stickyA": "Personal reply",
  "stickyB": "EN · EL · FR",
  "vPlay": "Play video",
  "altCanopy": "A bedroom with a canopy over the double bed and a glass door to the outside",
  "altBedroom": "A bright bedroom with a double bed and windows open to the hills",
  "altLiving": "The living room with blue sofas, a coffee table and the kitchen beyond",
  "altKitchen": "The kitchen with grey cabinets, patterned tiles and a wooden dining table",
  "altPlate": "Hand-painted blue plates on a whitewashed wall",
  "altTowels": "Rolled white towels on a made bed",
  "altWindow": "A window with blue shutters and a pot of red flowers",
  "altSign": "A stone hand-painted with the words Cycladic villa and an arrow",
  "altSunsetHouse": "The villa at sunset, the sun low over the sea beyond the stone terrace",
  "altBreakfast": "Coffee for two on the glass table, with Ioulida and the sea beyond",
  "altTerrace": "The dining table under the pergola, with the hills and the Aegean beyond",
  "altAerial": "The villa from above, with its stone terraces, the hills and the sea",
  "altFacade": "The whitewashed façade with blue shutters, stone paving and a terracotta jar",
  "creditBy": "Website by",
  "creditName": "Michalis Merkouris",
  "toHome": "Cycladic Villa Kea — home page",
  "title": "Page not found — Cycladic Villa Kea",
  "desc": "This page does not exist or has moved. Return to Cycladic Villa Kea, or ask us about your dates.",
  "nfKicker": "Error 404 · Page not found",
  "nfTitle": "This path <em>leads nowhere.</em>",
  "nfLead": "The page you are looking for does not exist, or it has moved. The villa, though, is right where it has always been: above Ioulida, looking out to the sea.",
  "nfHome": "Back to home",
  "nfAlt": "A clay jar on the terrace at sunset, with the sea behind",
  "nfNumAria": "Error 404"
 },
 "el": {
  "skip": "Μετάβαση στο περιεχόμενο",
  "brandAria": "Cycladic Villa Kea — Αρχική",
  "place": "ΙΟΥΛΙΔΑ · ΚΕΑ",
  "navMain": "Κύριο μενού",
  "langGroup": "Γλώσσα",
  "menu": "Μενού",
  "menuClose": "Μενού",
  "fContact": "Επικοινωνία",
  "askContact": "Επικοινωνήστε μαζί μας",
  "navHome": "Αρχική",
  "navVilla": "Η βίλα",
  "navLocation": "Η τοποθεσία",
  "navContact": "Επικοινωνία",
  "cta": "Ρωτήστε για διαθεσιμότητα",
  "kAsk": "ΔΙΑΘΕΣΙΜΟΤΗΤΑ",
  "askTitle": "Πείτε μας <em>τις ημερομηνίες σας.</em>",
  "askP": "Στείλτε μας τις ημερομηνίες που σας ενδιαφέρουν και πόσα άτομα θα είστε. Θα ελέγξουμε τη διαθεσιμότητα και θα σας απαντήσουμε προσωπικά με τη συνολική τιμή για τη διαμονή σας.",
  "askLangs": "Απαντάμε στα ελληνικά, στα αγγλικά ή στα γαλλικά.",
  "askCall": "Καλέστε μας",
  "tagline": "Το κυκλαδίτικο καταφύγιό σας, πάνω από τη θάλασσα.",
  "fExplore": "Περιηγηθείτε",
  "fFollow": "Ακολουθήστε μας",
  "fLangs": "Ελληνικά · English · Français",
  "privacy": "Πολιτική απορρήτου",
  "credit": "Δημιουργία ιστοσελίδας: Μιχάλης Μερκούρης",
  "stickyA": "Προσωπική απάντηση",
  "stickyB": "EL · EN · FR",
  "vPlay": "Αναπαραγωγή βίντεο",
  "altCanopy": "Υπνοδωμάτιο με κουνουπιέρα πάνω από το διπλό κρεβάτι και γυάλινη πόρτα προς τα έξω",
  "altBedroom": "Φωτεινό υπνοδωμάτιο με διπλό κρεβάτι και παράθυρα ανοιχτά προς τους λόφους",
  "altLiving": "Το σαλόνι με τους μπλε καναπέδες και την κουζίνα στο βάθος",
  "altKitchen": "Η κουζίνα με γκρι ντουλάπια, πλακάκια με σχέδια και ξύλινο τραπέζι",
  "altPlate": "Ζωγραφιστά μπλε πιάτα σε ασβεστωμένο τοίχο",
  "altTowels": "Τυλιγμένες λευκές πετσέτες σε στρωμένο κρεβάτι",
  "altWindow": "Παράθυρο με μπλε παντζούρια και μια γλάστρα με κόκκινα λουλούδια",
  "altSign": "Μια πέτρα ζωγραφισμένη με τις λέξεις Cycladic villa και ένα βέλος",
  "altSunsetHouse": "Η βίλα στο ηλιοβασίλεμα, με τον ήλιο χαμηλά πάνω από τη θάλασσα",
  "altBreakfast": "Καφές για δύο στο γυάλινο τραπέζι, με την Ιουλίδα και τη θάλασσα στο βάθος",
  "altTerrace": "Το τραπέζι κάτω από την πέργκολα, με θέα τους λόφους και το Αιγαίο",
  "altAerial": "Η βίλα από ψηλά, με τις πέτρινες βεράντες, τους λόφους και τη θάλασσα",
  "altFacade": "Η ασβεστωμένη πρόσοψη με τα μπλε παντζούρια, το πέτρινο πλακόστρωτο και ένα πήλινο πιθάρι",
  "creditBy": "Δημιουργία ιστοσελίδας:",
  "creditName": "Μιχάλης Μερκούρης",
  "toHome": "Cycladic Villa Kea — αρχική σελίδα",
  "title": "Η σελίδα δεν βρέθηκε — Cycladic Villa Kea",
  "desc": "Αυτή η σελίδα δεν υπάρχει ή έχει μετακινηθεί. Επιστρέψτε στην Cycladic Villa Kea ή ρωτήστε μας για τις ημερομηνίες σας.",
  "nfKicker": "Σφάλμα 404 · Η σελίδα δεν βρέθηκε",
  "nfTitle": "Αυτό το μονοπάτι <em>δεν βγάζει πουθενά.</em>",
  "nfLead": "Η σελίδα που ψάχνετε δεν υπάρχει ή έχει μετακινηθεί. Η βίλα πάντως είναι εκεί που ήταν πάντα: πάνω από την Ιουλίδα, με θέα τη θάλασσα.",
  "nfHome": "Επιστροφή στην αρχική",
  "nfAlt": "Πιθάρι στη βεράντα στο ηλιοβασίλεμα, με τη θάλασσα πίσω",
  "nfNumAria": "Σφάλμα 404"
 }
};

  var current = 'en';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  var desktop = window.matchMedia('(min-width: 960px)');
  function each(sel, fn) { Array.prototype.forEach.call(document.querySelectorAll(sel), fn); }
  var clamp = function (v, a, b) { a = a == null ? 0 : a; b = b == null ? 1 : b; return v < a ? a : v > b ? b : v; };
  var ease = function (t) { return 1 - Math.pow(1 - t, 3); };
  var afterLang = [];

  /* ---------------- Language ---------------- */
  function applyLang(lang) {
    var d = T[lang] || T.en;
    current = lang;
    root.lang = lang;
    document.title = d.title;
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', d.desc);
    each('[data-i18n]', function (el) { var k = el.getAttribute('data-i18n'); if (d[k] != null) el.textContent = d[k]; });
    each('[data-i18n-html]', function (el) { var k = el.getAttribute('data-i18n-html'); if (d[k] != null) el.innerHTML = d[k]; });
    each('[data-i18n-aria]', function (el) { var k = el.getAttribute('data-i18n-aria'); if (d[k] != null) el.setAttribute('aria-label', d[k]); });
    each('[data-i18n-alt]', function (el) { var k = el.getAttribute('data-i18n-alt'); if (d[k] != null) el.setAttribute('alt', d[k]); });
    each('[data-slot]', function (el) { el.setAttribute('aria-label', d.phTag + ': ' + d[el.getAttribute('data-slot')]); });
    each('[data-lang]', function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang)); });
    afterLang.forEach(function (fn) { fn(); });
  }
  each('[data-lang]', function (b) {
    b.addEventListener('click', function () {
      var lang = b.getAttribute('data-lang');
      try { sessionStorage.setItem('cvk-lang-tab', lang); } catch (e) {}
      if (lang !== current) applyLang(lang);
    });
  });
  try { if (sessionStorage.getItem('cvk-lang-tab') === 'el') applyLang('el'); } catch (e) {}

  each('[data-year]', function (el) { el.textContent = String(new Date().getFullYear()); });   // © year follows the calendar

  /* ---------------- Sticky header ---------------- */
  var header = document.querySelector('.site-header');
  function syncHeader() { header.classList.toggle('is-scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', syncHeader, { passive: true });
  requestAnimationFrame(syncHeader);   // not during setup (avoids a forced layout)

  /* ---------------- Mobile menu ---------------- */
  var menuBtn = document.querySelector('.menu-btn');
  var panel = document.getElementById('menu-panel');
  function setMenu(open, keepFocus) {
    var wasOpen = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', String(open));
    panel.classList.toggle('is-open', open);
    root.classList.toggle('menu-open', open);
    if (open) setTimeout(function () { var a = panel.querySelector('a'); if (a) a.focus({ preventScroll: true }); }, 350);
    else if (wasOpen && !keepFocus) menuBtn.focus({ preventScroll: true });
  }
  if (menuBtn && panel) {
    menuBtn.addEventListener('click', function () { setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'); });
    panel.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false, true); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menuBtn.getAttribute('aria-expanded') === 'true') { setMenu(false); menuBtn.focus(); }
    });
    window.addEventListener('resize', function () { if (window.innerWidth >= 960 && menuBtn.getAttribute('aria-expanded') === 'true') setMenu(false, true); });
  }

  /* ---------------- Smooth in-page scroll (same feel as the home page) ---------------- */
  var scrollAnim = 0;
  function stopScroll() { if (scrollAnim) { cancelAnimationFrame(scrollAnim); scrollAnim = 0; } }
  ['wheel', 'touchstart', 'keydown', 'mousedown'].forEach(function (ev) { window.addEventListener(ev, stopScroll, { passive: true }); });
  function smoothScrollTo(y, done) {
    stopScroll();
    var start = window.scrollY, dist = y - start, t0 = null;
    if (Math.abs(dist) < 2) { if (done) done(); return; }
    var dur = Math.min(1500, Math.max(650, Math.abs(dist) * 0.45));
    var e3 = function (t) { return t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; };
    (function step(now) {
      if (t0 === null) t0 = now;
      var k = Math.min(1, (now - t0) / dur);
      window.scrollTo(0, start + dist * e3(k));
      if (k < 1) scrollAnim = requestAnimationFrame(step); else { scrollAnim = 0; if (done) done(); }
    })(performance.now());
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a || a.classList.contains('skip') || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
    var id = a.getAttribute('href').slice(1);
    var target = id && document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    var y = target.getBoundingClientRect().top + window.scrollY - (parseFloat(getComputedStyle(target).scrollMarginTop) || 0);
    smoothScrollTo(Math.max(0, Math.round(y)), function () { target.focus({ preventScroll: true }); });
    if (history.replaceState) history.replaceState(null, '', '#' + id);
  });
  // The home page's "Explore the villa" and nav links arrive here without a hash: nothing to do.
  // Links from elsewhere with a hash (villa.html#estate) land below the sticky bars thanks to scroll-margin.

  /* ---------------- Reveals ---------------- */
  if ('IntersectionObserver' in window) {
    root.classList.add('io');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in-view'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.05 });
    each('[data-reveal]', function (el) { io.observe(el); });
  } else root.classList.add('reveal-all');

  var fontsReady = (document.fonts && document.fonts.ready) ? document.fonts.ready : Promise.resolve();
  Promise.race([fontsReady, new Promise(function (r) { setTimeout(r, 600); })]).then(function () {
    requestAnimationFrame(function () { requestAnimationFrame(function () { root.classList.add('is-ready'); }); });
  });
})();

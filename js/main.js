/* Cycladic Villa Kea — homepage behaviour (v4: "a day above Ioulida")
   English is the main language: every page load renders in English. EL is switched on by the visitor.
   Also: sticky header, mobile menu, Home link, hero intro, scroll reveals, mobile sticky CTA,
   hero moving shot (desktop autoplay, muted) and click-to-play clips lower on the page. */
(function () {
  'use strict';
  var root = document.documentElement;
  clearTimeout(window.__cvkFailsafe);

  /* ---------------- Text in both languages ---------------- */
  var T = {
    en: {
      title: 'Cycladic Villa Kea — Private villa above Ioulida, Kea',
      kWelcome: 'Welcome',
      welcome: 'White walls, grey stone and a wide view of the Aegean. Cycladic Villa Kea is a house for slow days above Ioulida, with room for six and a terrace that follows the light from morning to sunset.',
      altSign: 'A stone hand-painted with the words Cycladic villa and an arrow',
      gl1: 'The façade', gc1: 'Whitewash, blue shutters, stone underfoot.',
      gl2: 'On its own land', gc2: 'Terraces around the house, the hills and the sea beyond.',
      gl3: 'The living room', gc3: 'Deep sofas in island blue, open to the kitchen.',
      gl4: 'The kitchen', gc4: 'Fully equipped, with a dining table for meals indoors.',
      gl5: 'The bedrooms', gc5: 'Three, each with a double bed.',
      gl6: 'Details', gc6: 'Hand-painted plates, soft linen, blue shutters.',
      gl7: 'In short',
      altAerial: 'The villa from above, with its stone terraces, the hills and the sea',
      altLiving: 'The living room with blue sofas, a coffee table and the kitchen beyond',
      altKitchen: 'The kitchen with grey cabinets, patterned tiles and a wooden dining table',
      altCanopy: 'A bedroom with a canopy over the double bed and a glass door to the outside',
      altPlate: 'Hand-painted blue plates on a whitewashed wall',
      altTowels: 'Rolled white towels on a made bed',
      altWindow: 'A window with blue shutters and a pot of red flowers',
      altBreakfast: 'Coffee for two on the glass table, with Ioulida and the sea beyond',
      altSunsetHouse: 'The villa at sunset, the sun low over the sea beyond the stone terrace',
      dialAm: 'Morning', dialPm: 'Sunset',
      windowTitle: 'Ioulida, <em>just below.</em>',
      desc: 'A private Cycladic villa above Ioulida on Kea, for up to six guests, with a terrace facing the Aegean and the sunset. Request availability and we reply personally.',
      skip: 'Skip to content', brandAria: 'Cycladic Villa Kea — Home', place: 'Ioulida · Kea',
      navMain: 'Main', langGroup: 'Language', menu: 'Menu', menuClose: 'Close', fContact: 'Contact', askContact: 'Contact us',
      navHome: 'Home', navVilla: 'The villa', navLocation: 'Location', navContact: 'Contact',
      cta: 'Request availability',
      eyebrow: 'A private villa on Kea, Cyclades', h1a: 'Above Ioulida,', h1b: 'facing the Aegean.',
      heroSub: 'An elegant Cycladic house for up to six guests, with a shaded terrace that looks straight out to the Aegean.',
      heroLink: 'Discover the house',
      fGuests: 'guests at most', fBeds: 'bedrooms, double beds', fSize: 'Cycladic house', fPark: 'cars, private parking',
      altHero: 'The shaded terrace lounge between two stone columns, looking out over the hills to the Aegean',
      vHeroAria: 'Video: walking out from under the pergola towards the view', vHeroPlay: 'The terrace · 15 s',
      vPlay: 'Play video', vPause: 'Pause video', vSoundOn: 'Sound on', vSoundOff: 'Sound off',
      kHouse: 'The house', houseTitle: 'An elegant Cycladic house, <em>open to the light.</em>',
      houseP1: 'The house is built the way the island builds: whitewashed walls, blue shutters and stone paving underfoot. Its 100 m² are laid out for up to six people, so a family or a group of friends can share the days and still find a quiet room of their own.',
      houseP2: 'Terraces wrap around the villa, so you can follow the shade or the sun as the day turns. Beyond them, an estate planted with oak trees keeps the house private and quiet above the village.',
      altFacade: 'The whitewashed façade with blue shutters, stone paving and a terracotta jar',
      altBedroom: 'A bright bedroom with a double bed and windows open to the hills',
      vTourAria: 'Video: a short tour around the house', vTourPlay: 'Play the tour · 27 s',
      sGuests: 'Guests', vGuests: 'Up to 6', sBeds: 'Bedrooms', vBeds: '3, all with double beds', sSize: 'Size', vSize: '100 m²',
      sComfort: 'Comfort', vComfort: 'Wi-Fi, air conditioning', sKitchen: 'Kitchen', vKitchen: 'Fully equipped',
      sPark: 'Parking', vPark: 'Private, for 2 cars',
      sCost: 'Cost', vCost: '€100 per night', vCostNote: 'Indicative, to be confirmed',
      houseCta: 'Explore the villa',
      kTerrace: 'The terrace', terraceTitle: 'Under the pergola, <em>the Aegean in front of you.</em>',
      vGoldAria: 'Video: late afternoon light through the curtains', vGoldPlay: 'Golden hour',
      mMorning: 'Morning', mEvening: 'Late afternoon',
      terraceMorning: 'In the morning the pergola throws striped shade across the table. Breakfast happens in the cool, while the hills and the sea are still pale in the distance.',
      terraceEvening: 'Later the light turns and falls towards the Aegean. The stone wall warms, the hills go gold, and the sun sets over the sea in front of the main terrace.',
      altTerrace: 'The dining table under the pergola, with the hills and the Aegean beyond',
      kKea: 'Ioulida & Kea', keaTitle: 'A village of stairways, <em>just below.</em>',
      keaP: 'The villa sits on the slope above Ioulida, Kea’s hilltop capital. From the terrace wall you look down over its rooftops, lanes and stairways, with oak-covered hills folding away towards the sea.',
      keaP2: 'Kea is the closest of the Cyclades to Athens, about an hour by ferry from Lavrio.',
      altIoulida: 'Ioulida spread across the hillside, seen from the villa’s terrace wall',
      keaCta: 'Location & directions',
      kAsk: 'Availability', askTitle: 'Tell us <em>your dates.</em>',
      askP: 'Send us the dates you have in mind and how many of you are coming. We’ll check availability and reply personally with the total price for your stay.',
      askLangs: 'We reply in English, Greek or French.',
      askCall: 'Call us', askInsta: 'Message us on Instagram',
      tagline: 'Your Cycladic escape above the sea.', fExplore: 'Explore', fFollow: 'Follow us', fCall: 'Call',
      fLangs: 'English · Ελληνικά · Français', privacy: 'Privacy policy', credit: 'Website by Michalis Merkouris',
      stickyA: 'Personal reply', stickyB: 'EN · EL · FR'
    },
    el: {
      title: 'Cycladic Villa Kea — Ιδιωτική βίλα πάνω από την Ιουλίδα, Κέα',
      kWelcome: 'ΚΑΛΩΣ ΗΡΘΑΤΕ',
      welcome: 'Λευκοί τοίχοι, γκρίζα πέτρα και μια ανοιχτή θέα στο Αιγαίο. Η Cycladic Villa Kea είναι ένα σπίτι για αργές μέρες πάνω από την Ιουλίδα, με χώρο για έξι και μια βεράντα που ακολουθεί το φως από το πρωί ως το ηλιοβασίλεμα.',
      altSign: 'Μια πέτρα ζωγραφισμένη με τις λέξεις Cycladic villa και ένα βέλος',
      gl1: 'Η πρόσοψη', gc1: 'Ασβέστης, μπλε παντζούρια, πέτρα στο πλακόστρωτο.',
      gl2: 'Στο δικό του κτήμα', gc2: 'Βεράντες γύρω από το σπίτι, οι λόφοι και η θάλασσα πιο πέρα.',
      gl3: 'Το σαλόνι', gc3: 'Βαθιοί καναπέδες στο μπλε του νησιού, ανοιχτό προς την κουζίνα.',
      gl4: 'Η κουζίνα', gc4: 'Πλήρως εξοπλισμένη, με τραπέζι για φαγητό μέσα στο σπίτι.',
      gl5: 'Τα υπνοδωμάτια', gc5: 'Τρία, το καθένα με διπλό κρεβάτι.',
      gl6: 'Λεπτομέρειες', gc6: 'Ζωγραφιστά πιάτα, απαλά λευκά είδη, μπλε παντζούρια.',
      gl7: 'Με μια ματιά',
      altAerial: 'Η βίλα από ψηλά, με τις πέτρινες βεράντες, τους λόφους και τη θάλασσα',
      altLiving: 'Το σαλόνι με τους μπλε καναπέδες και την κουζίνα στο βάθος',
      altKitchen: 'Η κουζίνα με γκρι ντουλάπια, πλακάκια με σχέδια και ξύλινο τραπέζι',
      altCanopy: 'Υπνοδωμάτιο με κουνουπιέρα πάνω από το διπλό κρεβάτι και γυάλινη πόρτα προς τα έξω',
      altPlate: 'Ζωγραφιστά μπλε πιάτα σε ασβεστωμένο τοίχο',
      altTowels: 'Τυλιγμένες λευκές πετσέτες σε στρωμένο κρεβάτι',
      altWindow: 'Παράθυρο με μπλε παντζούρια και μια γλάστρα με κόκκινα λουλούδια',
      altBreakfast: 'Καφές για δύο στο γυάλινο τραπέζι, με την Ιουλίδα και τη θάλασσα στο βάθος',
      altSunsetHouse: 'Η βίλα στο ηλιοβασίλεμα, με τον ήλιο χαμηλά πάνω από τη θάλασσα',
      dialAm: 'ΠΡΩΙ', dialPm: 'ΗΛΙΟΒΑΣΙΛΕΜΑ',
      windowTitle: 'Η Ιουλίδα, <em>ακριβώς από κάτω.</em>',
      desc: 'Ιδιωτική κυκλαδίτικη βίλα πάνω από την Ιουλίδα της Κέας, για έως έξι επισκέπτες, με βεράντα που βλέπει το Αιγαίο και το ηλιοβασίλεμα. Ρωτήστε για διαθεσιμότητα και θα σας απαντήσουμε προσωπικά.',
      skip: 'Μετάβαση στο περιεχόμενο', brandAria: 'Cycladic Villa Kea — Αρχική', place: 'ΙΟΥΛΙΔΑ · ΚΕΑ',
      navMain: 'Κύριο μενού', langGroup: 'Γλώσσα', menu: 'Μενού', menuClose: 'Μενού', fContact: 'Επικοινωνία', askContact: 'Επικοινωνήστε μαζί μας',
      navHome: 'Αρχική', navVilla: 'Η βίλα', navLocation: 'Η τοποθεσία', navContact: 'Επικοινωνία',
      cta: 'Ρωτήστε για διαθεσιμότητα',
      eyebrow: 'ΙΔΙΩΤΙΚΗ ΒΙΛΑ ΣΤΗΝ ΚΕΑ, ΚΥΚΛΑΔΕΣ', h1a: 'Πάνω από την Ιουλίδα,', h1b: 'με θέα το Αιγαίο.',
      heroSub: 'Ένα κομψό κυκλαδίτικο σπίτι για έως έξι επισκέπτες, με σκιερή βεράντα που κοιτάζει κατευθείαν το Αιγαίο.',
      heroLink: 'Γνωρίστε το σπίτι',
      fGuests: 'επισκέπτες το μέγιστο', fBeds: 'υπνοδωμάτια, διπλά κρεβάτια', fSize: 'κυκλαδίτικο σπίτι', fPark: 'αυτοκίνητα, ιδιωτικό πάρκινγκ',
      altHero: 'Το σκιερό καθιστικό της βεράντας ανάμεσα σε δύο πέτρινες κολόνες, με θέα τους λόφους και το Αιγαίο',
      vHeroAria: 'Βίντεο: από την πέργκολα προς τη θέα', vHeroPlay: 'Η βεράντα · 15 δλ.',
      vPlay: 'Αναπαραγωγή βίντεο', vPause: 'Παύση βίντεο', vSoundOn: 'Με ήχο', vSoundOff: 'Χωρίς ήχο',
      kHouse: 'ΤΟ ΣΠΙΤΙ', houseTitle: 'Ένα κομψό κυκλαδίτικο σπίτι, <em>ανοιχτό στο φως.</em>',
      houseP1: 'Το σπίτι είναι χτισμένο όπως χτίζει το νησί: ασβεστωμένοι τοίχοι, μπλε παντζούρια και πέτρινο πλακόστρωτο. Τα 100 τ.μ. του είναι μοιρασμένα για έως έξι άτομα, ώστε μια οικογένεια ή μια παρέα να μοιράζεται τις μέρες και να έχει ο καθένας και ένα ήσυχο δωμάτιο.',
      houseP2: 'Βεράντες περιβάλλουν τη βίλα, για να ακολουθείτε τη σκιά ή τον ήλιο όσο γυρίζει η μέρα. Πιο πέρα, ένα κτήμα με βελανιδιές κρατά το σπίτι ιδιωτικό και ήσυχο πάνω από το χωριό.',
      altFacade: 'Η ασβεστωμένη πρόσοψη με τα μπλε παντζούρια, το πέτρινο πλακόστρωτο και ένα πήλινο πιθάρι',
      altBedroom: 'Φωτεινό υπνοδωμάτιο με διπλό κρεβάτι και παράθυρα ανοιχτά προς τους λόφους',
      vTourAria: 'Βίντεο: μια σύντομη περιήγηση γύρω από το σπίτι', vTourPlay: 'Περιήγηση · 27 δλ.',
      sGuests: 'Επισκέπτες', vGuests: 'Έως 6', sBeds: 'Υπνοδωμάτια', vBeds: '3, όλα με διπλό κρεβάτι', sSize: 'Εμβαδόν', vSize: '100 τ.μ.',
      sComfort: 'Άνεση', vComfort: 'Wi-Fi, κλιματισμός', sKitchen: 'Κουζίνα', vKitchen: 'Πλήρως εξοπλισμένη',
      sPark: 'Στάθμευση', vPark: 'Ιδιωτική, για 2 αυτοκίνητα',
      sCost: 'Κόστος', vCost: '100 € ανά βράδυ', vCostNote: 'Ενδεικτική τιμή, προς επιβεβαίωση',
      houseCta: 'Δείτε τη βίλα',
      kTerrace: 'Η ΒΕΡΑΝΤΑ', terraceTitle: 'Κάτω από την πέργκολα, <em>το Αιγαίο μπροστά σας.</em>',
      vGoldAria: 'Βίντεο: το απογευματινό φως μέσα από τις κουρτίνες', vGoldPlay: 'Χρυσή ώρα',
      mMorning: 'Το πρωί', mEvening: 'Αργά το απόγευμα',
      terraceMorning: 'Το πρωί η πέργκολα ρίχνει ριγέ σκιά πάνω στο τραπέζι. Το πρωινό γίνεται στη δροσιά, όσο οι λόφοι και η θάλασσα είναι ακόμη χλωμοί στο βάθος.',
      terraceEvening: 'Αργότερα το φως γυρίζει και πέφτει προς το Αιγαίο. Η πέτρα του τοίχου ζεσταίνεται, οι λόφοι χρυσίζουν και ο ήλιος δύει στη θάλασσα μπροστά από την κύρια βεράντα.',
      altTerrace: 'Το τραπέζι κάτω από την πέργκολα, με θέα τους λόφους και το Αιγαίο',
      kKea: 'ΙΟΥΛΙΔΑ & ΚΕΑ', keaTitle: 'Ένα χωριό από σκαλοπάτια, <em>ακριβώς από κάτω.</em>',
      keaP: 'Η βίλα βρίσκεται στην πλαγιά πάνω από την Ιουλίδα, την πρωτεύουσα της Κέας. Από τον τοίχο της βεράντας βλέπετε από ψηλά τις στέγες, τα στενά και τα σκαλοπάτια της, και πιο πέρα λόφους με βελανιδιές να κατεβαίνουν προς τη θάλασσα.',
      keaP2: 'Η Κέα είναι το κοντινότερο νησί των Κυκλάδων στην Αθήνα, περίπου μία ώρα με το πλοίο από το Λαύριο.',
      altIoulida: 'Η Ιουλίδα απλωμένη στην πλαγιά, όπως φαίνεται από τον τοίχο της βεράντας',
      keaCta: 'Τοποθεσία και πρόσβαση',
      kAsk: 'ΔΙΑΘΕΣΙΜΟΤΗΤΑ', askTitle: 'Πείτε μας <em>τις ημερομηνίες σας.</em>',
      askP: 'Στείλτε μας τις ημερομηνίες που σας ενδιαφέρουν και πόσα άτομα θα είστε. Θα ελέγξουμε τη διαθεσιμότητα και θα σας απαντήσουμε προσωπικά με τη συνολική τιμή για τη διαμονή σας.',
      askLangs: 'Απαντάμε στα ελληνικά, στα αγγλικά ή στα γαλλικά.',
      askCall: 'Καλέστε μας', askInsta: 'Στείλτε μας μήνυμα στο Instagram',
      tagline: 'Το κυκλαδίτικο καταφύγιό σας, πάνω από τη θάλασσα.', fExplore: 'Περιηγηθείτε', fFollow: 'Ακολουθήστε μας', fCall: 'Τηλέφωνο',
      fLangs: 'Ελληνικά · English · Français', privacy: 'Πολιτική απορρήτου', credit: 'Δημιουργία ιστοσελίδας: Μιχάλης Μερκούρης',
      stickyA: 'Προσωπική απάντηση', stickyB: 'EL · EN · FR'
    }
  };

  var current = 'en';
  function each(sel, fn) { Array.prototype.forEach.call(document.querySelectorAll(sel), fn); }

  // English is the main language. A choice saved by earlier versions must not bring Greek back on load.
  try { localStorage.removeItem('cvk-lang'); } catch (e) {}

  var clips = [];   // filled below; their labels follow the language

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
    each('[data-lang]', function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang)); });
    clips.forEach(function (c) { c.sync(); });
    if (window.__cvkAfterLang) window.__cvkAfterLang();
  }

  each('[data-lang]', function (b) {
    b.addEventListener('click', function () {
      var lang = b.getAttribute('data-lang');
      if (lang !== current) applyLang(lang);
    });
  });

  /* ---------------- Sticky header ---------------- */
  var header = document.querySelector('.site-header');
  function syncHeader() { header.classList.toggle('is-scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', syncHeader, { passive: true });
  syncHeader();

  /* ---------------- Mobile menu ---------------- */
  var menuBtn = document.querySelector('.menu-btn');
  var panel = document.getElementById('menu-panel');
  function setMenu(open, keepFocus) {
    if (!menuBtn) return;
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

  /* ---------------- Home and in-page links: eased smooth scroll (v4.7) ----------------
     Our own animation, so it stays smooth even where the browser drops CSS smooth scrolling
     (e.g. Chrome on Windows with animation effects off). Any wheel/touch/key input takes over at once. */
  var scrollAnim = 0;
  function stopScroll() { if (scrollAnim) { cancelAnimationFrame(scrollAnim); scrollAnim = 0; } }
  ['wheel', 'touchstart', 'keydown', 'mousedown'].forEach(function (ev) { window.addEventListener(ev, stopScroll, { passive: true }); });
  function smoothScrollTo(y, done) {
    stopScroll();
    var start = window.scrollY, dist = y - start, t0 = null;
    if (Math.abs(dist) < 2) { if (done) done(); return; }
    var dur = Math.min(1500, Math.max(650, Math.abs(dist) * 0.45));
    var ease = function (t) { return t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; };
    (function step(now) {
      if (t0 === null) t0 = now;
      var k = Math.min(1, (now - t0) / dur);
      window.scrollTo(0, start + dist * ease(k));
      if (k < 1) scrollAnim = requestAnimationFrame(step); else { scrollAnim = 0; if (done) done(); }
    })(performance.now());
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a || a.classList.contains('skip') || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
    var id = a.getAttribute('href').slice(1);
    var target = a.hasAttribute('data-home') ? document.getElementById('top') : (id && document.getElementById(id));
    if (!target) return;
    e.preventDefault();
    var y = a.hasAttribute('data-home') ? 0
      : target.getBoundingClientRect().top + window.scrollY - (parseFloat(getComputedStyle(target).scrollMarginTop) || 0);
    smoothScrollTo(Math.max(0, Math.round(y)), function () { target.focus({ preventScroll: true }); });
    if (history.replaceState) history.replaceState(null, '', a.hasAttribute('data-home') ? location.pathname + location.search : '#' + id);
  });

  /* ---------------- Video clips ----------------
     Hero: may start by itself (desktop, no reduced-motion), always muted, pausable.
     Section clips: start only on Play, load only then, pause when scrolled away. */
  var desktop = window.matchMedia('(min-width: 960px)');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

  function Clip(fig) {
    var self = this;
    this.fig = fig;
    this.video = fig.querySelector('video');
    this.toggle = fig.querySelector('[data-action="toggle"]');
    this.sound = fig.querySelector('[data-action="sound"]');
    this.userPaused = false;
    this.video.muted = true;
    this.video.addEventListener('play', function () { self.sync(); });
    this.video.addEventListener('pause', function () { self.sync(); });
    this.video.addEventListener('ended', function () { self.sync(); });
    this.toggle.addEventListener('click', function () {
      if (self.video.paused) { self.userPaused = false; self.play(); } else { self.userPaused = true; self.video.pause(); }
    });
    if (this.sound) {
      this.sound.addEventListener('click', function () { self.video.muted = !self.video.muted; self.sync(); });
    }
  }
  Clip.prototype.play = function () {
    var self = this;
    if (this.video.preload === 'none') this.video.preload = 'auto';
    var p = this.video.play();
    if (p && p.catch) p.catch(function () { self.failed = true; self.sync(); if (self.onFail) self.onFail(); });
    return p;
  };
  Clip.prototype.sync = function () {
    var playing = !this.video.paused && !this.video.ended;
    var d = T[current];
    this.fig.setAttribute('data-state', playing ? 'playing' : 'paused');
    var label = this.toggle.querySelector('.clip__label');
    var key = this.fig.getAttribute('data-play-key');
    if (label) label.textContent = playing ? d.vPause : (key ? d[key] : d.vPlay);
    if (key) this.toggle.removeAttribute('aria-label');                 // visible label is the name
    else this.toggle.setAttribute('aria-label', playing ? d.vPause : d.vPlay);   // icon-only hero button
    if (this.sound) {
      this.sound.hidden = !playing && this.video.currentTime === 0;
      this.sound.setAttribute('aria-pressed', String(!this.video.muted));
      this.sound.querySelector('span').textContent = this.video.muted ? d.vSoundOn : d.vSoundOff;
    }
  };

  // Section clips
  each('[data-clip="section"]', function (fig) {
    var key = fig.querySelector('.clip__label').getAttribute('data-i18n');
    fig.setAttribute('data-play-key', key);
    fig.querySelector('.clip__label').removeAttribute('data-i18n');   // label is managed by sync()
    var c = new Clip(fig);
    clips.push(c); c.sync();
  });

  // Hero clip
  var heroFig = document.querySelector('[data-clip="hero"]');
  var heroPlay = document.querySelector('.hero-play');
  var hero = null;
  if (heroFig && heroPlay) {
    hero = new Clip(heroFig);
    hero.toggle.hidden = false;
    clips.push(hero);
    var showClip = function (on) { heroFig.classList.toggle('is-on', on); heroPlay.hidden = on; };
    hero.onFail = function () { showClip(false); };               // playback failed: the photo carries the hero
    heroPlay.addEventListener('click', function () { hero.userPaused = false; showClip(true); hero.play(); });
    var autoStart = function () {
      if (desktop.matches && !reduce.matches) {
        showClip(true);
        hero.play();
      } else {
        heroPlay.hidden = false;                                    // mobile / reduced motion: photo + Play option
      }
    };
    if (document.readyState === 'complete') setTimeout(autoStart, 400);
    else window.addEventListener('load', function () { setTimeout(autoStart, 400); });
    hero.sync();
  }


  /* ---------------- Scroll scenes (v4) ----------------
     One rAF-throttled loop reads each scene's position and writes CSS variables:
       hero   --hp  0→1 while the hero scrolls away (photo settles)
       welcome      words light up one by one; --p drives the sign's parallax
       house  --hp2 progress through the gallery; index/label follow the photo at mid-screen
       stage  --k   morning → late afternoon crossfade, --q sun position on the dial
       window --w   arch opens to full bleed, --c the text card arrives (clip-path set here) */
  var clamp = function (v) { return v < 0 ? 0 : v > 1 ? 1 : v; };
  var smooth = function (a, b, v) { var t = clamp((v - a) / (b - a)); return t * t * (3 - 2 * t); };
  var headerH = function () { return header.getBoundingClientRect().height; };

  var heroEl = document.getElementById('top');
  var welcomeText = document.querySelector('.welcome__text');
  var welcomeEl = document.querySelector('.welcome');
  var words = [];
  function splitWords() {
    if (!welcomeText) return;
    var txt = welcomeText.textContent.trim();
    welcomeText.innerHTML = txt.split(/\s+/).map(function (w) { return '<span class="w">' + w.replace(/[&<>]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]; }) + '</span>'; }).join(' ');
    words = Array.prototype.slice.call(welcomeText.querySelectorAll('.w'));
  }

  var gallery = document.querySelector('.house__gallery');
  var houseSec = document.getElementById('villa');
  var items = Array.prototype.slice.call(document.querySelectorAll('.g-item'));
  var nums = document.querySelectorAll('.house__n'), labels = document.querySelectorAll('.house__label');
  var currentItem = -1;
  function setItem(i, force) {
    if (i === currentItem && !force) return;
    currentItem = i;
    var key = items[i].getAttribute('data-label'), text = T[current][key];
    Array.prototype.forEach.call(nums, function (n) { n.textContent = ('0' + (i + 1)).slice(-2); });
    Array.prototype.forEach.call(labels, function (l) {
      if (force) { l.textContent = text; l.setAttribute('data-i18n', key); return; }
      l.classList.add('is-swapping');
      setTimeout(function () { l.textContent = text; l.setAttribute('data-i18n', key); l.classList.remove('is-swapping'); }, 180);
    });
  }

  var stageSec = document.getElementById('terrace'), stage = stageSec && stageSec.querySelector('.stage');
  var winSec = document.getElementById('kea'), win = winSec && winSec.querySelector('.window'), frameEl = winSec && winSec.querySelector('.window__frame');

  function pinProgress(sec) {
    var r = sec.getBoundingClientRect(), H = headerH(), run = r.height - (window.innerHeight - H);
    return run > 0 ? clamp((H - r.top) / run) : 0;
  }
  function near(el) { var r = el.getBoundingClientRect(); return r.bottom > -200 && r.top < window.innerHeight + 200; }

  var ticking = false;
  function frame() {
    ticking = false;
    var vh = window.innerHeight;

    if (heroEl && near(heroEl)) heroEl.style.setProperty('--hp', clamp(window.scrollY / heroEl.offsetHeight).toFixed(4));

    if (welcomeEl && near(welcomeEl)) {
      var wr = welcomeText.getBoundingClientRect();
      var t = clamp((vh * 0.82 - wr.top) / (wr.height + vh * 0.32));
      var lit = Math.round(t * words.length);
      for (var i = 0; i < words.length; i++) words[i].classList.toggle('on', i < lit);
      var er = welcomeEl.getBoundingClientRect();
      welcomeEl.style.setProperty('--p', clamp((vh - er.top) / (vh + er.height)).toFixed(4));
    }

    if (gallery && near(houseSec)) {
      var gr = gallery.getBoundingClientRect();
      houseSec.style.setProperty('--hp2', clamp((vh * 0.5 - gr.top) / gr.height).toFixed(4));
      var idx = 0;
      for (var j = 0; j < items.length; j++) { if (items[j].getBoundingClientRect().top < vh * 0.55) idx = j; }
      setItem(idx);
    }

    if (stage && near(stageSec)) {
      var sp = pinProgress(stageSec), k = smooth(0.3, 0.7, sp);
      stage.style.setProperty('--k', k.toFixed(4));
      stage.style.setProperty('--q', sp.toFixed(4));
      stage.classList.toggle('is-pm', k > 0.5);
    }

    if (win && near(winSec)) {
      var wp = pinProgress(winSec), w = smooth(0.04, 0.58, wp), c = smooth(0.62, 0.86, wp);
      win.style.setProperty('--w', w.toFixed(4));
      win.style.setProperty('--c', c.toFixed(4));
      var W = win.clientWidth, Hs = win.clientHeight, wide = W >= 960;
      var titleEl = win.querySelector('.window__title');
      var tb = titleEl.offsetTop + titleEl.offsetHeight + 28;                       // the arch always starts below the title
      var t0 = Math.max(Hs * 0.28, tb), h0 = Math.max(Hs - t0 - Hs * 0.1, Hs * 0.32);
      var w0 = Math.min(W * (wide ? 0.3 : 0.6), h0 * 0.8);
      var inv = 1 - w, side = ((W - w0) / 2) * inv, top = t0 * inv, bottom = (Hs - t0 - h0) * inv, rad = (w0 / 2) * inv;
      frameEl.style.clipPath = 'inset(' + top.toFixed(1) + 'px ' + side.toFixed(1) + 'px ' + bottom.toFixed(1) + 'px ' + side.toFixed(1) + 'px round ' + rad.toFixed(1) + 'px ' + rad.toFixed(1) + 'px 0 0)';
    }

  }
  function requestFrame() { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }
  window.addEventListener('scroll', requestFrame, { passive: true });
  window.addEventListener('resize', requestFrame);

  window.__cvkAfterLang = function () { splitWords(); if (items.length) setItem(Math.max(currentItem, 0), true); requestFrame(); };
  splitWords();
  if (items.length) setItem(0, true);
  requestFrame();

  /* ---------------- Hero intro (short; waits briefly for fonts so lines don't re-wrap) ---------------- */
  function start() {
    requestAnimationFrame(function () { requestAnimationFrame(function () {
      root.classList.add('is-ready');
      // v4.3: the hero video controls come last, only after the final intro element has finished
      // (listens for the real end of the last transition; the timeout is only a safety net)
      var done = false, finish = function () { if (!done) { done = true; root.classList.add('intro-done'); } };
      var facts = document.querySelectorAll('.facts li'), lastFact = facts[facts.length - 1];
      if (lastFact) lastFact.addEventListener('transitionend', function (e) { if (e.propertyName === 'opacity' || e.propertyName === 'transform') setTimeout(finish, 150); });
      setTimeout(finish, 3400);
    }); });
  }
  var fontsReady = (document.fonts && document.fonts.ready) ? document.fonts.ready : Promise.resolve();
  Promise.race([fontsReady, new Promise(function (r) { setTimeout(r, 600); })]).then(start);

  /* ---------------- Observers: reveals, sticky CTA, clips leaving the screen ---------------- */
  if ('IntersectionObserver' in window) {
    root.classList.add('io');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in-view'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 });
    each('[data-reveal], .ask', function (el) { io.observe(el); });

    var sticky = document.querySelector('.sticky-cta');
    var heroOut = false, askIn = false, footIn = false;
    function syncSticky() {
      var on = heroOut && !askIn && !footIn;   // v4.6: also steps aside for the footer
      sticky.classList.toggle('is-visible', on);
      sticky.setAttribute('aria-hidden', String(!on));
      sticky.querySelector('a').tabIndex = on ? 0 : -1;
    }
    new IntersectionObserver(function (e) { heroOut = !e[0].isIntersecting; syncSticky(); }, { threshold: 0 })
      .observe(document.querySelector('.hero__actions'));
    new IntersectionObserver(function (e) { askIn = e[0].isIntersecting; syncSticky(); }, { threshold: 0 })
      .observe(document.getElementById('contact'));
    new IntersectionObserver(function (e) { footIn = e[0].isIntersecting; syncSticky(); }, { threshold: 0 })
      .observe(document.querySelector('.site-footer'));

    // Any clip pauses when it leaves the screen. Only the hero resumes by itself, and only if the visitor didn't pause it.
    var vio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var c = clips.filter(function (x) { return x.fig === en.target; })[0];
        if (!c) return;
        if (!en.isIntersecting) { if (!c.video.paused) c.video.pause(); }
        else if (c === hero && heroFig.classList.contains('is-on') && !c.userPaused && !c.failed && c.video.paused && c.video.preload !== 'none') { c.play(); }
      });
    }, { threshold: 0.15 });
    clips.forEach(function (c) { vio.observe(c.fig); });
  } else {
    root.classList.add('reveal-all');
  }
})();

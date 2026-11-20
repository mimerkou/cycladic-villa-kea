/* Cycladic Villa Kea — "Contact" page
   The availability request: a custom range calendar (the days between fill like a tide), a rolling
   guest counter, gentle validation, and a short letter that writes itself beside the form and is
   folded and sealed on sending. DEMO: nothing is sent yet.
   Shared with the home page: header, mobile menu, EN/EL, smooth in-page scroll, mobile sticky CTA.
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
  "title": "Request availability — Cycladic Villa Kea, Ioulida, Kea",
  "desc": "Send us your dates and the number of guests. We check availability and reply personally, usually within the same day, with the total price for your stay.",
  "cKicker": "Contact",
  "cTitle": "Tell us <em>your dates.</em>",
  "cLead": "Choose the dates you have in mind and tell us how many of you are coming. We will check availability and reply personally with the total price for your stay.",
  "pt1": "This is not a booking, and there is nothing to pay.",
  "pt2": "We usually reply within the same day, in Greek, English or French.",
  "pt3": "Your stay is confirmed afterwards, once we have agreed on everything together.",
  "lTo": "To Cycladic Villa Kea, Ioulida",
  "lHello": "Hello,",
  "lStay1": "We would love to stay",
  "lFrom": "from",
  "lTo2": "to",
  "lWe": "We are",
  "lSign": "With warm wishes,",
  "lBlank": "your name",
  "fDates": "Your dates",
  "fArrival": "Arrival",
  "fDeparture": "Departure",
  "fPick": "Select",
  "fPickArr": "Choose your arrival date",
  "fPickDep": "Now choose your departure date",
  "fClear": "Clear dates",
  "prevMonth": "Previous month",
  "nextMonth": "Next month",
  "night1": "night",
  "nightN": "nights",
  "minStay": "Most stays are at least three nights. Tell us anyway, and we will see what we can do.",
  "fGuests": "Guests",
  "fGuestsHint": "The villa welcomes up to 6 guests.",
  "guest1": "guest",
  "guestN": "guests",
  "fewer": "Fewer guests",
  "more": "More guests",
  "fName": "Your name",
  "fEmail": "Email",
  "fPhone": "Phone",
  "optional": "optional",
  "fMsg": "Anything we should know?",
  "fMsgPh": "Flexible dates, children’s ages, a special occasion…",
  "fConsent": "I agree that my details are used to reply to this request, as described in the <a class=\"link--inline\" href=\"privacy.html\" target=\"_blank\" rel=\"noopener\">privacy policy</a>.",
  "fSend": "Request availability",
  "fNote": "Not a booking · nothing to pay",
  "summaryEmpty": "Choose your dates above",
  "eDates": "Please choose your arrival and departure dates.",
  "eDep": "Please choose your departure date too.",
  "eName": "Please tell us your name.",
  "eEmail": "Please enter an email address we can reply to.",
  "eEmailBad": "This email doesn’t look quite right.",
  "eConsent": "Please tick the box so we can reply to you.",
  "eSummary": "A few details are missing. Please check the fields marked below.",
  "okTitle": "Thank you, <em>it’s on its way.</em>",
  "okP": "We usually reply within the same day. Keep an eye on your inbox, and on your spam folder, just in case.",
  "okReplyTo": "We will reply to",
  "okDemo": "Demo version: the form is not connected yet, so nothing was sent.",
  "okEdit": "Change my request",
  "kHow": "How it works",
  "howTitle": "Three simple <em>steps.</em>",
  "h1t": "You send your dates",
  "h1p": "A few details are enough: your dates, how many you are and how to reach you.",
  "h2t": "We check our calendar",
  "h2p": "We look at your dates ourselves, not a booking system, and see what we can do.",
  "h3t": "We reply personally",
  "h3p": "We write back with availability, the total price and all you need to decide.",
  "kOther": "Other ways to reach us",
  "oCall": "Call us",
  "oWrite": "Write to us",
  "oFollow": "Follow us",
  "oLangs": "We speak",
  "oLangsV": "Ελληνικά · English · Français"
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
  "title": "Αίτημα διαθεσιμότητας — Cycladic Villa Kea, Ιουλίδα, Κέα",
  "desc": "Στείλτε μας τις ημερομηνίες και τον αριθμό των επισκεπτών. Ελέγχουμε τη διαθεσιμότητα και σας απαντάμε προσωπικά, συνήθως την ίδια μέρα, με τη συνολική τιμή.",
  "cKicker": "Επικοινωνία",
  "cTitle": "Πείτε μας <em>τις ημερομηνίες σας.</em>",
  "cLead": "Διαλέξτε τις ημερομηνίες που σας ενδιαφέρουν και πείτε μας πόσα άτομα θα είστε. Θα ελέγξουμε τη διαθεσιμότητα και θα σας απαντήσουμε προσωπικά με τη συνολική τιμή για τη διαμονή σας.",
  "pt1": "Δεν είναι κράτηση και δεν πληρώνετε τίποτα.",
  "pt2": "Συνήθως απαντάμε εντός της ίδιας μέρας, στα ελληνικά, στα αγγλικά ή στα γαλλικά.",
  "pt3": "Η διαμονή σας επιβεβαιώνεται μετά, αφού συμφωνήσουμε μαζί σε όλα.",
  "lTo": "Προς Cycladic Villa Kea, Ιουλίδα",
  "lHello": "Γεια σας,",
  "lStay1": "Θα θέλαμε να μείνουμε",
  "lFrom": "από",
  "lTo2": "έως",
  "lWe": "Είμαστε",
  "lSign": "Με εκτίμηση,",
  "lBlank": "το όνομά σας",
  "fDates": "Οι ημερομηνίες σας",
  "fArrival": "Άφιξη",
  "fDeparture": "Αναχώρηση",
  "fPick": "Επιλογή",
  "fPickArr": "Επιλέξτε την ημερομηνία άφιξης",
  "fPickDep": "Τώρα επιλέξτε την ημερομηνία αναχώρησης",
  "fClear": "Καθαρισμός",
  "prevMonth": "Προηγούμενος μήνας",
  "nextMonth": "Επόμενος μήνας",
  "night1": "νύχτα",
  "nightN": "νύχτες",
  "minStay": "Οι περισσότερες διαμονές είναι τουλάχιστον τρεις νύχτες. Πείτε μας πάντως, και θα δούμε τι μπορούμε να κάνουμε.",
  "fGuests": "Επισκέπτες",
  "fGuestsHint": "Η βίλα φιλοξενεί έως 6 επισκέπτες.",
  "guest1": "επισκέπτης",
  "guestN": "επισκέπτες",
  "fewer": "Λιγότεροι επισκέπτες",
  "more": "Περισσότεροι επισκέπτες",
  "fName": "Το όνομά σας",
  "fEmail": "Email",
  "fPhone": "Τηλέφωνο",
  "optional": "προαιρετικό",
  "fMsg": "Κάτι που θα θέλατε να ξέρουμε;",
  "fMsgPh": "Ευέλικτες ημερομηνίες, ηλικίες παιδιών, μια ξεχωριστή περίσταση…",
  "fConsent": "Συμφωνώ να χρησιμοποιηθούν τα στοιχεία μου για την απάντηση σε αυτό το αίτημα, όπως περιγράφεται στην <a class=\"link--inline\" href=\"privacy.html\" target=\"_blank\" rel=\"noopener\">πολιτική απορρήτου</a>.",
  "fSend": "Ρωτήστε για διαθεσιμότητα",
  "fNote": "Δεν είναι κράτηση · δεν πληρώνετε τίποτα",
  "summaryEmpty": "Επιλέξτε πρώτα τις ημερομηνίες σας",
  "eDates": "Παρακαλούμε επιλέξτε ημερομηνίες άφιξης και αναχώρησης.",
  "eDep": "Παρακαλούμε επιλέξτε και ημερομηνία αναχώρησης.",
  "eName": "Παρακαλούμε γράψτε το όνομά σας.",
  "eEmail": "Παρακαλούμε γράψτε ένα email για να σας απαντήσουμε.",
  "eEmailBad": "Αυτό το email δεν φαίνεται σωστό.",
  "eConsent": "Παρακαλούμε τσεκάρετε το κουτάκι για να μπορέσουμε να σας απαντήσουμε.",
  "eSummary": "Λείπουν κάποια στοιχεία. Ελέγξτε τα σημειωμένα πεδία.",
  "okTitle": "Ευχαριστούμε, <em>το αίτημα ξεκίνησε.</em>",
  "okP": "Συνήθως απαντάμε εντός της ίδιας μέρας. Ρίξτε μια ματιά στο email σας, και στα ανεπιθύμητα, για καλό και για κακό.",
  "okReplyTo": "Θα σας απαντήσουμε στο",
  "okDemo": "Δοκιμαστική έκδοση: η φόρμα δεν είναι ακόμα συνδεδεμένη, οπότε δεν στάλθηκε τίποτα.",
  "okEdit": "Αλλαγή του αιτήματος",
  "kHow": "Πώς λειτουργεί",
  "howTitle": "Τρία απλά <em>βήματα.</em>",
  "h1t": "Στέλνετε τις ημερομηνίες",
  "h1p": "Αρκούν λίγα στοιχεία: οι ημερομηνίες σας, πόσα άτομα θα είστε και πώς θα σας βρούμε.",
  "h2t": "Ελέγχουμε το ημερολόγιο",
  "h2p": "Κοιτάζουμε εμείς οι ίδιοι τις ημερομηνίες σας, όχι ένα σύστημα κρατήσεων, και βλέπουμε τι μπορούμε.",
  "h3t": "Απαντάμε προσωπικά",
  "h3p": "Σας γράφουμε με τη διαθεσιμότητα, τη συνολική τιμή και ό,τι χρειάζεστε για να αποφασίσετε.",
  "kOther": "Άλλοι τρόποι επικοινωνίας",
  "oCall": "Καλέστε μας",
  "oWrite": "Γράψτε μας",
  "oFollow": "Ακολουθήστε μας",
  "oLangs": "Μιλάμε",
  "oLangsV": "Ελληνικά · English · Français"
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
    each('[data-i18n-ph]', function (el) { var k = el.getAttribute('data-i18n-ph'); if (d[k] != null) el.setAttribute('placeholder', d[k]); });
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

  each('[data-year]', function (el) { el.textContent = String(new Date().getFullYear()); });   // © year follows the calendar

  /* ---------------- Sticky header ---------------- */
  var header = document.querySelector('.site-header');
  function syncHeader() { header.classList.toggle('is-scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', syncHeader, { passive: true });
  syncHeader();

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

  var L = function () { return T[current]; };
  var LOC = function () { return current === 'el' ? 'el' : 'en-GB'; };
  function fmt(d, o) { return new Intl.DateTimeFormat(LOC(), o).format(d); }
  function iso(d) { return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
  function addDays(d, n) { var x = new Date(d); x.setDate(x.getDate() + n); return x; }
  function sameDay(a, b) { return a && b && a.getTime() === b.getTime(); }
  function nightsBetween(a, b) { return Math.round((b - a) / 864e5); }

  /* ---------------- Calendar ---------------- */
  var today = new Date(); today.setHours(0, 0, 0, 0);
  var maxDate = new Date(today.getFullYear(), today.getMonth() + 18, 0);
  var cal = document.getElementById('cal');
  var monthsEl = cal.querySelector('.cal__months');
  var hintEl = cal.querySelector('.cal__hint'), nightsEl = cal.querySelector('.cal__nights'), minEl = cal.querySelector('.cal__min');
  var clearBtn = cal.querySelector('.cal__clear');
  var prevBtn = cal.querySelector('.cal__prev'), nextBtn = cal.querySelector('.cal__next');
  var inFrom = document.getElementById('arrival'), inTo = document.getElementById('departure');
  var two = window.matchMedia('(min-width: 720px)');
  var from = null, to = null, hover = null;
  var view = new Date(today.getFullYear(), today.getMonth(), 1);
  var focusDate = new Date(today);

  function weekdayNames() {
    var monday = new Date(2024, 0, 1), out = [];
    for (var i = 0; i < 7; i++) out.push(fmt(addDays(monday, i), { weekday: 'short' }));
    return out;
  }
  function render() {
    var n = two.matches ? 2 : 1, html = '', wd = weekdayNames();
    for (var m = 0; m < n; m++) {
      var first = new Date(view.getFullYear(), view.getMonth() + m, 1);
      var title = fmt(first, { month: 'long', year: 'numeric' });
      html += '<div class="cal__month"><p class="cal__title">' + title.charAt(0).toUpperCase() + title.slice(1) + '</p>' +
        '<div class="cal__grid" role="grid" aria-label="' + title + '"><div class="cal__wd" role="row">' +
        wd.map(function (w) { return '<span role="columnheader">' + w + '</span>'; }).join('') + '</div><div class="cal__days">';
      var lead = (first.getDay() + 6) % 7;
      for (var i = 0; i < lead; i++) html += '<span class="cal__pad" aria-hidden="true"></span>';
      var days = new Date(first.getFullYear(), first.getMonth() + 1, 0).getDate();
      for (var d = 1; d <= days; d++) {
        var date = new Date(first.getFullYear(), first.getMonth(), d), off = date < today || date > maxDate;
        html += '<button type="button" class="cal__day' + (sameDay(date, today) ? ' is-today' : '') + '" data-date="' + iso(date) + '"' +
          (off ? ' disabled' : '') + ' tabindex="-1" aria-label="' + fmt(date, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) + '"><span>' + d + '</span></button>';
      }
      html += '</div></div></div>';
    }
    monthsEl.innerHTML = html;
    prevBtn.disabled = view.getFullYear() === today.getFullYear() && view.getMonth() === today.getMonth();
    var last = new Date(view.getFullYear(), view.getMonth() + n, 0);
    nextBtn.disabled = last >= maxDate;
    paint(true);
  }
  function parse(s) { var p = s.split('-'); return new Date(+p[0], +p[1] - 1, +p[2]); }
  // Classes only — so the range can "fill like a tide" (CSS transition delays along the range)
  function paint(instant) {
    var end = to || (from && hover && hover > from ? hover : null);
    var k = 0;
    each('.cal__day', function (b) {
      var d = parse(b.getAttribute('data-date'));
      var isFrom = sameDay(d, from), isTo = sameDay(d, to), inR = from && end && d > from && d < end;
      b.classList.toggle('is-from', !!isFrom);
      b.classList.toggle('is-to', !!isTo || (!to && hover && end && sameDay(d, end)));
      b.classList.toggle('in-range', !!(inR && to));
      b.classList.toggle('in-preview', !!(inR && !to));
      b.classList.toggle('has-range', !!(isFrom && end));
      if (inR) b.style.setProperty('--k', String(instant ? 0 : k++)); else b.style.removeProperty('--k');
      b.setAttribute('aria-pressed', String(!!(isFrom || isTo)));
      b.tabIndex = sameDay(d, focusDate) ? 0 : -1;
    });
    if (!monthsEl.querySelector('.cal__day[tabindex="0"]')) {
      var first = monthsEl.querySelector('.cal__day:not([disabled])'); if (first) first.tabIndex = 0;
    }
  }
  function syncDates() {
    var d = L();
    inFrom.value = from ? iso(from) : ''; inTo.value = to ? iso(to) : '';
    var fo = { weekday: 'short', day: 'numeric', month: 'short' };
    var vf = document.querySelector('[data-v="from"]'), vt = document.querySelector('[data-v="to"]');
    vf.textContent = from ? fmt(from, fo) : d.fPick; vt.textContent = to ? fmt(to, fo) : d.fPick;
    vf.removeAttribute('data-i18n'); vt.removeAttribute('data-i18n');
    document.querySelector('[data-box="from"]').classList.toggle('is-set', !!from);
    document.querySelector('[data-box="to"]').classList.toggle('is-set', !!to);
    document.querySelector('[data-box="from"]').classList.toggle('is-active', !from || (!!from && !!to));
    document.querySelector('[data-box="to"]').classList.toggle('is-active', !!from && !to);
    hintEl.textContent = !from ? d.fPickArr : !to ? d.fPickDep : '';
    var n = from && to ? nightsBetween(from, to) : 0;
    nightsEl.textContent = n ? n + ' ' + (n === 1 ? d.night1 : d.nightN) : '';
    nightsEl.classList.toggle('is-on', !!n);
    minEl.hidden = !(n && n < 3);
    clearBtn.hidden = !from;
    updateLetter();
    if (tried) validate('dates');
  }
  function pick(d) {
    if (!from || to) { from = d; to = null; }
    else if (d <= from) { from = d; }
    else { to = d; }
    focusDate = d; hover = null;
    paint(false); syncDates();
  }
  monthsEl.addEventListener('click', function (e) {
    var b = e.target.closest('.cal__day'); if (!b || b.disabled) return;
    pick(parse(b.getAttribute('data-date')));
  });
  monthsEl.addEventListener('pointerover', function (e) {
    var b = e.target.closest('.cal__day'); if (!b || b.disabled || !from || to || e.pointerType === 'touch') return;
    hover = parse(b.getAttribute('data-date')); paint(true);
  });
  monthsEl.addEventListener('pointerleave', function () { if (hover) { hover = null; paint(true); } });
  function shownMonths() { return two.matches ? 2 : 1; }
  function ensureVisible(d) {
    var start = view, end = new Date(view.getFullYear(), view.getMonth() + shownMonths(), 0);
    if (d < start) { view = new Date(d.getFullYear(), d.getMonth(), 1); render(); }
    else if (d > end) { view = new Date(d.getFullYear(), d.getMonth() - shownMonths() + 1, 1); render(); }
  }
  monthsEl.addEventListener('keydown', function (e) {
    var b = e.target.closest('.cal__day'); if (!b) return;
    var d = parse(b.getAttribute('data-date')), n = null;
    switch (e.key) {
      case 'ArrowLeft': n = addDays(d, -1); break;
      case 'ArrowRight': n = addDays(d, 1); break;
      case 'ArrowUp': n = addDays(d, -7); break;
      case 'ArrowDown': n = addDays(d, 7); break;
      case 'Home': n = addDays(d, -((d.getDay() + 6) % 7)); break;
      case 'End': n = addDays(d, 6 - ((d.getDay() + 6) % 7)); break;
      case 'PageUp': n = new Date(d.getFullYear(), d.getMonth() - 1, d.getDate()); break;
      case 'PageDown': n = new Date(d.getFullYear(), d.getMonth() + 1, d.getDate()); break;
      default: return;
    }
    e.preventDefault();
    if (n < today) n = new Date(today); if (n > maxDate) n = new Date(maxDate);
    focusDate = n; ensureVisible(n); paint(true);
    var nb = monthsEl.querySelector('[data-date="' + iso(n) + '"]'); if (nb) nb.focus();
    if (from && !to) { hover = n; paint(true); }
  });
  prevBtn.addEventListener('click', function () { view = new Date(view.getFullYear(), view.getMonth() - 1, 1); render(); });
  nextBtn.addEventListener('click', function () { view = new Date(view.getFullYear(), view.getMonth() + 1, 1); render(); });
  clearBtn.addEventListener('click', function () { from = to = hover = null; paint(true); syncDates(); var f = monthsEl.querySelector('.cal__day[tabindex="0"]'); if (f) f.focus(); });
  if (two.addEventListener) two.addEventListener('change', render);

  /* ---------------- Guests ---------------- */
  var guests = document.getElementById('guests');
  var roll = document.querySelector('.stepper__roll');
  var unit = document.querySelector('.stepper__unit');
  var gDown = document.querySelector('[data-step="-1"]'), gUp = document.querySelector('[data-step="1"]');
  var gVal = 2;
  function setGuests(v, dir) {
    v = Math.max(1, Math.min(6, v | 0 || 1));
    var old = gVal; gVal = v; guests.value = v;
    gDown.disabled = v <= 1; gUp.disabled = v >= 6;
    unit.textContent = v === 1 ? L().guest1 : L().guestN; unit.removeAttribute('data-i18n');
    if (old !== v && !reduce.matches) {
      var outEl = roll.firstElementChild, inEl = document.createElement('span');
      inEl.textContent = v; inEl.className = 'is-in ' + (dir > 0 ? 'from-below' : 'from-above');
      if (outEl) { outEl.className = 'is-out ' + (dir > 0 ? 'to-above' : 'to-below'); setTimeout(function () { if (outEl.parentNode) outEl.remove(); }, 420); }
      roll.appendChild(inEl);
      requestAnimationFrame(function () { requestAnimationFrame(function () { inEl.className = 'is-in'; }); });
    } else { roll.innerHTML = '<span>' + v + '</span>'; }
    updateLetter();
  }
  gDown.addEventListener('click', function () { setGuests(gVal - 1, -1); });
  gUp.addEventListener('click', function () { setGuests(gVal + 1, 1); });
  guests.addEventListener('change', function () { var v = +guests.value; setGuests(v, v > gVal ? 1 : -1); });
  guests.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowUp') { e.preventDefault(); setGuests(gVal + 1, 1); }
    if (e.key === 'ArrowDown') { e.preventDefault(); setGuests(gVal - 1, -1); }
  });

  /* ---------------- The letter (and the small summary above the button) ---------------- */
  var nameIn = document.getElementById('name'), emailIn = document.getElementById('email');
  var msgIn = document.getElementById('message'), consent = document.getElementById('consent');
  var mini = document.querySelector('.form__mini-dates');
  function setL(key, text) {
    var el = document.querySelector('[data-l="' + key + '"]'); if (!el) return;
    if (el.textContent === text) return;
    el.textContent = text;
    if (!reduce.matches) { el.classList.remove('is-new'); void el.offsetWidth; el.classList.add('is-new'); }
  }
  function rangeText() {
    if (!from || !to) return '';
    var sameMonth = from.getMonth() === to.getMonth() && from.getFullYear() === to.getFullYear();
    return sameMonth ? from.getDate() + '–' + fmt(to, { day: 'numeric', month: 'long' })
                     : fmt(from, { day: 'numeric', month: 'short' }) + ' – ' + fmt(to, { day: 'numeric', month: 'short' });
  }
  function updateLetter() {
    var d = L(), lo = { day: 'numeric', month: 'long' };
    setL('from', from ? fmt(from, lo) : '……');
    setL('to', to ? fmt(to, lo) : '……');
    var n = from && to ? nightsBetween(from, to) : 0;
    setL('nights', n ? '\u00a0· ' + n + ' ' + (n === 1 ? d.night1 : d.nightN) : '');
    setL('guests', gVal + ' ' + (gVal === 1 ? d.guest1 : d.guestN));
    var nm = nameIn.value.trim();
    var ln = document.querySelector('[data-l="name"]');
    setL('name', nm || d.lBlank); ln.classList.toggle('is-blank', !nm);
    var m = msgIn.value.trim();
    setL('msg', m ? '“' + (m.length > 110 ? m.slice(0, 107) + '…' : m) + '”' : '');
    mini.removeAttribute('data-i18n');
    mini.textContent = n ? rangeText() + ' · ' + n + ' ' + (n === 1 ? d.night1 : d.nightN) + ' · ' + gVal + ' ' + (gVal === 1 ? d.guest1 : d.guestN) : d.summaryEmpty;
  }
  [nameIn, msgIn].forEach(function (el) { el.addEventListener('input', updateLetter); });

  /* ---------------- Validation ---------------- */
  var tried = false;
  var form = document.getElementById('request-form');
  var summary = form.querySelector('.form__summary');
  var reEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  function setErr(field, key, input) {
    var el = document.getElementById('e-' + field), box = el.closest('.field');
    el.textContent = key ? L()[key] : ''; el.setAttribute('data-err', key || '');
    box.classList.toggle('is-invalid', !!key);
    if (input) input.setAttribute('aria-invalid', String(!!key));
    return !key;
  }
  function validate(which) {
    var ok = true;
    if (!which || which === 'dates') ok = setErr('dates', !from ? 'eDates' : !to ? 'eDep' : '') && ok;
    if (!which || which === 'name') ok = setErr('name', nameIn.value.trim() ? '' : 'eName', nameIn) && ok;
    if (!which || which === 'email') { var v = emailIn.value.trim(); ok = setErr('email', !v ? 'eEmail' : reEmail.test(v) ? '' : 'eEmailBad', emailIn) && ok; }
    if (!which || which === 'consent') ok = setErr('consent', consent.checked ? '' : 'eConsent', consent) && ok;
    if (!which) summary.hidden = ok;
    else if (tried && !form.querySelector('.is-invalid')) summary.hidden = true;
    return ok;
  }
  nameIn.addEventListener('blur', function () { if (tried || nameIn.value) validate('name'); });
  emailIn.addEventListener('blur', function () { if (tried || emailIn.value) validate('email'); });
  nameIn.addEventListener('input', function () { if (tried) validate('name'); });
  emailIn.addEventListener('input', function () { if (tried) validate('email'); });
  consent.addEventListener('change', function () { if (tried) validate('consent'); });

  /* ---------------- Sending (demo) ---------------- */
  var ok = document.getElementById('ok');
  var letter = document.querySelector('.letter');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    tried = true;
    if (form.company && form.company.value) return;          // honeypot
    if (!validate()) {
      var first = form.querySelector('.is-invalid');
      if (first) {
        first.scrollIntoView({ behavior: reduce.matches ? 'auto' : 'smooth', block: 'center' });
        var f = first.querySelector('input:not([type=hidden]), .cal__day[tabindex="0"]'); if (f) setTimeout(function () { f.focus({ preventScroll: true }); }, 350);
      }
      return;
    }
    // DEMO: here the request would be sent to the form service.
    var btn = form.querySelector('.form__btn'); btn.disabled = true;
    letter.classList.add('is-sealing');
    setTimeout(showOk, reduce.matches || !desktop.matches ? 150 : 2100);   // let the seal land first
  });
  function showOk() {
    var d = L(), n = nightsBetween(from, to);
    ok.querySelector('.ok__sum').textContent = rangeText() + ' · ' + n + ' ' + (n === 1 ? d.night1 : d.nightN) + ' · ' + gVal + ' ' + (gVal === 1 ? d.guest1 : d.guestN);
    ok.querySelector('.ok__email').textContent = emailIn.value.trim();
    form.hidden = true; ok.hidden = false;
    requestAnimationFrame(function () { ok.classList.add('is-in'); });
    var top = ok.getBoundingClientRect().top + window.scrollY - header.getBoundingClientRect().height - 24;
    if (ok.getBoundingClientRect().top < header.getBoundingClientRect().height || ok.getBoundingClientRect().top > window.innerHeight * 0.6) smoothScrollTo(Math.max(0, top));
    ok.focus({ preventScroll: true });
  }
  ok.querySelector('.ok__edit').addEventListener('click', function () {
    ok.classList.remove('is-in'); ok.hidden = true; form.hidden = false;
    form.querySelector('.form__btn').disabled = false;
    letter.classList.remove('is-sealing'); letter.classList.add('is-open');
    var f = monthsEl.querySelector('.cal__day[tabindex="0"]'); if (f) f.focus();
  });

  /* ---------------- Language: re-render what the script writes ---------------- */
  afterLang.push(function () {
    render(); syncDates(); setGuests(gVal, 0); updateLetter();
    each('.field__error[data-err]', function (el) { var k = el.getAttribute('data-err'); el.textContent = k ? L()[k] : ''; });
    if (!ok.hidden) showOk();
  });

  /* ---------------- Reveals ---------------- */
  if ('IntersectionObserver' in window) {
    root.classList.add('io');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in-view'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    each('[data-reveal]', function (el) { io.observe(el); });
  } else root.classList.add('reveal-all');

  render(); syncDates(); setGuests(2, 0);
  try { if (sessionStorage.getItem('cvk-lang-tab') === 'el') applyLang('el'); } catch (e) {}

  /* ---------------- Intro ---------------- */
  var fontsReady = (document.fonts && document.fonts.ready) ? document.fonts.ready : Promise.resolve();
  Promise.race([fontsReady, new Promise(function (r) { setTimeout(r, 600); })]).then(function () {
    requestAnimationFrame(function () { requestAnimationFrame(function () { root.classList.add('is-ready'); letter.classList.add('is-open'); }); });
  });
})();

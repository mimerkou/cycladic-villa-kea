/* Cycladic Villa Kea — "Location" page
   The journey here: the morning haze lifts off Ioulida (hero) · an illustrated Kea rises from the sea ·
   as you scroll, a ferry crosses to Korissia and the road climbs to Ioulida (journey) · distance bars ·
   postcards that stack (Discover Kea).
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
  "title": "Location — Cycladic Villa Kea, above Ioulida, Kea",
  "desc": "Where Cycladic Villa Kea is and how to get there: the ferry from Lavrio to Korissia, the road up to Ioulida, distances, and a few ideas for your days on Kea.",
  "lKicker": "Location",
  "lTitle": "Above Ioulida, <em>at the heart of Kea.</em>",
  "lLead": "Kea is the closest of the Cyclades to Athens, yet it keeps its own slow pace. The villa sits just above Ioulida, the island’s whitewashed capital, looking out over the hills to the Aegean.",
  "lf1n": "≈1 h",
  "lf1": "by ferry from Lavrio",
  "lf2n": "Ioulida",
  "lf2": "just below the villa",
  "lf3n": "≈15′",
  "lf3": "by car from the port",
  "altHeroL": "Ioulida spread across the hillside, with the hills and the sea beyond",
  "kJourney": "01 · Getting here",
  "jTitle": "From the harbour <em>to the house.</em>",
  "jP": "Scroll on and follow the way: across the water to Korissia, then up the hill to Ioulida.",
  "jPm": "Follow the way on the map: across the water to Korissia, then up the hill to Ioulida.",
  "mKorissia": "Korissia",
  "mKorissiaS": "the port",
  "mIoulida": "Ioulida",
  "mIoulidaS": "the villa, just above",
  "mLavrio": "Lavrio · Athens",
  "mSea": "Aegean Sea",
  "mKea": "KEA",
  "mScale": "2 km",
  "mapAria": "Illustrated map of Kea with Korissia, the port, and Ioulida, where the villa is",
  "mapsBtn": "Open in Maps",
  "mapsNote": "Shows Ioulida for now; the villa’s exact pin will follow.",
  "st1k": "Step 1 · By sea",
  "st1t": "Lavrio to Korissia",
  "st1p": "Ferries leave from Lavrio, about an hour’s drive from Athens and close to the airport. The crossing takes about an hour. In summer, book your tickets early, especially if you bring a car.",
  "st2k": "Step 2 · By road",
  "st2t": "Up to Ioulida",
  "st2p": "From the port, the road climbs inland to Ioulida in about fifteen minutes. A car makes island life easy; there are also taxis at the port, and cars can be rented on Kea.",
  "st3k": "Step 3 · Arrival",
  "st3t": "The last stretch",
  "st3p": "The villa is just above the village, with private parking for two cars. Before you arrive, we send you directions and the exact location, and we are a phone call away.",
  "kDist": "02 · Distances",
  "distTitle": "Close to <em>what you need.</em>",
  "distP": "Approximate times from the villa. We will confirm them, and share our own favourites, when we reply.",
  "byCar": "by car",
  "onFoot": "on foot",
  "min": "min",
  "d1": "Ioulida, the village",
  "d2": "Bakery and grocery",
  "d3": "Pharmacy",
  "d4": "Petrol station",
  "d5": "Korissia, the port",
  "d6": "Nearest sandy beach",
  "distNote": "Indicative times · to be confirmed",
  "kKea": "03 · Discover Kea",
  "keaTitle": "Slow days <em>on Kea.</em>",
  "keaP": "Old stone paths between oak trees, quiet bays and long lunches by the water. A few ideas to start with; ask us for more.",
  "c1t": "Ioulida",
  "c1p": "Steep lanes, steps and whitewashed walls, small squares with cafés and the old town hall. Walk down in the morning for bread and coffee, come back in the evening when the village fills with life.",
  "c1m": "Just below the villa · on foot · morning or evening",
  "ph1": "Ioulida · lanes and steps",
  "c2t": "The Lion of Kea",
  "c2p": "A great stone lion carved into the rock more than two thousand years ago, a short walk from Ioulida along an old path. Go early, when the light is soft and the path is cool.",
  "c2m": "From Ioulida · on foot · early morning",
  "ph2": "The path to the Lion",
  "c3t": "A beach for the morning",
  "c3p": "Kea has bays for every wind, from sandy coves to quiet pebble beaches. Nicole will suggest the right one for the day’s weather.",
  "c3m": "By car · to choose with Nicole",
  "ph3": "A quiet bay, early in the day",
  "c4t": "Lunch by the water",
  "c4p": "Fish tavernas line the small harbours near Korissia. Order what came in that morning and stay until the light goes golden.",
  "c4m": "Near the port · by car · lunch",
  "ph4": "A table by the water",
  "phTag": "Photo to come"
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
  "title": "Η τοποθεσία — Cycladic Villa Kea, πάνω από την Ιουλίδα, Κέα",
  "desc": "Πού βρίσκεται η Cycladic Villa Kea και πώς θα έρθετε: το πλοίο από το Λαύριο για την Κορησσία, ο δρόμος για την Ιουλίδα, αποστάσεις και μερικές ιδέες για τις μέρες σας στην Κέα.",
  "lKicker": "Η τοποθεσία",
  "lTitle": "Πάνω από την Ιουλίδα, <em>στην καρδιά της Κέας.</em>",
  "lLead": "Η Κέα είναι το πιο κοντινό στην Αθήνα νησί των Κυκλάδων, κι όμως κρατά τον δικό της αργό ρυθμό. Η βίλα βρίσκεται λίγο πάνω από την Ιουλίδα, την ασβεστωμένη πρωτεύουσα του νησιού, με θέα τους λόφους και το Αιγαίο.",
  "lf1n": "≈1 ώρα",
  "lf1": "με το πλοίο από το Λαύριο",
  "lf2n": "Ιουλίδα",
  "lf2": "ακριβώς κάτω από τη βίλα",
  "lf3n": "≈15′",
  "lf3": "με αυτοκίνητο από το λιμάνι",
  "altHeroL": "Η Ιουλίδα απλωμένη στην πλαγιά, με τους λόφους και τη θάλασσα στο βάθος",
  "kJourney": "01 · Πώς θα έρθετε",
  "jTitle": "Από το λιμάνι <em>ως το σπίτι.</em>",
  "jP": "Συνεχίστε το scroll και ακολουθήστε τη διαδρομή: απέναντι με το πλοίο ως την Κορησσία, και μετά ανηφορικά ως την Ιουλίδα.",
  "jPm": "Ακολουθήστε τη διαδρομή στον χάρτη: με το πλοίο ως την Κορησσία, και μετά ανηφορικά ως την Ιουλίδα.",
  "mKorissia": "Κορησσία",
  "mKorissiaS": "το λιμάνι",
  "mIoulida": "Ιουλίδα",
  "mIoulidaS": "η βίλα, λίγο πιο πάνω",
  "mLavrio": "Λαύριο · Αθήνα",
  "mSea": "Αιγαίο Πέλαγος",
  "mKea": "ΚΕΑ",
  "mScale": "2 χλμ.",
  "mapAria": "Ζωγραφιστός χάρτης της Κέας με την Κορησσία, το λιμάνι, και την Ιουλίδα, όπου βρίσκεται η βίλα",
  "mapsBtn": "Άνοιγμα στους Χάρτες",
  "mapsNote": "Προς το παρόν δείχνει την Ιουλίδα· το ακριβές σημείο της βίλας θα ακολουθήσει.",
  "st1k": "Βήμα 1 · Με το πλοίο",
  "st1t": "Λαύριο – Κορησσία",
  "st1p": "Τα πλοία φεύγουν από το Λαύριο, περίπου μία ώρα με το αυτοκίνητο από την Αθήνα και κοντά στο αεροδρόμιο. Το ταξίδι διαρκεί περίπου μία ώρα. Το καλοκαίρι κλείστε νωρίς τα εισιτήρια, ειδικά αν έρχεστε με αυτοκίνητο.",
  "st2k": "Βήμα 2 · Με το αυτοκίνητο",
  "st2t": "Ανεβαίνοντας στην Ιουλίδα",
  "st2p": "Από το λιμάνι ο δρόμος ανεβαίνει προς την Ιουλίδα σε περίπου δεκαπέντε λεπτά. Με αυτοκίνητο κινείστε άνετα στο νησί· υπάρχουν επίσης ταξί στο λιμάνι και ενοικιάσεις αυτοκινήτων στην Κέα.",
  "st3k": "Βήμα 3 · Άφιξη",
  "st3t": "Το τελευταίο κομμάτι",
  "st3p": "Η βίλα είναι λίγο πάνω από το χωριό, με ιδιωτικό πάρκινγκ για δύο αυτοκίνητα. Πριν φτάσετε σας στέλνουμε οδηγίες και την ακριβή τοποθεσία, και είμαστε πάντα ένα τηλεφώνημα μακριά.",
  "kDist": "02 · Αποστάσεις",
  "distTitle": "Κοντά σε <em>ό,τι χρειάζεστε.</em>",
  "distP": "Κατά προσέγγιση χρόνοι από τη βίλα. Θα τους επιβεβαιώσουμε, μαζί με τα δικά μας αγαπημένα, όταν σας απαντήσουμε.",
  "byCar": "με αυτοκίνητο",
  "onFoot": "με τα πόδια",
  "min": "λεπτά",
  "d1": "Ιουλίδα, το χωριό",
  "d2": "Φούρνος και παντοπωλείο",
  "d3": "Φαρμακείο",
  "d4": "Πρατήριο καυσίμων",
  "d5": "Κορησσία, το λιμάνι",
  "d6": "Η κοντινότερη αμμουδιά",
  "distNote": "Ενδεικτικοί χρόνοι · προς επιβεβαίωση",
  "kKea": "03 · Γνωρίστε την Κέα",
  "keaTitle": "Αργές μέρες <em>στην Κέα.</em>",
  "keaP": "Παλιά πέτρινα μονοπάτια ανάμεσα σε βελανιδιές, ήσυχοι κόλποι και μεγάλα μεσημεριανά δίπλα στο νερό. Μερικές ιδέες για αρχή· ρωτήστε μας για περισσότερες.",
  "c1t": "Ιουλίδα",
  "c1p": "Απότομα σοκάκια, σκαλιά και ασβεστωμένοι τοίχοι, μικρές πλατείες με καφενεία και το παλιό δημαρχείο. Κατεβείτε το πρωί για ψωμί και καφέ, γυρίστε το βράδυ, όταν το χωριό γεμίζει ζωή.",
  "c1m": "Ακριβώς κάτω από τη βίλα · με τα πόδια · πρωί ή βράδυ",
  "ph1": "Ιουλίδα · σοκάκια και σκαλιά",
  "c2t": "Ο Λέων της Κέας",
  "c2p": "Ένα μεγάλο πέτρινο λιοντάρι σκαλισμένο στον βράχο πριν από περισσότερα από δύο χιλιάδες χρόνια, σε μικρή απόσταση από την Ιουλίδα πάνω σε ένα παλιό μονοπάτι. Πηγαίνετε νωρίς, όταν το φως είναι απαλό και το μονοπάτι δροσερό.",
  "c2m": "Από την Ιουλίδα · με τα πόδια · νωρίς το πρωί",
  "ph2": "Το μονοπάτι προς τον Λέοντα",
  "c3t": "Μια παραλία για το πρωί",
  "c3p": "Η Κέα έχει κόλπους για κάθε άνεμο, από αμμουδιές μέχρι ήσυχες παραλίες με βότσαλο. Η Νικόλ θα σας προτείνει την κατάλληλη για τον καιρό της ημέρας.",
  "c3m": "Με αυτοκίνητο · θα την επιλέξουμε με τη Νικόλ",
  "ph3": "Ένας ήσυχος κόλπος, νωρίς το πρωί",
  "c4t": "Μεσημεριανό δίπλα στο νερό",
  "c4p": "Ψαροταβέρνες στα μικρά λιμανάκια κοντά στην Κορησσία. Παραγγείλτε ό,τι έφερε η βάρκα το πρωί και μείνετε ώσπου το φως να γίνει χρυσό.",
  "c4m": "Κοντά στο λιμάνι · με αυτοκίνητο · μεσημέρι",
  "ph4": "Ένα τραπέζι δίπλα στο νερό",
  "phTag": "Φωτογραφία σύντομα"
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

  /* ---------------- The map: the island rises when it comes into view ---------------- */
  var journey = document.getElementById('getting-here');
  var map = journey.querySelector('.map');
  var svg = map.querySelector('.map__svg');
  var sea = svg.querySelector('.map__route-done--sea'), road = svg.querySelector('.map__route-done--road');
  var seaPath = svg.querySelector('.map__route--sea'), roadPath = svg.querySelector('.map__route--road');
  var boat = svg.querySelector('.map__boat'), car = svg.querySelector('.map__car');
  var steps = Array.prototype.slice.call(journey.querySelectorAll('.step'));
  var seaLen = seaPath.getTotalLength(), roadLen = roadPath.getTotalLength();

  // p: 0 → 1 over the whole journey. 0–.5 the ferry, .5–.82 the road, then arrival.
  var lastP = -1;
  function setJourney(p) {
    p = clamp(p);
    if (Math.abs(p - lastP) < 0.0005) return;
    lastP = p;
    var ps = clamp(p / 0.5), pr = clamp((p - 0.5) / 0.32);
    sea.style.strokeDashoffset = String(1 - ps);
    road.style.strokeDashoffset = String(1 - pr);
    var b = seaPath.getPointAtLength(seaLen * ps), c = roadPath.getPointAtLength(roadLen * pr);
    boat.setAttribute('transform', 'translate(' + b.x.toFixed(1) + ' ' + b.y.toFixed(1) + ')');
    car.setAttribute('transform', 'translate(' + c.x.toFixed(1) + ' ' + c.y.toFixed(1) + ')');
    svg.classList.toggle('on-sea', p > 0.002 && p < 0.5);
    svg.classList.toggle('on-road', p >= 0.5 && p < 0.82);
    svg.classList.toggle('at-kor', p >= 0.48);
    svg.classList.toggle('at-iou', p >= 0.82);
    var active = p < 0.5 ? 0 : p < 0.82 ? 1 : 2;
    steps.forEach(function (st, i) { st.classList.toggle('is-on', i === active); });
  }
  setJourney(0);

  // Phones: the journey plays once by itself when the map is in view.
  var played = false;
  function playJourney() {
    if (played) return; played = true;
    if (reduce.matches) { setJourney(1); return; }
    var t0 = null, dur = 5200;
    (function tick(now) {
      if (t0 === null) t0 = now + 900;                       // let the island rise first
      var k = clamp((now - t0) / dur);
      setJourney(k < .5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2);
      if (k < 1) requestAnimationFrame(tick);
    })(performance.now());
  }

  /* ---------------- Postcards (desktop): the one underneath settles back as the next arrives ---------------- */
  var cards = Array.prototype.slice.call(document.querySelectorAll('.pcard'));

  /* ---------------- One frame loop ---------------- */
  var ticking = false;
  function frame() {
    ticking = false;
    var vh = window.innerHeight;
    if (desktop.matches) {
      // journey follows the steps column: from the first step reaching mid-screen to the last one
      var a = steps[0].getBoundingClientRect(), z = steps[steps.length - 1].getBoundingClientRect();
      var line = vh * 0.55;
      setJourney((line - a.top) / Math.max(1, (z.top + z.height * 0.4) - a.top));
      for (var i = 0; i < cards.length; i++) {
        var cur = cards[i], next = cards[i + 1], q = 0;
        if (next) {
          var cr = cur.getBoundingClientRect(), nr = next.getBoundingClientRect();
          q = clamp(1 - (nr.top - cr.top) / Math.max(1, cr.height));
        }
        cur.style.setProperty('--q', q.toFixed(3));
      }
    }
  }
  function requestFrame() { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }
  window.addEventListener('scroll', requestFrame, { passive: true });
  window.addEventListener('resize', requestFrame);
  desktop.addEventListener && desktop.addEventListener('change', function () { if (!desktop.matches) { cards.forEach(function (c) { c.style.removeProperty('--q'); }); } requestFrame(); });

  /* ---------------- Reveals, map rise, sticky CTA ---------------- */
  if ('IntersectionObserver' in window) {
    root.classList.add('io');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in-view'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 });
    each('[data-reveal], .ask, .dist__chart', function (el) { io.observe(el); });

    new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        map.classList.add('is-risen'); obs.disconnect();
        if (!desktop.matches) playJourney();
      });
    }, { threshold: 0.35 }).observe(map);

    var sticky = document.querySelector('.sticky-cta');
    var heroOut = false, askIn = false, footIn = false;
    var syncSticky = function () {
      var on = heroOut && !askIn && !footIn;
      sticky.classList.toggle('is-visible', on);
      sticky.setAttribute('aria-hidden', String(!on));
      sticky.querySelector('a').tabIndex = on ? 0 : -1;
    };
    // as on every page: the bar waits until the hero has been passed
    new IntersectionObserver(function (e) { heroOut = !e[0].isIntersecting; syncSticky(); }, { threshold: 0 }).observe(document.querySelector('.lhero'));
    new IntersectionObserver(function (e) { askIn = e[0].isIntersecting; syncSticky(); }, { threshold: 0 }).observe(document.getElementById('contact'));
    new IntersectionObserver(function (e) { footIn = e[0].isIntersecting; syncSticky(); }, { threshold: 0 }).observe(document.querySelector('.site-footer'));
  } else {
    root.classList.add('reveal-all');
    map.classList.add('is-risen'); setJourney(1);
  }

  /* ---------------- Intro: wait briefly for fonts, then lift the haze ---------------- */
  var started = false;
  function start() {
    if (started) return; started = true;
    requestFrame();
    requestAnimationFrame(function () { requestAnimationFrame(function () { root.classList.add('is-ready'); }); });
  }
  var fontsReady = (document.fonts && document.fonts.ready) ? document.fonts.ready : Promise.resolve();
  Promise.race([fontsReady, new Promise(function (r) { setTimeout(r, 600); })]).then(start);
})();

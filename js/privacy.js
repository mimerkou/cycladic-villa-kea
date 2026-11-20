/* Cycladic Villa Kea — Privacy policy page
   A quiet reading page: on desktop the contents stay in view and mark the section being read;
   on phones they fold into a "Contents" panel at the top.
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
  "title": "Privacy policy — Cycladic Villa Kea",
  "desc": "How Cycladic Villa Kea uses the details you send us: what we keep, why, for how long, and your rights.",
  "pKicker": "Privacy",
  "pTitle": "Privacy <em>policy</em>",
  "pUpdated": "Last updated: <mark class=\"ph\">[publication date]</mark>",
  "pIntro": "Thank you for your interest in Cycladic Villa Kea. On this page we explain simply which of your details we keep, why and for how long. We collect only what we need to reply to your request and to arrange your stay, and we never pass it on to third parties for advertising.",
  "toc": "Contents",
  "toTopL": "Back to top",
  "h0": "Who we are",
  "b0": "<p>The person responsible for your details (the “controller”) is <mark class=\"ph\">[full name of the owner or company name]</mark>, <mark class=\"ph\">[street address]</mark>, 840 02 Ioulida, Kea <mark class=\"ph\">[confirm postcode]</mark>, Greece. Tax ID (AFM) <mark class=\"ph\">[if required]</mark>, Property Registry Number (AMA) <mark class=\"ph\">[number]</mark>.</p><p>For anything about your privacy: <mark class=\"ph\">[email, e.g. info@cycladicvillakea.com]</mark> · <a href=\"tel:+306945541114\">+30 694 554 1114</a>.</p>",
  "h1": "What we collect",
  "b1": "<ul class=\"pv__list\"><li><b>From the request form:</b> arrival and departure dates, number of guests, name, email and, if you wish, phone and message.</li><li><b>From our conversations:</b> whatever you write to us or tell us by phone or email.</li><li><b>If you book a stay:</b> the details needed for the booking, the payment and the receipt or invoice, as the law requires <mark class=\"ph\">[to confirm with the accountant]</mark>.</li><li><b>Technical data:</b> like every website, the site’s server briefly records basic browsing data (e.g. IP address, type of device), for security and to keep the site running.</li></ul><p>We do not ask for, and please do not send us through the form, sensitive information such as health details.</p>",
  "h2": "Why we use them",
  "b2": "<ul class=\"pv__list\"><li>To reply to your request with availability and the price, and to arrange your stay together. We do this because you asked us to, before a possible booking (Article 6(1)(b) GDPR).</li><li>To meet our legal obligations, e.g. tax obligations, when a booking is made (Article 6(1)(c)).</li><li>To keep the site secure and working properly, e.g. to stop spam (Article 6(1)(f), legitimate interest).</li></ul><p>We do not send newsletters or advertising, and we do not sell your details.</p>",
  "h3": "Who can see them",
  "b3": "<p>Only we see your details. To run the site we work with a few providers, who process data only on our behalf:</p><ul class=\"pv__list\"><li>hosting of the site: <mark class=\"ph\">[provider, e.g. the WordPress hosting company]</mark></li><li>sending the form to our email: <mark class=\"ph\">[form service]</mark></li><li>email: <mark class=\"ph\">[email provider]</mark></li><li>when a booking is made: our accountant and, where the law requires it, the competent authorities (e.g. tax authorities)</li></ul><p>If a provider stores data outside the European Union, we only use providers with the safeguards the GDPR requires (e.g. standard contractual clauses).</p>",
  "h4": "How long we keep them",
  "b4": "<ul class=\"pv__list\"><li><b>A request that did not lead to a booking:</b> we delete it within <mark class=\"ph\">[12]</mark> months.</li><li><b>A booking:</b> we keep the details of the stay and the payment for as long as tax law requires <mark class=\"ph\">[period, to confirm with the accountant]</mark>, and then delete them.</li></ul>",
  "h5": "Cookies and site technology",
  "b5": "<p>The site does not use cookies for advertising or statistics. It only remembers the language you chose (English or Greek), and only while the browser tab is open. This is needed for the site to work and does not identify you. <mark class=\"ph\">[If statistics, a map or other third-party services are added, this section changes and consent is needed.]</mark></p><p>The links to Instagram and Google Maps take you to third-party websites, with their own privacy policies.</p>",
  "h6": "Your rights",
  "b6": "<p>You can ask us at any time:</p><ul class=\"pv__list\"><li>to see which details we hold about you and get a copy</li><li>to correct or delete them</li><li>to restrict their use or object to it</li><li>to give them to you in a format you can take elsewhere</li><li>to withdraw a consent you gave us</li></ul><p>Write to us at <mark class=\"ph\">[email]</mark>. We reply as soon as we can, and in any case within one month.</p>",
  "h7": "If something is not right",
  "b7": "<p>We will be glad to sort it out with you. You also have the right to lodge a complaint with the Hellenic Data Protection Authority, 1–3 Kifisias Ave., 115 23 Athens, <a href=\"https://www.dpa.gr\" target=\"_blank\" rel=\"noopener\">www.dpa.gr</a>, <a href=\"mailto:contact@dpa.gr\">contact@dpa.gr</a>.</p>",
  "h8": "Changes to this page",
  "b8": "<p>If anything changes in the way we use your details, we will update this page and the date at the top.</p>"
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
  "title": "Πολιτική απορρήτου — Cycladic Villa Kea",
  "desc": "Πώς χρησιμοποιεί η Cycladic Villa Kea τα στοιχεία που μας στέλνετε: τι κρατάμε, γιατί, για πόσο, και τα δικαιώματά σας.",
  "pKicker": "Απόρρητο",
  "pTitle": "Πολιτική <em>απορρήτου</em>",
  "pUpdated": "Τελευταία ενημέρωση: <mark class=\"ph\">[ημερομηνία δημοσίευσης]</mark>",
  "pIntro": "Σας ευχαριστούμε που ενδιαφέρεστε για την Cycladic Villa Kea. Σε αυτή τη σελίδα εξηγούμε απλά ποια στοιχεία σας κρατάμε, γιατί και για πόσο. Συλλέγουμε μόνο ό,τι χρειάζεται για να απαντήσουμε στο αίτημά σας και να οργανώσουμε τη διαμονή σας, και δεν τα δίνουμε ποτέ σε τρίτους για διαφήμιση.",
  "toc": "Περιεχόμενα",
  "toTopL": "Επιστροφή στην αρχή",
  "h0": "Ποιοι είμαστε",
  "b0": "<p>Υπεύθυνος για τα στοιχεία σας είναι <mark class=\"ph\">[ονοματεπώνυμο ιδιοκτήτριας/ιδιοκτήτη ή επωνυμία]</mark>, οδός <mark class=\"ph\">[διεύθυνση]</mark>, 840 02 Ιουλίδα, Κέα <mark class=\"ph\">[επιβεβαίωση Τ.Κ.]</mark>, ΑΦΜ <mark class=\"ph\">[ΑΦΜ, αν απαιτείται]</mark>, Αριθμός Μητρώου Ακινήτου (ΑΜΑ) <mark class=\"ph\">[αριθμός]</mark>.</p><p>Επικοινωνία για κάθε θέμα απορρήτου: <mark class=\"ph\">[email, π.χ. info@cycladicvillakea.com]</mark> · <a href=\"tel:+306945541114\">+30 694 554 1114</a>.</p>",
  "h1": "Τι στοιχεία συλλέγουμε",
  "b1": "<ul class=\"pv__list\"><li><b>Από τη φόρμα αιτήματος:</b> ημερομηνίες άφιξης και αναχώρησης, αριθμός επισκεπτών, όνομα, email και, αν θέλετε, τηλέφωνο και μήνυμα.</li><li><b>Από την επικοινωνία μας:</b> ό,τι μας γράψετε ή μας πείτε στο τηλέφωνο ή στο email.</li><li><b>Αν κλείσετε διαμονή:</b> τα στοιχεία που χρειάζονται για την κράτηση, την πληρωμή και την έκδοση παραστατικού, όπως ορίζει ο νόμος <mark class=\"ph\">[επιβεβαίωση με τον λογιστή]</mark>.</li><li><b>Τεχνικά στοιχεία:</b> όπως κάθε ιστοσελίδα, ο διακομιστής του site καταγράφει προσωρινά βασικά στοιχεία πλοήγησης (π.χ. διεύθυνση IP, είδος συσκευής), για λόγους ασφαλείας και λειτουργίας.</li></ul><p>Δεν σας ζητάμε και σας παρακαλούμε να μην μας στέλνετε ευαίσθητα στοιχεία, όπως στοιχεία υγείας, μέσω της φόρμας.</p>",
  "h2": "Γιατί τα χρησιμοποιούμε",
  "b2": "<ul class=\"pv__list\"><li>Για να απαντήσουμε στο αίτημά σας με τη διαθεσιμότητα και την τιμή, και για να οργανώσουμε μαζί τη διαμονή σας. Αυτό γίνεται επειδή εσείς το ζητήσατε, πριν από μια πιθανή κράτηση (άρθρο 6 §1β GDPR).</li><li>Για να τηρήσουμε τις νόμιμες υποχρεώσεις μας, π.χ. φορολογικές, όταν γίνει κράτηση (άρθρο 6 §1γ).</li><li>Για την ασφάλεια και τη σωστή λειτουργία του site, π.χ. για να εμποδίζουμε τα ανεπιθύμητα μηνύματα (άρθρο 6 §1στ, έννομο συμφέρον).</li></ul><p>Δεν σας στέλνουμε newsletter ούτε διαφημίσεις, και δεν πουλάμε τα στοιχεία σας.</p>",
  "h3": "Ποιοι έχουν πρόσβαση",
  "b3": "<p>Τα στοιχεία σας τα βλέπουμε μόνο εμείς. Για να λειτουργήσει το site, συνεργαζόμαστε με λίγους παρόχους, που επεξεργάζονται δεδομένα μόνο για λογαριασμό μας:</p><ul class=\"pv__list\"><li>φιλοξενία του site: <mark class=\"ph\">[πάροχος, π.χ. η εταιρεία φιλοξενίας του WordPress]</mark></li><li>αποστολή της φόρμας στο email μας: <mark class=\"ph\">[υπηρεσία φόρμας]</mark></li><li>email: <mark class=\"ph\">[πάροχος email]</mark></li><li>όταν γίνει κράτηση: ο λογιστής μας και, όπου το ορίζει ο νόμος, οι αρμόδιες αρχές (π.χ. φορολογικές)</li></ul><p>Αν κάποιος πάροχος αποθηκεύει δεδομένα εκτός Ευρωπαϊκής Ένωσης, χρησιμοποιούμε μόνο παρόχους με τις εγγυήσεις που προβλέπει ο GDPR (π.χ. τυποποιημένες συμβατικές ρήτρες).</p>",
  "h4": "Για πόσο τα κρατάμε",
  "b4": "<ul class=\"pv__list\"><li><b>Αίτημα που δεν κατέληξε σε κράτηση:</b> το διαγράφουμε μέσα σε <mark class=\"ph\">[12]</mark> μήνες.</li><li><b>Κράτηση:</b> τα στοιχεία που αφορούν τη διαμονή και την πληρωμή τα κρατάμε όσο ορίζει η φορολογική νομοθεσία <mark class=\"ph\">[διάστημα, επιβεβαίωση με τον λογιστή]</mark>, και μετά τα διαγράφουμε.</li></ul>",
  "h5": "Cookies και τεχνολογίες του site",
  "b5": "<p>Το site δεν χρησιμοποιεί cookies για διαφήμιση ή στατιστικά. Θυμάται μόνο τη γλώσσα που διαλέξατε (ελληνικά ή αγγλικά), και μόνο όσο είναι ανοιχτή η καρτέλα του browser. Αυτό είναι απαραίτητο για τη λειτουργία του site και δεν σας ταυτοποιεί. <mark class=\"ph\">[Αν προστεθούν στατιστικά, χάρτης ή άλλες υπηρεσίες τρίτων, η ενότητα αλλάζει και χρειάζεται συναίνεση.]</mark></p><p>Οι σύνδεσμοι προς Instagram και Google Maps σας οδηγούν σε ιστοσελίδες τρίτων, με δικές τους πολιτικές απορρήτου.</p>",
  "h6": "Τα δικαιώματά σας",
  "b6": "<p>Μπορείτε να μας ζητήσετε οποιαδήποτε στιγμή:</p><ul class=\"pv__list\"><li>να δείτε ποια στοιχεία σας έχουμε και να πάρετε αντίγραφο</li><li>να τα διορθώσουμε ή να τα διαγράψουμε</li><li>να περιορίσουμε τη χρήση τους ή να αντιταχθείτε σε αυτή</li><li>να σας τα δώσουμε σε μορφή που μπορείτε να μεταφέρετε αλλού</li><li>να ανακαλέσετε μια συναίνεση που μας δώσατε</li></ul><p>Γράψτε μας στο <mark class=\"ph\">[email]</mark>. Απαντάμε το γρηγορότερο δυνατό και σε κάθε περίπτωση μέσα σε έναν μήνα.</p>",
  "h7": "Αν κάτι δεν σας ικανοποιεί",
  "b7": "<p>Θα χαρούμε να το λύσουμε μαζί σας. Έχετε πάντως το δικαίωμα να υποβάλετε καταγγελία στην Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα, Λεωφ. Κηφισίας 1–3, 115 23 Αθήνα, <a href=\"https://www.dpa.gr\" target=\"_blank\" rel=\"noopener\">www.dpa.gr</a>, <a href=\"mailto:contact@dpa.gr\">contact@dpa.gr</a>.</p>",
  "h8": "Αλλαγές σε αυτή τη σελίδα",
  "b8": "<p>Αν αλλάξει κάτι στον τρόπο που χρησιμοποιούμε τα στοιχεία σας, θα ενημερώσουμε αυτή τη σελίδα και την ημερομηνία στην κορυφή της.</p>"
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

  /* ---------------- Contents: follow the reader ---------------- */
  var tocBox = document.querySelector('.toc__box');
  var links = Array.prototype.slice.call(document.querySelectorAll('.toc__list a'));
  var secs = links.map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); });
  function syncBox() { tocBox.open = desktop.matches; }
  syncBox();
  if (desktop.addEventListener) desktop.addEventListener('change', syncBox);
  tocBox.addEventListener('click', function (e) { if (desktop.matches && e.target.closest('summary')) e.preventDefault(); });
  links.forEach(function (a) { a.addEventListener('click', function () { if (!desktop.matches) tocBox.open = false; }); });
  var active = -2, ticking = false;
  function frame() {
    ticking = false;
    var line = header.getBoundingClientRect().height + window.innerHeight * 0.3, idx = -1;
    secs.forEach(function (s, i) { if (s.getBoundingClientRect().top <= line) idx = i; });
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) idx = secs.length - 1;
    if (idx === active) return;
    active = idx;
    links.forEach(function (a, i) {
      a.classList.toggle('is-on', i === idx);
      if (i === idx) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
    });
  }
  window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }, { passive: true });
  window.addEventListener('resize', frame);
  frame();

  /* ---------------- Reveals, sticky CTA ---------------- */
  if ('IntersectionObserver' in window) {
    root.classList.add('io');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in-view'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.05 });
    each('[data-reveal]', function (el) { io.observe(el); });

    var sticky = document.querySelector('.sticky-cta');
    var heroOut = false, footIn = false;
    var syncSticky = function () {
      var on = heroOut && !footIn;
      sticky.classList.toggle('is-visible', on);
      sticky.setAttribute('aria-hidden', String(!on));
      sticky.querySelector('a').tabIndex = on ? 0 : -1;
    };
    // as on every page: the bar waits until the first screen has been passed
    new IntersectionObserver(function (e) { heroOut = !e[0].isIntersecting; syncSticky(); }, { threshold: 0 }).observe(document.querySelector('.pvhero'));
    new IntersectionObserver(function (e) { footIn = e[0].isIntersecting; syncSticky(); }, { threshold: 0 }).observe(document.querySelector('.site-footer'));
  } else root.classList.add('reveal-all');

  var fontsReady = (document.fonts && document.fonts.ready) ? document.fonts.ready : Promise.resolve();
  Promise.race([fontsReady, new Promise(function (r) { setTimeout(r, 600); })]).then(function () {
    requestAnimationFrame(function () { requestAnimationFrame(function () { root.classList.add('is-ready'); }); });
  });
})();

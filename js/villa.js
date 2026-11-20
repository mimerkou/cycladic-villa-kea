/* Cycladic Villa Kea — "The villa" page
   A walk through the house: shutters open (hero) · a plan that draws itself (layout) · a corridor that
   moves sideways as you scroll (inside) · whitewash wipes (details) · pergola shadows (terraces) ·
   a zoom out from house to land (estate) · ticks that draw (amenities) · smooth accordions (practical).
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
  "title": "The villa — Cycladic Villa Kea, Ioulida, Kea",
  "desc": "Inside Cycladic Villa Kea: three bedrooms with double beds for up to six guests, 100 m² of traditional Cycladic architecture, terraces facing the Aegean and an estate of oak trees above Ioulida.",
  "subnavAria": "On this page",
  "vKicker": "The villa",
  "vTitle": "A whole house, <em>built the island way.</em>",
  "vLead": "Traditional Cycladic architecture, and a house that is yours alone for the length of your stay: 100 m² for up to six guests, terraces on every side and an estate of oak trees above Ioulida.",
  "vScroll": "Step inside",
  "fx1n": "6",
  "fx1": "guests at most",
  "fx2n": "3",
  "fx2": "bedrooms, double beds",
  "fx3n": "100",
  "fx3": "m² Cycladic house",
  "fx4n": "4,000",
  "fx4": "m² estate with oaks",
  "fx5n": "2",
  "fx5": "cars, private parking",
  "nLayout": "Layout",
  "nSpaces": "Inside",
  "nDetails": "Details",
  "nTerraces": "Terraces",
  "nEstate": "Estate",
  "nAmen": "Amenities",
  "nPract": "Practical",
  "kLayout": "01 · Layout",
  "layoutTitle": "Room for six, <em>and a quiet corner each.</em>",
  "layoutP": "Three bedrooms with double beds open around one shared living space, so a family or a group of friends can spend the day together and still close a door of their own at night.",
  "planNote": "Indicative plan · the final drawing will follow",
  "pLiving": "Living",
  "pKitchen": "Kitchen & dining",
  "pBed1": "Bedroom 1",
  "pBed2": "Bedroom 2",
  "pBed3": "Bedroom 3",
  "pBath": "Bath",
  "pTerrace": "Terrace · pergola",
  "pSea": "Aegean · sunset",
  "cLivingT": "Living & kitchen",
  "cLivingP": "One open space at the heart of the house: deep sofas on one side, the kitchen and the dining table on the other, and the terrace a step away.",
  "cBed1T": "Bedroom one",
  "cBed1P": "A double bed under a light canopy, with a glass door to the outside.",
  "cBed2T": "Bedroom two",
  "cBed2P": "A bright room with a double bed and windows open to the hills.",
  "cBed3T": "Bedroom three",
  "cBed3P": "A calm room with a double bed, set back from the living space.",
  "cTerrT": "The terrace",
  "cTerrP": "Shaded by the pergola, facing the Aegean and the sunset.",
  "sleeps2": "Sleeps 2 · double bed",
  "kSpaces": "02 · Inside",
  "spacesTitle": "Walk through <em>the house.</em>",
  "spacesHint": "Keep scrolling: the rooms pass by one after the other.",
  "spacesHintM": "Swipe through the rooms.",
  "r1T": "The living room",
  "r1P": "Deep sofas in island blue and a low table for long evenings, open to the kitchen.",
  "r2T": "Kitchen & dining",
  "r2P": "Fully equipped for real cooking, with a wooden dining table for meals indoors.",
  "r3T": "The bedrooms",
  "r3P": "Three bedrooms, each with a double bed, soft white linen and light from the windows.",
  "r4T": "The bathroom",
  "r4P": "Whitewashed walls, stone and soft light. Photos and details are on their way.",
  "openGallery": "Open the photos",
  "phTag": "Photo to come",
  "ph1": "Living room · sofas and cushions",
  "ph2": "Living room · the view from the window",
  "ph3": "Dining table · set for six",
  "ph4": "Bedroom three · from the door",
  "ph5": "Bathroom · one clean frame",
  "ph6": "Bathroom · stone and fittings",
  "ph7": "Bathroom · towels and light",
  "ph8": "Stone paving and old wood",
  "ph9": "The oak trees on the estate",
  "ph10": "Arrival · gate and parking",
  "kDetails": "03 · Details",
  "detailsTitle": "Made by hand, <em>kept simple.</em>",
  "detailsP": "Whitewash and blue shutters, stone underfoot, hand-painted plates on the walls. Small things, chosen with care.",
  "d1": "Blue shutters",
  "d2": "The hand-painted sign",
  "d3": "Clay and evening light",
  "d4": "Stone and wood",
  "altJar": "A terracotta jar on the stone terrace in the evening light",
  "kTerraces": "04 · Terraces",
  "terrTitle": "Terraces on every side, <em>the Aegean in front.</em>",
  "terrP1": "The terraces wrap around the house, so there is always a spot in the sun and another in the shade. The main one sits under the pergola and looks straight out to the Aegean and the sunset.",
  "terrP2": "Breakfast outside, a long lunch at the table, a glass of wine as the sun goes down: the house is made to be lived out here.",
  "tm1": "Morning",
  "tm1c": "Coffee with Ioulida below",
  "tm2": "Sunset",
  "tm2c": "The sun goes down over the sea",
  "kEstate": "05 · The estate",
  "estateTitle": "Your own land, <em>among the oaks.</em>",
  "estateP": "The house stands on an estate of 4,000 m² planted with oak trees, which keeps it private and quiet above the village. There is private parking for two cars.",
  "estateBig": "4,000 m²",
  "estateSmall": "of land with oak trees",
  "kAmen": "06 · Amenities",
  "amenTitle": "Everything you need, <em>nothing you don’t.</em>",
  "gComfort": "Comfort",
  "gKitchen": "Kitchen",
  "gOutside": "Outside",
  "a1": "Wi-Fi throughout the house",
  "a2": "Air conditioning",
  "a3": "Bed linen and towels",
  "a4": "Fully equipped kitchen",
  "a5": "Dining table for six",
  "a6": "Coffee maker and kettle",
  "a7": "Terraces facing the Aegean",
  "a8": "Shaded pergola with dining table",
  "a9": "Private parking for 2 cars",
  "kPract": "07 · Practical",
  "practTitle": "Good to know <em>before you come.</em>",
  "practP": "The details below are indicative. We confirm everything personally when we reply to your request.",
  "q1": "Arrival and departure",
  "q1a": "Check-in from 15:00, check-out by 11:00. If your ferry times are different, tell us and we will try to make it work.",
  "q2": "Minimum stay",
  "q2a": "Three nights for most of the year, a week in July and August.",
  "q3": "Price",
  "q3a": "The total depends on your dates and the number of guests. We send it personally with our reply.",
  "q4": "House rules",
  "q4a": "No smoking indoors and no parties. Please respect the quiet of the neighbourhood after 23:00.",
  "q5": "Getting here",
  "q5a": "Kea is reached by ferry from Lavrio. Directions to the villa are on the Location page.",
  "q5link": "Location & directions",
  "lbClose": "Close",
  "lbPrev": "Previous photo",
  "lbNext": "Next photo",
  "lbOf": "of"
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
  "title": "Η βίλα — Cycladic Villa Kea, Ιουλίδα, Κέα",
  "desc": "Μέσα στη Cycladic Villa Kea: τρία υπνοδωμάτια με διπλά κρεβάτια για έως έξι επισκέπτες, 100 τ.μ. παραδοσιακής κυκλαδίτικης αρχιτεκτονικής, βεράντες με θέα στο Αιγαίο και ένα κτήμα με βελανιδιές πάνω από την Ιουλίδα.",
  "subnavAria": "Σε αυτή τη σελίδα",
  "vKicker": "Η βίλα",
  "vTitle": "Ένα ολόκληρο σπίτι, <em>χτισμένο όπως χτίζει το νησί.</em>",
  "vLead": "Παραδοσιακή κυκλαδίτικη αρχιτεκτονική, και ένα σπίτι μόνο δικό σας για όσο μείνετε: 100 τ.μ. για έως έξι επισκέπτες, βεράντες γύρω γύρω και ένα κτήμα με βελανιδιές πάνω από την Ιουλίδα.",
  "vScroll": "Περάστε μέσα",
  "fx1n": "6",
  "fx1": "επισκέπτες το πολύ",
  "fx2n": "3",
  "fx2": "υπνοδωμάτια, διπλά κρεβάτια",
  "fx3n": "100",
  "fx3": "τ.μ. κυκλαδίτικο σπίτι",
  "fx4n": "4.000",
  "fx4": "τ.μ. κτήμα με βελανιδιές",
  "fx5n": "2",
  "fx5": "αυτοκίνητα, ιδιωτικό πάρκινγκ",
  "nLayout": "Διαρρύθμιση",
  "nSpaces": "Οι χώροι",
  "nDetails": "Λεπτομέρειες",
  "nTerraces": "Βεράντες",
  "nEstate": "Το κτήμα",
  "nAmen": "Παροχές",
  "nPract": "Πρακτικά",
  "kLayout": "01 · Διαρρύθμιση",
  "layoutTitle": "Χώρος για έξι, <em>και μια ήσυχη γωνιά για τον καθένα.</em>",
  "layoutP": "Τρία υπνοδωμάτια με διπλά κρεβάτια ανοίγουν γύρω από έναν κοινό χώρο. Μια οικογένεια ή μια παρέα περνά τη μέρα μαζί και το βράδυ ο καθένας κλείνει τη δική του πόρτα.",
  "planNote": "Ενδεικτική κάτοψη · το τελικό σχέδιο θα ακολουθήσει",
  "pLiving": "Καθιστικό",
  "pKitchen": "Κουζίνα & τραπεζαρία",
  "pBed1": "Υπνοδ. 1",
  "pBed2": "Υπνοδ. 2",
  "pBed3": "Υπνοδ. 3",
  "pBath": "Μπάνιο",
  "pTerrace": "Βεράντα · πέργκολα",
  "pSea": "Αιγαίο · ηλιοβασίλεμα",
  "cLivingT": "Καθιστικό & κουζίνα",
  "cLivingP": "Ένας ενιαίος χώρος στην καρδιά του σπιτιού: βαθιοί καναπέδες από τη μία, η κουζίνα και το τραπέζι από την άλλη, και η βεράντα ένα βήμα πιο έξω.",
  "cBed1T": "Πρώτο υπνοδωμάτιο",
  "cBed1P": "Διπλό κρεβάτι κάτω από μια ανάλαφρη κουνουπιέρα, με γυάλινη πόρτα προς τα έξω.",
  "cBed2T": "Δεύτερο υπνοδωμάτιο",
  "cBed2P": "Φωτεινό δωμάτιο με διπλό κρεβάτι και παράθυρα ανοιχτά προς τους λόφους.",
  "cBed3T": "Τρίτο υπνοδωμάτιο",
  "cBed3P": "Ήσυχο δωμάτιο με διπλό κρεβάτι, λίγο πιο μέσα από τον κοινό χώρο.",
  "cTerrT": "Η βεράντα",
  "cTerrP": "Σκιασμένη από την πέργκολα, με θέα στο Αιγαίο και στο ηλιοβασίλεμα.",
  "sleeps2": "2 άτομα · διπλό κρεβάτι",
  "kSpaces": "02 · Οι χώροι",
  "spacesTitle": "Περπατήστε <em>μέσα στο σπίτι.</em>",
  "spacesHint": "Συνεχίστε το scroll: οι χώροι περνούν ο ένας μετά τον άλλο.",
  "spacesHintM": "Σύρετε για να δείτε τους χώρους.",
  "r1T": "Το καθιστικό",
  "r1P": "Βαθιοί καναπέδες σε νησιώτικο μπλε και ένα χαμηλό τραπέζι για τα μεγάλα βράδια, ανοιχτά προς την κουζίνα.",
  "r2T": "Κουζίνα & τραπεζαρία",
  "r2P": "Πλήρως εξοπλισμένη για κανονικό μαγείρεμα, με ξύλινο τραπέζι για τα γεύματα μέσα.",
  "r3T": "Τα υπνοδωμάτια",
  "r3P": "Τρία υπνοδωμάτια, το καθένα με διπλό κρεβάτι, απαλά λευκά σεντόνια και φως από τα παράθυρα.",
  "r4T": "Το μπάνιο",
  "r4P": "Ασβεστωμένοι τοίχοι, πέτρα και απαλό φως. Οι φωτογραφίες και οι λεπτομέρειες έρχονται σύντομα.",
  "openGallery": "Δείτε τις φωτογραφίες",
  "phTag": "Φωτογραφία σύντομα",
  "ph1": "Καθιστικό · καναπέδες και μαξιλάρια",
  "ph2": "Καθιστικό · η θέα από το παράθυρο",
  "ph3": "Τραπεζαρία · στρωμένη για έξι",
  "ph4": "Τρίτο υπνοδωμάτιο · από την πόρτα",
  "ph5": "Μπάνιο · ένα καθαρό κάδρο",
  "ph6": "Μπάνιο · πέτρα και υλικά",
  "ph7": "Μπάνιο · πετσέτες και φως",
  "ph8": "Πέτρινο πλακόστρωτο και παλιό ξύλο",
  "ph9": "Οι βελανιδιές του κτήματος",
  "ph10": "Άφιξη · είσοδος και πάρκινγκ",
  "kDetails": "03 · Λεπτομέρειες",
  "detailsTitle": "Φτιαγμένα στο χέρι, <em>κρατημένα απλά.</em>",
  "detailsP": "Ασβέστης και μπλε παντζούρια, πέτρα στο πάτωμα, ζωγραφιστά πιάτα στους τοίχους. Μικρά πράγματα, διαλεγμένα με φροντίδα.",
  "d1": "Μπλε παντζούρια",
  "d2": "Η ζωγραφιστή πινακίδα",
  "d3": "Πηλός και βραδινό φως",
  "d4": "Πέτρα και ξύλο",
  "altJar": "Πήλινο πιθάρι στην πέτρινη βεράντα, στο βραδινό φως",
  "kTerraces": "04 · Βεράντες",
  "terrTitle": "Βεράντες γύρω γύρω, <em>και μπροστά το Αιγαίο.</em>",
  "terrP1": "Οι βεράντες τυλίγουν το σπίτι, οπότε υπάρχει πάντα ένα σημείο στον ήλιο και ένα στη σκιά. Η κύρια βρίσκεται κάτω από την πέργκολα και κοιτάζει κατευθείαν το Αιγαίο και το ηλιοβασίλεμα.",
  "terrP2": "Πρωινό έξω, ένα μεγάλο μεσημεριανό στο τραπέζι, ένα ποτήρι κρασί καθώς πέφτει ο ήλιος: το σπίτι είναι φτιαγμένο για να ζει κανείς εδώ έξω.",
  "tm1": "Πρωί",
  "tm1c": "Καφές με την Ιουλίδα από κάτω",
  "tm2": "Ηλιοβασίλεμα",
  "tm2c": "Ο ήλιος δύει πάνω από τη θάλασσα",
  "kEstate": "05 · Το κτήμα",
  "estateTitle": "Δική σας γη, <em>ανάμεσα στις βελανιδιές.</em>",
  "estateP": "Το σπίτι στέκεται σε ένα κτήμα 4.000 τ.μ. με βελανιδιές, που το κρατά ιδιωτικό και ήσυχο πάνω από το χωριό. Υπάρχει ιδιωτικό πάρκινγκ για δύο αυτοκίνητα.",
  "estateBig": "4.000 τ.μ.",
  "estateSmall": "γη με βελανιδιές",
  "kAmen": "06 · Παροχές",
  "amenTitle": "Ό,τι χρειάζεστε, <em>τίποτα περιττό.</em>",
  "gComfort": "Άνεση",
  "gKitchen": "Κουζίνα",
  "gOutside": "Έξω",
  "a1": "Wi-Fi σε όλο το σπίτι",
  "a2": "Κλιματισμός",
  "a3": "Σεντόνια και πετσέτες",
  "a4": "Πλήρως εξοπλισμένη κουζίνα",
  "a5": "Τραπέζι φαγητού για έξι",
  "a6": "Καφετιέρα και βραστήρας",
  "a7": "Βεράντες με θέα στο Αιγαίο",
  "a8": "Σκιερή πέργκολα με τραπέζι φαγητού",
  "a9": "Ιδιωτικό πάρκινγκ για 2 αυτοκίνητα",
  "kPract": "07 · Πρακτικά",
  "practTitle": "Καλό να ξέρετε <em>πριν έρθετε.</em>",
  "practP": "Οι πληροφορίες είναι ενδεικτικές. Τα επιβεβαιώνουμε όλα προσωπικά όταν απαντάμε στο αίτημά σας.",
  "q1": "Άφιξη και αναχώρηση",
  "q1a": "Άφιξη από τις 15:00, αναχώρηση έως τις 11:00. Αν τα δρομολόγια του πλοίου σας είναι διαφορετικά, πείτε μας και θα προσπαθήσουμε να βρούμε λύση.",
  "q2": "Ελάχιστη διαμονή",
  "q2a": "Τρεις νύχτες τον περισσότερο χρόνο, μία εβδομάδα τον Ιούλιο και τον Αύγουστο.",
  "q3": "Τιμή",
  "q3a": "Το σύνολο εξαρτάται από τις ημερομηνίες και τον αριθμό των επισκεπτών. Σας το στέλνουμε προσωπικά με την απάντησή μας.",
  "q4": "Κανόνες του σπιτιού",
  "q4a": "Όχι κάπνισμα μέσα στο σπίτι και όχι πάρτι. Παρακαλούμε σεβαστείτε την ησυχία της γειτονιάς μετά τις 23:00.",
  "q5": "Πώς θα έρθετε",
  "q5a": "Στην Κέα φτάνετε με πλοίο από το Λαύριο. Οδηγίες για τη βίλα θα βρείτε στη σελίδα «Η τοποθεσία».",
  "q5link": "Τοποθεσία & οδηγίες",
  "lbClose": "Κλείσιμο",
  "lbPrev": "Προηγούμενη φωτογραφία",
  "lbNext": "Επόμενη φωτογραφία",
  "lbOf": "από"
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

  /* ---------------- Sub-navigation: sliding marker + follows the reader ---------------- */
  var subnav = document.querySelector('.subnav');
  var subList = subnav.querySelector('.subnav__list');
  var subBar = subnav.querySelector('.subnav__bar');
  var subLinks = Array.prototype.slice.call(subnav.querySelectorAll('a'));
  var subSecs = subLinks.map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); });
  var activeSub = -2;
  function placeBar() {
    var a = subLinks[activeSub];
    if (!a) { subBar.style.opacity = '0'; return; }
    var lr = a.getBoundingClientRect(), wr = subList.getBoundingClientRect();
    subBar.style.opacity = '1';
    subBar.style.width = lr.width + 'px';
    subBar.style.transform = 'translateX(' + (lr.left - wr.left + subList.offsetLeft) + 'px)';
  }
  function setSub(i) {
    if (i === activeSub) return;
    activeSub = i;
    subLinks.forEach(function (a, k) { if (k === i) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current'); });
    placeBar();
    var a = subLinks[i];
    if (a && subList.scrollWidth > subList.clientWidth + 4) {   // mobile: keep the active label in view
      var x = a.offsetLeft - (subList.clientWidth - a.offsetWidth) / 2;
      subList.scrollTo({ left: x, behavior: reduce.matches ? 'auto' : 'smooth' });
    }
  }
  subList.addEventListener('scroll', placeBar, { passive: true });
  afterLang.push(function () { var i = activeSub; activeSub = -2; setSub(i); });

  /* ---------------- Floor plan ---------------- */
  var layoutSec = document.getElementById('layout');
  var planSvg = layoutSec.querySelector('.plan__svg');
  var planPaths = Array.prototype.slice.call(planSvg.querySelectorAll('.plan__lines path'));
  var cards = Array.prototype.slice.call(layoutSec.querySelectorAll('.rcard'));
  var activeRoom = null;
  function setRoom(room) {
    if (room === activeRoom) return;
    activeRoom = room;
    var rooms = room === 'living' ? ['living', 'kitchen'] : [room];
    each('.plan__fills rect', function (r) { r.classList.toggle('is-on', rooms.indexOf(r.getAttribute('data-room')) > -1); });
    cards.forEach(function (c) { c.classList.toggle('is-on', c.getAttribute('data-room') === room); });
  }

  /* ---------------- Corridor (inside) ---------------- */
  var inside = document.getElementById('inside');
  var pin = inside.querySelector('.inside__pin');
  var viewport = inside.querySelector('.inside__viewport');
  var track = inside.querySelector('.inside__track');
  var bar = inside.querySelector('.inside__progress span');
  var travel = 0, corridorOn = false;
  function sizeCorridor() {
    corridorOn = desktop.matches && !!window.IntersectionObserver;
    inside.classList.toggle('is-pinned', corridorOn);
    if (!corridorOn) { inside.style.height = ''; track.style.transform = ''; return; }
    travel = Math.max(0, track.scrollWidth - viewport.clientWidth);
    inside.style.height = (pin.offsetHeight + travel) + 'px';
  }
  viewport.addEventListener('scroll', function () {   // mobile: native swipe → progress line
    if (corridorOn) return;
    var max = viewport.scrollWidth - viewport.clientWidth;
    bar.style.transform = 'scaleX(' + (max > 0 ? Math.max(.25, viewport.scrollLeft / max) : 1) + ')';
  }, { passive: true });

  /* ---------------- Pergola + estate ---------------- */
  var pergola = document.querySelector('.pergola');
  var estate = document.getElementById('estate');
  var estateScene = estate.querySelector('.estate__scene');
  var estatePin = estate.querySelector('.estate__pin');

  /* ---------------- One frame loop for every scroll-linked scene ---------------- */
  var stickyTop = function () { return header.getBoundingClientRect().height + subnav.getBoundingClientRect().height; };
  var ticking = false;
  function frame() {
    ticking = false;
    var vh = window.innerHeight, top = stickyTop();

    // sub-navigation
    var idx = -1;
    for (var i = 0; i < subSecs.length; i++) { if (subSecs[i] && subSecs[i].getBoundingClientRect().top <= top + vh * 0.25) idx = i; }
    var askTop = document.getElementById('contact').getBoundingClientRect().top;
    if (askTop < top + vh * 0.25) idx = -1;
    setSub(idx);

    // plan draws across the first stretch of the section; walls first, then doors, furniture last
    var lr = layoutSec.getBoundingClientRect();
    if (lr.bottom > 0 && lr.top < vh) {
      var p = clamp((vh * 0.85 - lr.top) / (Math.min(lr.height, vh * 1.4) * 0.55));
      var n = planPaths.length;
      planPaths.forEach(function (path, k) {
        var local = clamp(p * (1 + n * 0.12) - k * 0.12);
        path.style.strokeDashoffset = String(1 - ease(local));
      });
      planSvg.classList.toggle('is-drawn', p > 0.9);
      // the card closest to the reading line lights its room
      var line = top + (vh - top) * 0.45, best = null, bd = 1e9;
      cards.forEach(function (c) {
        var r = c.getBoundingClientRect(); var dd = Math.abs((r.top + r.bottom) / 2 - line);
        if (r.bottom > top && r.top < vh && dd < bd) { bd = dd; best = c; }
      });
      if (best && p > 0.35) setRoom(best.getAttribute('data-room'));
    }

    // corridor
    if (corridorOn) {
      var ir = inside.getBoundingClientRect();
      var cp = clamp((top - ir.top) / Math.max(1, travel));
      track.style.transform = 'translate3d(' + (-cp * travel).toFixed(1) + 'px,0,0)';
      bar.style.transform = 'scaleX(' + Math.max(.25, cp).toFixed(4) + ')';
    }

    // pergola shadows drift as the photo crosses the screen
    var pr = pergola.getBoundingClientRect();
    if (pr.bottom > 0 && pr.top < vh) {
      var sp = clamp((vh - pr.top) / (vh + pr.height)) * 2 - 1;      // −1 … 1
      pergola.style.setProperty('--sh', sp.toFixed(4));
    }

    // estate: start close on the house, open out to the whole estate
    var er = estateScene.getBoundingClientRect();
    if (er.bottom > 0 && er.top < vh) {
      var span = Math.max(1, estateScene.offsetHeight - estatePin.offsetHeight);
      var ep = clamp((top - er.top) / span);
      estate.style.setProperty('--z', ease(ep).toFixed(4));
      estate.classList.toggle('is-open', ep > 0.55);
    }
  }
  function requestFrame() { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }
  window.addEventListener('scroll', requestFrame, { passive: true });
  function relayout() { sizeCorridor(); placeBar(); requestFrame(); }
  window.addEventListener('resize', relayout);
  afterLang.push(relayout);
  window.addEventListener('load', relayout);

  /* ---------------- Lightbox ---------------- */
  var dlg = document.querySelector('.lb');
  var lbMedia = dlg.querySelector('.lb__media');
  var lbRoom = dlg.querySelector('.lb__room');
  var lbCount = dlg.querySelector('.lb__count');
  // One gallery through the whole house, room after room; the caption names the room and counts within it.
  var gallery = [], gi = 0, opener = null;
  var TITLE = { living: 'r1T', kitchen: 'r2T', bedrooms: 'r3T', bath: 'r4T' };
  var ORDER = ['living', 'kitchen', 'bedrooms', 'bath'];
  function allItems() {
    return Array.prototype.slice.call(document.querySelectorAll('.gfig[data-gallery]')).sort(function (a, b) {
      var ra = ORDER.indexOf(a.getAttribute('data-gallery')), rb = ORDER.indexOf(b.getAttribute('data-gallery'));
      return ra - rb || a.getAttribute('data-gi') - b.getAttribute('data-gi');
    });
  }
  function startOf(name, i) {
    for (var k = 0; k < gallery.length; k++) if (gallery[k].getAttribute('data-gallery') === name && +gallery[k].getAttribute('data-gi') === i) return k;
    return 0;
  }
  function sourceOf(fig) { return fig.querySelector('img') || fig.querySelector('.slot'); }
  function render(i) {
    gi = (i + gallery.length) % gallery.length;
    var fig = gallery[gi], img = fig.querySelector('img');
    lbMedia.innerHTML = '';
    var node;
    if (img) {
      node = document.createElement('img');
      node.src = img.getAttribute('data-full') || img.currentSrc || img.src;
      node.alt = img.alt;
      node.width = img.naturalWidth || img.width; node.height = img.naturalHeight || img.height;
    } else {
      node = fig.querySelector('.slot').cloneNode(true);
      node.classList.add('slot--lb');
    }
    lbMedia.appendChild(node);
    var d = T[current], room = fig.getAttribute('data-gallery');
    var inRoom = gallery.filter(function (f) { return f.getAttribute('data-gallery') === room; });
    lbRoom.textContent = d[TITLE[room]] || '';
    lbCount.textContent = (inRoom.indexOf(fig) + 1) + ' ' + d.lbOf + ' ' + inRoom.length;
    return node;
  }
  var canVT = !!document.startViewTransition;
  function openLb(name, i, from) {
    gallery = allItems(); opener = from || document.activeElement;
    i = startOf(name, i);
    var src = gallery[i] && sourceOf(gallery[i]);
    var go = function () {
      if (src) src.style.viewTransitionName = '';
      dlg.showModal(); root.classList.add('lb-open');
      var node = render(i);
      if (canVT && !reduce.matches) node.style.viewTransitionName = 'lb-photo';
    };
    if (canVT && !reduce.matches && src) {
      src.style.viewTransitionName = 'lb-photo';
      document.startViewTransition(go).finished.then(clearNames, clearNames);
    } else { go(); dlg.classList.add('is-fading'); requestAnimationFrame(function () { dlg.classList.remove('is-fading'); }); }
  }
  function clearNames() { each('[style*="view-transition-name"]', function (el) { el.style.viewTransitionName = ''; }); }
  function closeLb() {
    var src = gallery[gi] && sourceOf(gallery[gi]);
    var node = lbMedia.firstChild;
    var done = function () {
      if (node) node.style.viewTransitionName = '';
      dlg.close(); root.classList.remove('lb-open');
      if (src) src.style.viewTransitionName = canVT && !reduce.matches ? 'lb-photo' : '';
      if (opener && opener.focus) opener.focus({ preventScroll: true });
    };
    if (canVT && !reduce.matches && src && node && isVisible(src)) {
      node.style.viewTransitionName = 'lb-photo';
      document.startViewTransition(done).finished.then(clearNames, clearNames);
    } else { done(); clearNames(); }
  }
  function isVisible(el) { var r = el.getBoundingClientRect(); return r.width > 0 && r.bottom > 0 && r.top < window.innerHeight && r.right > 0 && r.left < window.innerWidth; }
  function step(dir) {
    var node = lbMedia.firstChild;
    if (node && !reduce.matches && node.animate) {
      node.animate([{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'translateX(' + (-dir * 24) + 'px)' }], { duration: 160, easing: 'ease-in' })
        .finished.then(function () {
          var n = render(gi + dir);
          n.animate([{ opacity: 0, transform: 'translateX(' + (dir * 28) + 'px)' }, { opacity: 1, transform: 'none' }], { duration: 320, easing: 'cubic-bezier(.16,.84,.24,1)' });
        });
    } else render(gi + dir);
  }
  each('.gfig__btn', function (b) {
    b.addEventListener('click', function () { var f = b.closest('.gfig'); openLb(f.getAttribute('data-gallery'), +f.getAttribute('data-gi'), b); });
  });
  each('[data-open-gallery]', function (b) { b.addEventListener('click', function () { openLb(b.getAttribute('data-open-gallery'), 0, b); }); });
  dlg.querySelector('.lb__prev').addEventListener('click', function () { step(-1); });
  dlg.querySelector('.lb__next').addEventListener('click', function () { step(1); });
  dlg.querySelector('.lb__close').addEventListener('click', closeLb);
  dlg.addEventListener('cancel', function (e) { e.preventDefault(); closeLb(); });
  dlg.addEventListener('click', function (e) { if (e.target === dlg || e.target.classList.contains('lb__stage')) closeLb(); });
  dlg.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') { e.preventDefault(); step(1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1); }
  });
  var sx = null;
  dlg.addEventListener('pointerdown', function (e) { sx = e.clientX; });
  dlg.addEventListener('pointerup', function (e) { if (sx !== null && Math.abs(e.clientX - sx) > 50) step(e.clientX < sx ? 1 : -1); sx = null; });
  afterLang.push(function () { if (dlg.open) render(gi); });

  /* ---------------- Accordions: smooth open and close ---------------- */
  // One answer open at a time: opening another closes the previous one.
  var accs = Array.prototype.slice.call(document.querySelectorAll('.acc'));
  function closeAcc(d) {
    var body = d.querySelector('.acc__a');
    if (!d.open || d.classList.contains('is-closing')) return;
    if (reduce.matches || !body.animate) { d.open = false; return; }
    var h = body.offsetHeight;
    d.classList.add('is-closing');
    body.animate([{ height: h + 'px', opacity: 1 }, { height: '0px', opacity: 0 }], { duration: 380, easing: 'cubic-bezier(.33,0,.2,1)' })
      .finished.then(function () { d.open = false; d.classList.remove('is-closing'); });
  }
  function openAcc(d) {
    var body = d.querySelector('.acc__a');
    accs.forEach(function (o) { if (o !== d) closeAcc(o); });
    d.open = true;
    if (reduce.matches || !body.animate) return;
    var h2 = body.offsetHeight;
    body.animate([{ height: '0px', opacity: 0 }, { height: h2 + 'px', opacity: 1 }], { duration: 480, easing: 'cubic-bezier(.16,.84,.24,1)' });
  }
  accs.forEach(function (d) {
    d.querySelector('summary').addEventListener('click', function (e) {
      e.preventDefault();
      if (d.open && !d.classList.contains('is-closing')) closeAcc(d); else openAcc(d);
    });
  });

  /* ---------------- Reveals, sticky CTA ---------------- */
  if ('IntersectionObserver' in window) {
    root.classList.add('io');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in-view'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 });
    each('[data-reveal], .ask, .amen__cols', function (el) { io.observe(el); });

    var sticky = document.querySelector('.sticky-cta');
    var heroOut = false, askIn = false, footIn = false;
    var syncSticky = function () {
      var on = heroOut && !askIn && !footIn;
      sticky.classList.toggle('is-visible', on);
      sticky.setAttribute('aria-hidden', String(!on));
      sticky.querySelector('a').tabIndex = on ? 0 : -1;
    };
    new IntersectionObserver(function (e) { heroOut = !e[0].isIntersecting; syncSticky(); }, { threshold: 0 }).observe(document.querySelector('.vhero'));   // like home: the bar waits until the first screen has been passed
    new IntersectionObserver(function (e) { askIn = e[0].isIntersecting; syncSticky(); }, { threshold: 0 }).observe(document.getElementById('contact'));
    new IntersectionObserver(function (e) { footIn = e[0].isIntersecting; syncSticky(); }, { threshold: 0 }).observe(document.querySelector('.site-footer'));
  } else {
    root.classList.add('reveal-all');
  }

  /* ---------------- Intro: wait briefly for fonts, then open the shutters ---------------- */
  var started = false;
  function start() {
    if (started) return; started = true;
    relayout();
    requestAnimationFrame(function () { requestAnimationFrame(function () { root.classList.add('is-ready'); }); });
  }
  var fontsReady = (document.fonts && document.fonts.ready) ? document.fonts.ready : Promise.resolve();
  Promise.race([fontsReady, new Promise(function (r) { setTimeout(r, 600); })]).then(start);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(relayout);
})();

# Cycladic Villa Kea

Website of Cycladic Villa Kea, a private villa above Ioulida on Kea, Greece.

Static site (HTML, CSS, JS), no build step. Open `index.html` or deploy the repository root to any static host (Netlify, GitHub Pages).

## Pages

- `index.html` — Home ("A day above Ioulida")
- `villa.html` — The villa ("A walk through the house"): shutters that open, a floor plan that draws itself, a corridor of rooms, per-room photo galleries, whitewash reveals, pergola shadows, a zoom out over the estate
- `location.html` — Location ("The journey here"): the morning haze lifts off Ioulida, an illustrated Kea rises from the sea, a ferry and then the road travel the map as you scroll, distance bars, postcards that stack
- `contact.html` — Contact: the availability request. Custom range calendar, guest counter (1–6), gentle validation, and a letter that writes itself beside the form and is sealed on sending. **Demo:** the form is not connected yet; nothing is sent (connect it when moving to WordPress). Every "Request availability" on the site opens `contact.html#request`.

## Files

- `css/style.css` — shared design (tokens, type, header, menu, buttons, availability block, footer) and the home page
- `css/villa.css` — The villa page
- `css/location.css` — Location page
- `css/contact.css` — Contact page
- `js/main.js` — home page behaviour
- `js/villa.js` — The villa page behaviour and its EN/EL text
- `js/location.js` — Location page behaviour and its EN/EL text
- `js/contact.js` — Contact page: calendar, form, letter, and its EN/EL text
- `assets/img`, `assets/video` — photos and video clips

English loads first. Greek is chosen with the EN/EL switch and carries over between pages in the same browser tab.

## The villa page: demo content

The page is a working draft while the photos and some facts are on their way.

- **Photo placeholders** ("Photo to come"): living room details, dining table, bedroom three, bathroom (3), stone and wood, oak trees, arrival and parking. Each says which shot is needed.
- **Demo text, to be confirmed** (marked `<!-- DEMO -->` in `villa.html`): the floor plan (indicative drawing, incl. one bathroom), living & kitchen card, bedroom three, bathroom text, amenities "bed linen and towels", "dining table for six", "coffee maker and kettle", and the Practical answers (check-in/out times, minimum stay, house rules, getting here).

## Location page: demo content

- **Demo text, to be confirmed** (marked `<!-- DEMO -->` in `location.html`): ferry and drive times, the three journey steps, all distances, and the "Discover Kea" texts after Ioulida.
- **Open in Maps** points to Ioulida for now; replace it with the villa's exact pin when confirmed (`TODO` in the code).
- The map is an illustration of Kea's outline (traced and redrawn), not to scale.

## Contact page: to confirm

- The recipient email `info@cycladicvillakea.com` is a placeholder.
- The minimum-stay hint (three nights) is demo text.
- The privacy policy link in the consent box is inactive until that page exists (`TODO`).

Version: v5.5 (home, The villa, Location, Contact)

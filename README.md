# Cycladic Villa Kea

Website of Cycladic Villa Kea, a private villa above Ioulida on Kea, Greece.

Static site (HTML, CSS, JS), no build step. Open `index.html` or deploy the repository root to any static host (Netlify, GitHub Pages).

## Pages

- `index.html` — Home ("A day above Ioulida")
- `villa.html` — The villa ("A walk through the house"): shutters that open, a floor plan that draws itself, a corridor of rooms, per-room photo galleries, whitewash reveals, pergola shadows, a zoom out over the estate
- `location.html` — Location ("The journey here"): the morning haze lifts off Ioulida, an illustrated Kea rises from the sea, a ferry and then the road travel the map as you scroll, distance bars, postcards that stack
- Contact page: not built yet (its links are inactive, marked with `TODO` in the code)

## Files

- `css/style.css` — shared design (tokens, type, header, menu, buttons, availability block, footer) and the home page
- `css/villa.css` — The villa page
- `css/location.css` — Location page
- `js/main.js` — home page behaviour
- `js/villa.js` — The villa page behaviour and its EN/EL text
- `js/location.js` — Location page behaviour and its EN/EL text
- `assets/img`, `assets/video` — photos and video clips

English loads first. Greek is chosen with the EN/EL switch and carries over between pages in the same browser tab.

## The villa page: demo content

The page is a working draft while the photos and some facts are on their way.

- **Photo placeholders** ("Photo to come"): living room details, dining table, bedroom three, bathroom (3), stone and wood, oak trees, arrival and parking. Each says which shot is needed.
- **Demo text, to be confirmed** (marked `<!-- DEMO -->` in `villa.html`): the floor plan (indicative drawing, incl. one bathroom), living & kitchen card, bedroom three, bathroom text, amenities "bed linen and towels", "dining table for six", "coffee maker and kettle", and the Practical answers (check-in/out times, minimum stay, house rules, getting here).

## Location page: demo content

- **Photo placeholders**: the four "Discover Kea" postcards (Ioulida lanes, the path to the Lion, a quiet bay, a table by the water).
- **Demo text, to be confirmed** (marked `<!-- DEMO -->` in `location.html`): ferry and drive times, the three journey steps, all distances, and the three "Discover Kea" picks after Ioulida (to choose with Nicole).
- **Open in Maps** points to Ioulida for now; replace it with the villa's exact pin when confirmed (`TODO` in the code).
- The map is an illustration, not to scale.

Version: v5.2 (home, The villa, Location)

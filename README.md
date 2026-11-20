# Cycladic Villa Kea

Website of Cycladic Villa Kea, a private villa above Ioulida on Kea, Greece.

Static site (HTML, CSS, JS), no build step. Open `index.html` or deploy the repository root to any static host (Netlify, GitHub Pages).

## Pages

- `index.html` — Home ("A day above Ioulida")
- `villa.html` — The villa ("A walk through the house"): shutters that open, a floor plan that draws itself, a corridor of rooms, per-room photo galleries, whitewash reveals, pergola shadows, a zoom out over the estate
- Location and Contact pages: not built yet (their links are inactive, marked with `TODO` in the code)

## Files

- `css/style.css` — shared design (tokens, type, header, menu, buttons, availability block, footer) and the home page
- `css/villa.css` — The villa page
- `js/main.js` — home page behaviour
- `js/villa.js` — The villa page behaviour and its EN/EL text
- `assets/img`, `assets/video` — photos and video clips

English loads first. Greek is chosen with the EN/EL switch and carries over between pages in the same browser tab.

## The villa page: demo content

The page is a working draft while the photos and some facts are on their way.

- **Photo placeholders** ("Photo to come"): living room details, dining table, bedroom three, bathroom (3), stone and wood, oak trees, arrival and parking. Each says which shot is needed.
- **Demo text, to be confirmed** (marked `<!-- DEMO -->` in `villa.html`): the floor plan (indicative drawing, incl. one bathroom), living & kitchen card, bedroom three, bathroom text, amenities "bed linen and towels", "dining table for six", "coffee maker and kettle", and the Practical answers (check-in/out times, minimum stay, house rules, getting here).

Version: v5.1 (home v4.8 + The villa page)

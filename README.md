# Cycladic Villa Kea

Website of Cycladic Villa Kea, a private villa above Ioulida on Kea, Greece.

Static site (HTML, CSS, JS), no build step. Open `index.html` or deploy the repository root to any static host (Netlify, GitHub Pages).

## Pages

- `index.html` — Home ("A day above Ioulida")
- `villa.html` — The villa ("A walk through the house"): shutters that open, a floor plan that draws itself, a corridor of rooms, per-room photo galleries, whitewash reveals, pergola shadows, a zoom out over the estate
- `location.html` — Location ("The journey here"): the morning haze lifts off Ioulida, an illustrated Kea rises from the sea, a ferry and then the road travel the map as you scroll, distance bars, postcards that stack
- `contact.html` — Contact: the availability request. Custom range calendar, guest counter (1–6), gentle validation, and a letter that writes itself beside the form and is sealed on sending. **Demo:** the form is not connected yet; nothing is sent (connect it when moving to WordPress). Every "Request availability" on the site opens `contact.html#request`.
- `privacy.html` — Privacy policy (**demo text**, to be completed and confirmed by the owners; gaps are highlighted in [ ]). Contents stay in view on the left (desktop) and fold into a panel on phones. Linked from every footer and from the consent box of the form (opens in a new tab, so the form keeps what was typed).
- `404.html` — Page not found (EN/EL), with two ways back: Request availability and Home. Its links and files use root paths (`/css/style.css`), because the server shows it at any missing address; this works when the site sits at the root of its domain (Netlify serves `404.html` by itself). In WordPress it becomes the theme's `404.php`. Not indexed by search engines.

## Files

- `css/style.css` — shared design (tokens, type, header, menu, buttons, availability block, footer) and the home page
- `css/villa.css` — The villa page
- `css/location.css` — Location page
- `css/contact.css` — Contact page
- `css/privacy.css` — Privacy policy
- `js/main.js` — home page behaviour
- `js/villa.js` — The villa page behaviour and its EN/EL text
- `js/location.js` — Location page behaviour and its EN/EL text
- `js/contact.js` — Contact page: calendar, form, letter, and its EN/EL text
- `css/404.css`, `js/404.js` — the 404 page
- `js/privacy.js` — Privacy policy: contents that follow the reader, and its EN/EL text
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

## Videos

No video ever starts by itself, on any screen. The hero clip on the home page shows its photo with a Play button; on desktop the clip is buffered in the background so Play starts at once. All clips are muted until the visitor turns the sound on, and pause when scrolled away.

## Speed (v5.9)

- **Fonts are served from the site** (`assets/fonts/`), not from Google Fonts: Noto Serif Display (upright and italic) and Commissioner, variable weight, cut to the characters the site uses and split into Latin and Greek files. A browser downloads the Greek files only when Greek text is on screen. The three Latin files the first screen needs are preloaded in each page's `<head>`. Licence: SIL Open Font License (`OFL-*.txt` in the same folder).
- **Video posters are set by `js/main.js`**, not in the HTML (`data-poster` on each `<video>`), so the browser does not fetch all three on arrival. Each poster is WebP, 640 px on phones and 1280 px on larger screens, and loads when its clip is about to come into view (the hero's when Play is offered or pressed).
- **Phones: the hero photo is on screen from the first frame.** Desktop keeps the full intro (the view opening from the horizon line).
- Contact, Privacy and 404 run their entrance in CSS from the first frame, instead of waiting for the scripts.
- `sizes` on the home page images match the real layout, and there are extra sizes for the hero (800 px) and the stone sign (480 px), so phones download smaller files.

## Social preview

`assets/img/og-image.jpg` (1200×630) is the picture shown when a page is shared on Facebook, WhatsApp, LinkedIn and others. Every page carries the Open Graph / Twitter tags for it, between `<!-- Social preview -->` comments. **The tags use the placeholder domain `https://cycladicvillakea.com`**: replace it with the real one before launch (one line, `SITE`, in the generator's `og_meta.py`, or a find-and-replace in the HTML).

The footer copyright year updates itself every year; the credit links to michalismerkouris.com (new tab).

Version: v5.13 (home, The villa, Location, Contact, Privacy, 404)

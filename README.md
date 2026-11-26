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

## v6 — Cinematic (local draft, not deployed)

**Zoom films.** Home, The villa and Location open with a scene that stays on screen while you scroll: the camera moves into one spot of a photograph and the next, closer photograph of that same spot opens exactly there.

- Home: the estate at golden hour → the terrace lounge at dusk → the sun between the columns.
- The villa: the estate from above → the terrace corner between the two pergolas → through the open living-room door, into the living room. (Replaces the shutters intro.)
- Location: coffee on the terrace with Ioulida beyond → Ioulida → a stairway lane with an oleander (`ioulida-lane`).

How it works: `js/cinema.js` + `css/cinema.css`, with GSAP 3 + ScrollTrigger served from the site (`assets/vendor/gsap/`, GreenSock standard licence, free to use). Each frame is a `.film__frame` with `data-to="x y zoom"`: the point of the photo (0–1) the camera travels to and how much closer it gets. Captions are `.film__cap[data-frame="n"]`. The first photo is the hero image and is preloaded. **Reduced motion:** no pinning, the first photo stays as a still with its text. Without GSAP the films still run on a plain scroll listener.

**Also new:** a closing shot on Contact (table at sunset, drifts slower than the page), "Around the villa" on Location (sights, beaches, food, straight-line distances from the owners\' listing, to be confirmed), a slow push-in on the 404 photo, real photos in all ten "Photo to come" places on The villa, amenities in four groups from the listing, house rules (non-smoking, no pets).

**Photos:** new hi-res set (2048 px) from `images-booking/images-0*.zip`, exported as WebP 960/1600/2048 + JPG fallback (`film-*`, `living-*`, `dining-table`, `bedroom-three`, `bath-*`, `stone-path`, `estate-oaks`, `arrival-road`, `closing-table`).

**Run locally:** `npm install` once, then `npm run dev`, and open http://localhost:8080 (uses `serve`; addresses show without `.html`).

### v6.1
- **Transparent header** over the opening film on Home, The villa and Location (light text on a soft shade); it turns solid once the film has scrolled away, and whenever the menu is open. Contact, Privacy and 404 keep the solid header.
- **One photo, one place.** Each of the 45 photos appears once on the whole site; only 02 (the hand-painted sign) twice (home welcome, villa details). Contact has no photo again.
- **The villa, Layout:** no floor plan (until a real drawing exists). Cards 01–07: living & kitchen, three bedrooms, two bathrooms (05, 06), the terrace (07). The text on the left stays in place until the last card.

### v6.2
- **Location film back to three frames:** the third is `ioulida-lane` (from `ioulida-kea.jpg`, 1280 × 960). **Before going online:** the original photo carries a `© www.feelgreece.com` watermark. Get the photographer's permission (and credit as asked), or replace it with a photo the owners hold the rights to. Do not crop the watermark out.
- The transparent header turns solid as soon as the film starts to leave the screen (no overlap with the last caption on phones).

### v6.3
- **The villa, Inside:** every room has three photos again. The bathroom shows its main photo plus the two bathroom shots also used on the layout cards 05 and 06 (the one place where photos repeat on purpose).
- **Location film, frame 03:** now from `ioulida-kea.png` (1280 × 922). It is the same photograph as `ioulida-kea.jpg` without the © www.feelgreece.com mark, so the right to use it still has to be confirmed before going online.

### v6.4
- **The villa, The estate:** the zoom out now uses `estate-zoom` (from `villa-kea-zoom-4096.webp`, 4096 × 3072, the same aerial at much higher resolution), served up to 4096 px because the scene starts 2.3× closer. The zoom starts on the house (transform-origin 58% 46%).
- **Inside, 04:** "The bathrooms" / «Τα μπάνια».

### v6.5 — every device
- **Older browsers** (Chrome/Edge < 108, Firefox < 101, Safari < 15.4) did not know `svh`/`dvh` and dropped those lines: the film stage had no height and the hero was an empty navy block. Every `svh`/`dvh` line now has a `vh` line right before it (30 places, all CSS files). New code: always write the `vh` line first.
- **Never an empty hero:** if a film fails to start, its first photo shows as a still (`.film--still`).
- **Lite mode** (`html.cine-lite`) for weaker devices: no soft-edge mask, no lens vignette, a clean crossfade when the closer photo nearly fills the screen. On from the start for very low-end hardware or Data Saver; switches on by itself when the film plays below ~30 fps. Test it with `?lite=1`.
- **Reduced motion** is unchanged on purpose: with Windows "Animation effects" off (or "Reduce motion" on a Mac/phone), the browser asks for less motion and each film shows its first photo as a still.

### v6.6
- **Mobile menu button** (burger + "Menu") is white over the film, like the rest of the transparent header, and ink once the header turns solid.
- **Films:** a soft, even dark veil (`rgba(8, 22, 38, .16)`) over every photo, for a little more contrast under the white text.
- **Location, 02 Distances:** nearest sandy beach 15 min (was 20); the desktop scale runs 0′–20′ (was 0′–30′), bars recalculated.
- **Contact form:** the "Choose your dates above" summary line is gone; the button sits in its place, "Not a booking · nothing to pay" stays below it.

### v6.6.1
- **Home · "Ioulida, just below" on phones:** the photo no longer lifts off the bottom edge (no band of section background under the card), and it is framed on the village, so Ioulida shows in the arch and, at the end, above the card. `kv-42` now also in 2048 px.

Version: v6.6.1-draft (cinematic) · previous: v5.13 (home, The villa, Location, Contact, Privacy, 404)

# 323846.xyz — Personal website

A responsive, bilingual personal portfolio built with plain HTML, CSS, and JavaScript. No build tools, framework, backend, or external image assets are required.

## Preview locally

Open `index.html` in a browser, or run a small local server from this directory:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Included

- English and Korean language switch; the selected language is remembered in the browser when local storage is available.
- Responsive layouts for desktop, tablet, and mobile.
- Keyboard skip link, visible keyboard focus, and reduced-motion support.
- Three editable project cards, an about section, working principles, and a closing section.
- No deployment, DNS, or domain configuration is performed by these files.

## Color note

The requested accent color **`#323846`** is explicitly defined as `--color-accent` in `styles.css`. It is used sparingly on the primary call-to-action button, brand mark, and selected small accents. The surrounding palette is warm white, soft gray, and neutral charcoal.

## Editing content

Text that supports both languages uses matching `data-en` and `data-ko` attributes in `index.html`. The language switch in `script.js` swaps those strings without a page reload. Project descriptions are intentionally high-level and can be refined as each project develops.

Fonts are requested from Google Fonts with system fallbacks. If loaded entirely offline, the page remains functional and uses fallback fonts.

# LebenslaufY Portfolio

React + Vite + Tailwind CSS single-page portfolio for an AIGC visual designer. The site includes a private access screen, hero section, profile summary, selected works, case-study overlays, image/video lightbox, resume sections, skills, and contact CTA.

## Run Locally

```bash
npm install
npm run dev
```

The Vite dev server usually runs at `http://localhost:5173/`. On Windows PowerShell, if `npm` is blocked by execution policy, run:

```bash
npm.cmd run dev
npm.cmd run build
```

## Build

```bash
npm run build
```

The production build is generated in `dist/`.

## Project Structure

- `src/App.jsx`: Main page composition and lock-screen gate.
- `src/data/portfolio.js`: Main editable content for navigation, profile, works, resume, skills, and contact.
- `src/data/*.js`: Image and media lists used by case studies.
- `src/components/`: Page sections and interactive UI components.
- `src/styles.css`: Global visual styling, layout helpers, and animations.
- `public/`: Static portfolio images, videos, SVG covers, favicon, and share assets.

## Current Features

- Password-gated portfolio entry screen.
- Hero section with interactive visual elements.
- About, works, resume/services, skills, and contact sections.
- Four selected work categories with full-screen case-study overlays.
- Image and video preview lightbox with thumbnails, keyboard navigation, and mobile layout support.
- Basic SEO, favicon, Open Graph metadata, and GitHub Pages base-path support.

## Development Notes

- Website copy and case-study data are read from `src/data/portfolio.js`.
- `CONTENT.md` is a writing reference only; it does not automatically sync to the site.
- Static assets should be placed under `public/` and referenced with `assetPath()` when used from data files.

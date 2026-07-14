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

## Access password

The password screen uses a salted PBKDF2 hash rather than storing the plain password in source code. GitHub Pages is a static host, so this is a privacy deterrent—not server-side access control. Anyone with access to the published JavaScript can still attempt to bypass or crack it.

To rotate the password, generate replacement public configuration values:

```bash
npm run access:config -- "your-new-password"
```

Add the three generated values as GitHub repository Actions variables named `PORTFOLIO_ACCESS_ITERATIONS`, `PORTFOLIO_ACCESS_SALT`, and `PORTFOLIO_ACCESS_HASH`. The deployment workflow reads them during the next build. If these variables are unset, the checked-in fallback keeps the current password working.

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
- Five selected work categories with full-screen case-study overlays.
- Image and video preview lightbox with thumbnails, keyboard navigation, and mobile layout support.
- Basic SEO, favicon, Open Graph metadata, and GitHub Pages base-path support.

## Development Notes

- Website copy and case-study data are read from `src/data/portfolio.js`.
- `CONTENT.md` is a writing reference only; it does not automatically sync to the site.
- Static assets should be placed under `public/` and referenced with `assetPath()` when used from data files.

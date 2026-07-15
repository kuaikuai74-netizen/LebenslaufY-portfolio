# LebenslaufY Portfolio Agent Guide

## Required startup protocol

Before making any change in this repository, read this file from top to bottom.
Then read the files relevant to the request before editing. Do not rely on an older chat summary as the source of truth.

For every task, begin with:

```bash
git status --short
rg --files -g '!*node_modules*' -g '!dist'
```

Use `rg` to locate the relevant component, data module, and asset before editing. Preserve existing user changes. Do not reset, checkout, or revert unrelated work.

## Project purpose

This is a password-gated, single-page portfolio for AIGC visual designer 应蓉芬. It presents five work categories, a resume, skills, and contact details. The visual system is restrained and editorial: paper-white background, muted gray-green text, thin grid lines, low-saturation motion, and spacious layouts.

The site prioritizes:

1. Original artwork when a visitor opens the full-image viewer.
2. Fast poster/preview loading in grids and case-study overlays.
3. Clear desktop and mobile layouts without text overflow or horizontal page overflow.

Do not turn sections into marketing-style hero cards, add decorative gradients/orbs, or alter the established visual language unless the request explicitly calls for it.

## Stack and commands

- React 18, Vite 5, Tailwind CSS 3.
- JavaScript/JSX only; no router or backend.
- Entry point: `src/main.jsx`.
- Page composition and unlock gate: `src/App.jsx`.
- Global CSS: `src/styles.css`.
- Tailwind design tokens: `tailwind.config.js`.

Run locally:

```bash
npm install
npm run dev -- --host 127.0.0.1
```

Build verification:

```bash
npm run build
```

The default local URL is `http://127.0.0.1:5173/`; Vite may choose another port if it is occupied. Do not edit `dist/` because it is generated.

## Content and component ownership

Read the smallest relevant set of files before changing the feature:

| User request | Read first | Change there when possible |
| --- | --- | --- |
| Page structure or unlock behavior | `src/App.jsx`, `src/components/LockScreen.jsx` | Matching component only |
| Navigation | `src/components/Navbar.jsx`, `src/data/portfolio.js` | Navigation component and `navItems` |
| Portfolio copy, work metadata, resume, skills, contact | `src/data/portfolio.js` | `src/data/portfolio.js` |
| Work case modal, thumbnails, full-image viewer | `src/components/Works.jsx`, matching `src/data/*Images.js` / `*Media.js` | `Works.jsx` and matching data module |
| Main-image gallery | `src/data/productMainImages.js` | That file |
| A+ long-image gallery | `src/data/aplusLongImages.js` | That file |
| AI motion gallery | `src/data/motionMedia.js` | That file |
| Brand gallery | `src/data/brandImages.js` | That file |
| Other works gallery | `src/data/otherMedia.js` | That file |
| Colors, spacing, responsive layout | `tailwind.config.js`, `src/styles.css`, target component | Prefer target component classes; use global CSS only for shared behavior |

`CONTENT.md` is copy reference material only. It does not update the running site. The live source of copy is `src/data/portfolio.js`.

## Asset paths and media rules

Use `assetPath()` for files under `public/` so the site works with the configured Vite base path. Use `r2AssetPath()` only for the existing R2-hosted original-image collections.

The standard media object fields are:

```js
{
  src,          // original file; used by the full-image viewer or original-file link
  displaySrc,   // optimized display video/image when applicable
  previewSrc,   // local lightweight preview/poster
  thumbnailSrc, // optional dedicated thumbnail
  alt,
  aspect,
  type,         // 'video' or 'animation' when applicable
}
```

Important viewer behavior in `src/components/Works.jsx`:

- Static images open `src`, so long images and original images must not be replaced by a low-resolution preview.
- Videos and GIF animations use `displaySrc` in the viewer for browser compatibility and loading speed, while the original file remains linked as `src`.
- Case-study grids use `thumbnailSrc`, then `previewSrc`, then `displaySrc`, then `src` as fallback.
- Do not change this fallback order unless the request is specifically about media behavior.

### Current asset layout

```text
public/portfolio/
  product-main-preview/       # local fast previews for R2 product originals
  aplus-long-preview/         # local fast previews for R2 A+ originals
  aplus-long-display/         # intermediate A+ display images
  motion-media/               # original GIF/MP4 motion files
  motion-media-display/       # compressed MP4 versions for playback
  motion-media-posters/       # JPG video/GIF thumbnails
  other/                      # original other-work media
  other-display/              # compressed other-work videos
  other-posters/              # thumbnails for other-work media
  covers/                     # selected-work SVG cover art
```

When adding a new AI motion item:

1. Keep the original GIF/MP4 in `public/portfolio/motion-media/`.
2. Add a compressed MP4 with the same base name to `motion-media-display/`.
3. Add a JPG poster with the same base name to `motion-media-posters/`.
4. Add one entry in `src/data/motionMedia.js`.
5. Keep GIF items before video items; within the same type, keep the intended numbered order.

When adding a long image, preserve its original `src` and give the gallery a smaller preview/thumbnail. Never use a thumbnail as the full-image source merely to make it load faster.

Avoid changing source media filenames after they are referenced by data files. Prefer stable ASCII filenames such as `motion-media-11.mp4`.

## Interaction and accessibility constraints

The works experience includes a case-study overlay and a portal-rendered lightbox. Preserve these behaviors when working in `src/components/Works.jsx`:

- Escape closes the current modal or viewer.
- Left and right arrows navigate the viewer.
- Focus stays inside the active dialog and returns to the triggering control when it closes.
- The page scroll is locked while a case study is open.
- The modal and full-image viewer must remain usable on narrow mobile screens.

Do not add numeric suffixes to visible work titles or image titles. The project deliberately strips trailing numbers from full-viewer titles; counters are shown separately in the viewer UI.

## Performance rules

- Keep original artwork available for full viewing, but use previews/posters in gallery grids.
- Use `loading="lazy"` for non-initial media and `decoding="async"` for images where the surrounding pattern already uses them.
- Do not eagerly render every original image/video in a large gallery.
- Preserve the existing progressive image behavior and the 24-item initial media limit unless the task requires a change.
- Do not embed large media as base64 or import it into the JavaScript bundle.

## Change and verification workflow

Make the smallest change that directly solves the request. Match existing code style, and avoid unrelated refactors.

Before editing, state the concrete success criteria in the task update. After editing:

1. Run `npm run build` for every code, data, or asset change.
2. For UI changes, open the local site and verify the affected desktop and narrow/mobile layout.
3. For media changes, verify that the gallery poster appears, the lightbox opens the intended original/display media, and the browser has no broken asset request.
4. Report files changed and any verification that could not be performed.

Do not claim visual verification without actually checking the browser. If the dev server is needed and not running, start it on an available local port and report the URL.

## Security and deployment notes

The access screen is a client-side privacy deterrent, not real server-side authentication. Its public PBKDF2 configuration is generated by:

```bash
npm run access:config -- "new-password"
```

Read `src/security/portfolioAccess.js` and `.env.example` before changing the access flow. Do not expose passwords in source, logs, commits, or user-facing responses.

## Repository hygiene

- Use `apply_patch` for manual code and text edits.
- Keep changes ASCII unless existing content requires Chinese or another Unicode character.
- Never modify generated `dist/`, `node_modules/`, or unrelated files.
- Treat an existing dirty worktree as user work unless it is clearly part of the current task.
- There are no automated tests; production build plus targeted browser verification is the required baseline.

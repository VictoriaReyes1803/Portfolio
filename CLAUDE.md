# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server with HMR
npm run build     # Production build → dist/
npm run preview   # Serve the dist/ build locally
npm run lint      # ESLint (flat config, v9)
```

No test framework is configured.

## Architecture

Single-page React 19 app built with Vite. All content is hardcoded in JSX — no CMS, no API calls, no routing library. The Vercel deployment (`vercel.json`) rewrites all routes to `index.html`.

**Entry flow:** `index.html` → `src/main.jsx` → `src/App.jsx`

`App.jsx` composes all sections in a fixed order: `Navbar → Hero → About → Projects → Skills → Experience → Contact → Footer`. Section `id` attributes match the `href` anchors in `Navbar` for smooth-scroll navigation.

## Content

All portfolio data lives directly inside the components as inline arrays/objects — not in a separate data layer:

| Content | Location |
|---|---|
| Projects (5) | `src/components/Projects.jsx` — `projects` array |
| Skills (4 categories) | `src/components/Skills.jsx` — `skills` array |
| Experience (4 entries) | `src/components/Experience.jsx` — `experience` array |
| About pillars (3) | `src/components/About.jsx` |
| Contact links | `src/components/Contact.jsx` |
| Nav links | `src/components/Navbar.jsx` |

To update content, edit the data objects at the top of the relevant component file.

## Styling

- **Tailwind CSS v4** via `@tailwindcss/vite` plugin — no `tailwind.config.js`; configuration is inlined or uses defaults.
- Dark-mode-first design: `slate-950`/`slate-900` backgrounds, cyan/blue/violet accents.
- Shared utility classes defined in `src/index.css`: `.card-glass`, `.glow-cyan`, `.glow-cyan-hover`, `.text-gradient-cyan`.
- Fonts: Inter (sans) and JetBrains Mono (mono) loaded from Google Fonts in `index.html`.

## Animations

Every section uses **Framer Motion** with a consistent `fadeUp` pattern — `initial: { opacity: 0, y: 20 }` → `animate/whileInView: { opacity: 1, y: 0 }`, triggered once on scroll entry. New sections or cards should follow this same pattern. The Navbar uses `AnimatePresence` for the mobile menu.

## Reusable Components

- `SectionTitle` — eyebrow label + heading + description with built-in animation; use it for every section header.
- `ProjectCard` — accent bar + title + description + highlights list + stack badges.
- `SkillBlock` — skill category with a color theme prop.

## Static Assets

- `public/` — CV PDF and SVG icons served as-is.
- `src/assets/` — hero image imported directly in JSX.

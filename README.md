# Jade's Portfolio

## Overview

My personal portfolio website — a single-page site introducing who I am, with my experience, projects, technical skills, and how to get in touch.

The site is one scrolling page with these sections: Home, About Me, Experience, Projects, Technical Skills, and Contact.

All content lives in a single file, [`config/portfolio.ts`](config/portfolio.ts), so updating copy never means touching component code.

## Tech Stack

- **[Next.js 14](https://nextjs.org/)** (App Router) + **[React 18](https://react.dev/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Tailwind CSS 3](https://tailwindcss.com/)** — custom `navy` and `cyber` color palette
- **[Framer Motion](https://www.framer.com/motion/)** — scroll and entrance animations
- **[`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)** — Poppins
- **[`next/image`](https://nextjs.org/docs/app/api-reference/components/image)** — optimized headshot and logos

## Getting Started

Requires [Node.js](https://nodejs.org/) 18.17 or newer.

```bash
npm install
npm run dev      # http://localhost:3000
```

The dev server hot-reloads, so saved changes appear immediately in the browser.

```bash
npm run build    # production build
npm run start    # serve the production build locally
npm run lint     # ESLint
```

Run `npm run build` before pushing — it catches TypeScript errors that `npm run dev` can miss.

## Project Structure

```
app/
  layout.tsx        Page metadata (browser tab title, Google/link-preview text)
  page.tsx          Section order on the page + footer
  globals.css       Global styles and the .glass / .chip utility classes
components/         One file per section (Hero, AboutMe, Experience, ...)
config/
  portfolio.ts      >>> ALL CONTENT LIVES HERE <<<
public/             Images, logos, and the resume PDF
tailwind.config.ts  Colors, fonts, and shadows
```

## Customizing

Almost everything is edited in [`config/portfolio.ts`](config/portfolio.ts).

### Updating the resume

1. Drop the new PDF into [`public/`](public/).
2. Set `personal.resume` to the exact filename, including spaces and capitalization:
   ```ts
   resume: "Resume - Jade Yang.pdf",
   ```

Keeping the same filename means step 2 can be skipped entirely — just overwrite the old file.

### Adding a job or project

Add an entry to the `experience` or `projects` array. Experience entries appear in the order listed, so newest goes first. For a current role, set `current: true` to show the "Current" badge.

For a company logo: put the image in [`public/`](public/) and reference it with a leading slash, e.g. `logo: "/autonomous_cyber_logo.jpg"`. The filename must match exactly — `.jpg` and `.jpeg` are not interchangeable, and a mismatch renders a broken image.

### Updating skills

The `skills` object drives the Technical Skills section. It has four groups: `cloudInfrastructure`, `tools`, `programming`, and `languages`. Adding a string to any array adds a chip.

To add, rename, or remove a whole group, edit both `config/portfolio.ts` (the `PortfolioConfig` interface and the object) and [`components/Skills.tsx`](components/Skills.tsx), which controls the group titles and their order.

### Adding certifications

There is no certifications section yet. The simplest approach is a new skills group:

1. Add `certifications: string[]` to the `skills` block of the `PortfolioConfig` interface.
2. Add the matching array of certification names to the `skills` object.
3. Add one line to [`components/Skills.tsx`](components/Skills.tsx):
   ```tsx
   <SkillGroup title="Certifications" items={skills.certifications} delay={0.32} />
   ```

For a standalone section with dates and issuers instead, copy [`components/Projects.tsx`](components/Projects.tsx) as a starting point and add it to [`app/page.tsx`](app/page.tsx).

### Changing the theme

Colors, fonts, and shadows are defined in [`tailwind.config.ts`](tailwind.config.ts):

- `navy` — page background shades, darkest at `navy-950`
- `cyber.glow` — the light blue accent on headings, chips, and hover states
- `cyber.cyan` / `cyber.blue` — secondary accents and gradients
- `fontFamily.sans` — currently Poppins, also imported in [`app/layout.tsx`](app/layout.tsx)

Changing the accent color means updating `cyber.glow` **and** the `boxShadow.glow` values below it, since those hardcode the same color as `rgba`. The animated background is drawn in [`components/CyberMapBackground.tsx`](components/CyberMapBackground.tsx) and has its own colors.

### Updating the intro and metadata

`personal.shortIntro` is the paragraph under the name on the homepage; `personal.aboutMe` is the About Me bio, where `\n\n` separates paragraphs.

When the job title changes, also update [`app/layout.tsx`](app/layout.tsx) — its `title` and `description` control the browser tab, Google results, and link previews.

## Deployment

Deployed on [Vercel](https://vercel.com/), connected to the [GitHub repo](https://github.com/luvjadey/jade-portfolio). Every push to `main` deploys to production, and pull requests get their own preview URLs. Builds, image optimization, and HTTPS are handled automatically — no environment variables required.

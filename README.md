# Jade's Portfolio

My personal portfolio website — a single-page site that introduces who I am and showcases my experience, projects, technical skills, and how to get in touch. Built as a clean, modern, navy-themed experience with a cyber-inspired background.

## What's on the site

- **Home** — short intro + headshot + Connect With Me / GitHub / Resume buttons
- **About Me** — bio and current status
- **Experience** — roles with company logos and dates
- **Projects** — selected cybersecurity and data engineering projects
- **Technical Skills** — security ops, tools, programming, and languages
- **Contact** — LinkedIn

All content lives in a single source of truth at [`config/portfolio.ts`](config/portfolio.ts), so updates to copy, jobs, or projects only require editing one file.

## Languages & Tools

**Languages**
- TypeScript
- TSX / JSX
- CSS
- HTML

**Framework & Libraries**
- [Next.js 14](https://nextjs.org/) (App Router)
- [React 18](https://react.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/) (with custom `navy` and `cyber` palette, glassmorphism utilities)
- [Framer Motion](https://www.framer.com/motion/) — scroll and entrance animations
- [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) — Poppins via Google Fonts
- [`next/image`](https://nextjs.org/docs/app/api-reference/components/image) — optimized headshot and company logos

**Build & Tooling**
- Node.js + npm
- PostCSS + Autoprefixer
- TypeScript compiler
- ESLint (via `next lint`)

**Other**
- Native browser Canvas / `requestAnimationFrame` and CSS keyframes for the animated cyber background (drifting glow orbs + cursor-follow glow + laser scan lines)

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
npm run lint       # ESLint via next lint
```

## Deployment

The site is deployed on **[Vercel](https://vercel.com/)**, which is the natural host for Next.js apps.

- The GitHub repo ([luvjadey/jade-portfolio](https://github.com/luvjadey/jade-portfolio)) is connected to a Vercel project
- Every push to `main` triggers an automatic production deploy
- Pull requests get preview deployments at unique URLs
- Vercel handles Next.js builds, image optimization, edge caching, and HTTPS automatically — no manual config required beyond the defaults

No environment variables are required for this site.

## Contact

Questions or want to connect? Find me on LinkedIn or via email through the site.

# Jade's Portfolio

My personal portfolio website — a single-page site introducing who I am, with my experience, projects, technical skills, and how to get in touch.

Built with Next.js 14, React 18, Tailwind CSS, and Framer Motion.

## Updating content

All content lives in one file: [`config/portfolio.ts`](config/portfolio.ts). Editing copy, adding a job, or adding a project only requires changing that file.

Images and the resume PDF go in [`public/`](public/) and are referenced by path from the same config.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # ESLint
```

## Deployment

Deployed on [Vercel](https://vercel.com/). Every push to `main` deploys to production; pull requests get preview URLs. No environment variables required.

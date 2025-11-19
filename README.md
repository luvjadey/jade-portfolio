# Jade's Portfolio

My personal portfolio website built with Next.js. It showcases my experience, education, leadership roles, and skills in a clean, modern interface with an animated cyber map background.

## What's This?

This is a single-page portfolio site that displays:
- My background and elevator pitch
- Education details from ASU
- Work experience (FBI, Hacking for Defense, etc.)
- Leadership positions (ASU Club Tennis, USTA)
- Technical skills and certifications

Everything is managed through a single config file (`config/portfolio.ts`), so updating content is super easy.

## Tech Stack

- **Next.js 14** - React framework with server-side rendering
- **TypeScript** - For type safety
- **Tailwind CSS** - Styling (with custom wine-red accent colors)
- **Framer Motion** - Smooth animations and transitions
- **Canvas API** - For that animated cyber map background

## Getting Started

### Prerequisites

You'll need Node.js installed (I'm using version 20+). If you don't have it, grab it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repo (or download it)
2. Install dependencies:
   ```bash
   npm install
   ```

3. Add your headshot image:
   - Place it in `public/images/` 
   - Name it `Headshot.jpg` (or update the path in `config/portfolio.ts`)
   - Square format works best, 400x400px or larger

4. Run the dev server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Customizing Content

All the content lives in `config/portfolio.ts`. Just edit that file to update:
- Personal info (name, email, LinkedIn, etc.)
- Education details
- Work experience entries
- Leadership roles
- Skills and certifications

The site will automatically reflect your changes when you save.

## Building for Production

When you're ready to deploy:

```bash
npm run build
npm start
```

This creates an optimized production build in the `.next` folder.

## Deployment

I've deployed this to Vercel (it's super easy - just connect your GitHub repo), but it'll work on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- Any Node.js hosting service

## Features

- Fully responsive design (works on mobile, tablet, desktop)
- Animated cyber map background with connecting nodes
- Smooth scroll navigation
- SEO optimized
- Fast loading times
- Clean, professional design

## Project Structure

```
├── app/              # Next.js app directory (pages, layout, styles)
├── components/       # React components (Hero, Experience, Skills, etc.)
├── config/          # Portfolio content configuration
├── public/          # Static assets (images)
└── package.json     # Dependencies and scripts
```

## Notes

- The cyber map background is a canvas animation that represents network connections
- All styling uses Tailwind with custom colors defined in `tailwind.config.ts`
- The site is fully static after build, so it's fast and cheap to host

## License

This is my personal portfolio, so feel free to use it as inspiration for your own, but please don't copy it directly.

---

Questions or want to connect? Check out my LinkedIn in the portfolio or reach out via email!

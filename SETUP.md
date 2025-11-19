# Quick Setup Guide

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Add Your Headshot

1. Place your headshot image in the `public/images/` directory
2. Name it `headshot.jpg` (or update the path in `config/portfolio.ts`)
3. Recommended size: 400x400px or larger (square format works best)

## Step 3: Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your portfolio!

## Step 4: Customize Your Content

Edit `config/portfolio.ts` to update:
- Personal information
- Education details
- Work experience
- Leadership roles
- Skills

All changes will be reflected immediately in the development server.

## Step 5: Build for Production

```bash
npm run build
npm start
```

## Deploy

This Next.js app can be deployed to:
- **Vercel** (recommended) - Just connect your GitHub repo
- **Netlify** - Connect your repo or drag & drop the build folder
- **Any Node.js hosting** - Run `npm run build` and deploy the `.next` folder

## Notes

- The cyber map background is animated and represents a network visualization
- All styling uses Tailwind CSS with custom wine-red accent colors
- The site is fully responsive and SEO optimized
- All content is managed through the config file for easy updates


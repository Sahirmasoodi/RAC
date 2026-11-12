# RAC — Mustafabad Sports Club

A premium, responsive sports-club website built with **React, Vite, Tailwind CSS v4, Framer Motion and Lucide React**. The supplied RAC crest is stored in `src/assets/rac-logo.jpg`.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build` (output: `dist/`).

## Project structure

```text
rac-sports-club/
├── public/
│   └── images/
│       ├── cricket/           # Cricket team and match photography
│       ├── football/          # Football team and match photography
│       ├── gallery/           # Gallery images and current demo artwork
│       └── players/           # Individual player portraits
├── src/
│   ├── app/
│   │   └── App.jsx            # Homepage composition and global sections
│   ├── assets/
│   │   └── rac-logo.jpg       # Official supplied club crest
│   ├── components/
│   │   ├── layout/            # Site-wide navigation and layout
│   │   └── ui/                # Reusable UI components
│   ├── data/
│   │   ├── football.js        # Football roster and supplied match results
│   │   └── site.js            # Gallery, cricket demo data and achievements
│   ├── features/
│   │   ├── club/              # About and achievements sections
│   │   ├── contact/           # Web3Forms contact form
│   │   ├── cricket/           # Cricket team section
│   │   ├── football/          # Football squad and match centre
│   │   └── gallery/           # Filterable gallery
│   ├── lib/
│   │   └── footballStats.js   # Derived match statistics
│   ├── index.css              # Tailwind import and design tokens only
│   └── main.jsx               # React entry point
├── index.html
├── package.json
└── vite.config.js
```

## Styling

All component styling uses Tailwind utility classes. Tailwind CSS v4 is integrated through `@tailwindcss/vite`. There is no hand-written component stylesheet or vanilla CSS layout system. `src/index.css` only imports Tailwind and defines the brand design tokens.

Brand tokens:

- Charcoal: `#292B29`
- Sand: `#D9C9AD`
- Olive: `#B5C86B`
- Paper: `#F3F0E8`

## Add or update football players

1. Add the portrait to `public/images/players/`, for example `safaan.jpg`.
2. Update the corresponding `img` value in `src/data/football.js` to `/images/players/safaan.jpg`.
3. Add or update the player record in that file. The squad filters and player cards read from this one data source.
4. Commit and push. Your hosting provider will include the photo in its next deployment.

If a portrait is missing or its path is incorrect, the player card automatically shows the player's initials instead of a broken image.

## Add gallery images

1. Copy images into `public/images/gallery/`.
2. Add an entry to `galleryImages` in `src/data/site.js`:

```js
{
  src: '/images/gallery/final-day.jpg',
  category: 'Football',
  alt: 'The team after the final',
}
```

3. Commit and push. The gallery will update on the next deployment.

The current SVG gallery artwork is illustrative demo content. Replace it with real club photos when available. There is intentionally no browser upload panel; the gallery is managed through the repository as requested.

## Cricket demo data

`cricketPlayers` and `cricketMatches` in `src/data/site.js` contain clearly labelled sample records to preview the design. They are not official player profiles or match records. Replace them with confirmed details before publishing. `upcomingMatches` starts empty until actual fixtures are supplied.

## Achievements

The `achievements` array in `src/data/site.js` contains placeholder/demo entries. Replace them with confirmed club milestones, tournament honours and awards. No historical claims are presented as facts.

## Contact form

The form posts to Web3Forms using the access key supplied in the project brief. It includes required fields, disabled/loading state, success feedback, error feedback and form reset after successful submission. Confirm that the key is intended for public client-side use and review submissions in your Web3Forms account.

## Deployment

Connect the repository to Vercel or Netlify. Use:

- Build command: `npm run build`
- Output directory: `dist`

For GitHub Pages deployed under a repository subpath, configure the appropriate Vite `base` value in `vite.config.js`.

## Content integrity

The football player roster and ten past football match results were provided by the club and are included as supplied. Cricket profiles, cricket scorecards, gallery artwork and achievement entries are demo placeholders and should be replaced with verified club information.

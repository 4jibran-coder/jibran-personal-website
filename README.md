# Jibran Salam — personal website

A colorful, photo-led personal website built with Next.js, TypeScript, and Tailwind CSS. A compact cover leads to separate Interests, Career, School, and Photos pages. Click a card to see its story and additional pictures. Six photographs were extracted from the supplied video, cropped to remove black bars, and compressed. No stock photos, invented film favorites, or fabricated articles.

## Run it

Install Node.js 22+ and pnpm. In this folder, run:

```sh
pnpm install
pnpm dev
```

Open http://localhost:3000. If macOS reports too many file watchers, use `WATCHPACK_POLLING=true pnpm dev`. Stop with Ctrl+C.

For checks and the production version:

```sh
pnpm lint
pnpm typecheck
pnpm build
```

`out/` contains the complete static website. `next start` is not used for this static-export configuration; preview `out/` with a static HTTP server instead. Do not double-click `out/index.html`: asset paths expect HTTP hosting.

## Edit your content

Open a file below in a text editor, edit the text between quotes, and save. Keep commas and brackets intact. Use double quotes around sentences containing apostrophes, or escape an apostrophe with a backslash when using single quotes.

| What to change | File |
| --- | --- |
| Name, intro, story, footer, email, LinkedIn, résumé | `data/profile.ts` |
| Career introduction and TMT interests | `data/career.ts` |
| Roles, dates, organizations, descriptions | `data/experience.ts` |
| Questions and why you care about them | `data/questions.ts` |
| Hobbies, chess, history, film shelf | `data/interests.ts` |
| Scouting, student government, Model UN | `data/leadership.ts` |
| Visual cards, photo paths, captions, colors, and click-open stories | `data/boards.ts` |
| Langley clubs and school groups | `data/boards.ts` (`langleyClubs`, `rutgersCards`, `langleyCards`) |
| Layout and section headings | `app/page.tsx` |
| Colors, fonts, spacing, responsive layout | `app/globals.css` |

Add or remove an experience by copying or deleting its entire `{ ... }` entry in `data/experience.ts`.

## Add photos and travel entries

Start with `PHOTO_GUIDE.md`: it lists every frame and its exact filename. Place JPEGs from your phone in `public/images/`, rebuild, and refresh. The site detects existing files and replaces the frames automatically. No browser uploads or cloud storage are involved.

Edit `data/boards.ts` for titles, color, image paths, stories, and additional frames inside a card. Add an entry to `albumCards` for another photo-album item. The older `data/photos.ts` is retained for reference; the redesigned pages use `data/boards.ts`.

## Add favorite films

In `data/interests.ts`, replace the entries in `films`. Each accepts `title`, `year`, `genre`, `rating`, `thought`, and `poster`. Film details open inside the Film tile. Fill its three image frames using `favorite-film-1.jpg`, `favorite-film-2.jpg`, and `favorite-film-3.jpg`, or change those paths in `data/boards.ts`. The old `poster` field is retained but does not drive the new frame layout. Add or remove whole objects to change the number of films. The current three entries are explicitly unfinished, not recommendations attributed to you.

## School and clubs

The School tab groups Rutgers, Langley High School, and community activities. Add names to `langleyClubs` in `data/boards.ts`, for example `['Your club name', 'Another club']`. Fill the school and club photo frames using `PHOTO_GUIDE.md`. Student government, Model UN, scouting, and community service are on this page.

Notebook and article routes have been removed from the website. Existing Markdown drafts are retained in `content/notes/` but are not published or linked.

## Change links and résumé

In `data/profile.ts`, fill `email` with your email address (without `mailto:`) and `linkedIn` with the complete HTTPS URL. Empty fields hide the buttons. There is no contact form or database.

For a résumé, put your PDF at `public/Jibran-Salam-Resume.pdf`, then set `resume` to `/Jibran-Salam-Resume.pdf`. The button opens a new tab. Keep it empty until the real PDF exists.

## Deploy to Vercel

This project is prepared for Vercel; no account connection or deployment has been made.

1. Complete the critical items in `CONTENT_TODO.md` and review the site in your own voice.
2. Upload this project’s source to a Git repository, excluding `node_modules`, `.next`, and `out` (already in `.gitignore`).
3. Import the repository in Vercel. Select the folder containing this `package.json` as the root.
4. Use the Next.js preset, `pnpm install`, build command `pnpm build`, and output directory `.next` (Vercel handles the static export). These build/output settings are also in `vercel.json`.
5. Deploy and test the resulting URL on your phone. Later commits trigger another build.

Alternatively, with the official Vercel CLI installed and your account signed in, run `vercel` from this folder for a preview and `vercel --prod` when ready. No secrets or environment variables are required.

## Design and accessibility

Warm paper, colorful photo cards, Georgia editorial type, and a dark film tile. System fonts avoid external font requests. Photos reserve space and lazy-load below the fold. Navigation, native disclosures, native dialogs, visible focus, skip link, semantic headings, alt text, and reduced-motion support are included. Animation is limited to small image and decorative hover effects.

See `PROCESS_NOTES.md` for actual decisions and checks. It is a record to help you write your own application reflection, not a reflection written on your behalf.

## GitHub Pages (alongside Vercel)

The public repository is `4jibran-coder/jibran-personal-website`. In GitHub, open **Settings → Pages → Build and deployment → Source → GitHub Actions**. Push to `main`, or open **Actions → Deploy GitHub Pages → Run workflow**. The workflow installs dependencies, exports the site, and publishes `out/`.

The Pages URL is https://4jibran-coder.github.io/jibran-personal-website/ . The workflow alone sets `NEXT_PUBLIC_BASE_PATH=/jibran-personal-website`. Leave that variable unset on Vercel: its existing `.next` output setting remains unchanged. Next Link prefixes internal links, and `lib/asset-path.ts` prefixes public images for Pages.

Skills are in `app/skills/page.tsx`; project summaries and expanded details are in `data/projects.ts`. Projects use native keyboard-accessible disclosures rather than fabricated external reports.

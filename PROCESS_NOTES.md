# Actual build notes for Jibran

These are process records, not an application reflection attributed to you.

## Input and personal judgment

You supplied a detailed brief, factual background, the desired voice, your interests, and a personal video. You prioritized being understandable and memorable over maximizing résumé density. Film noir, music, chess, history, travel, scouting, languages, mangoes, and Bob Ross all came from your brief.

The exact editorial copy, captions, photo selection, and visual composition were drafted by AI. You have not yet personally approved or rewritten them. Unknown contact details, favorite films, history topics, travel dates, and memories remain blank or explicit placeholders.

## Major decisions

- One main editorial page, with optional individual Markdown note pages.
- Ivory background, burgundy accent, charcoal curiosity section, serif headlines, restrained system sans-serif labels. Georgia and Arial avoid font downloads.
- A large name and a slightly rotated real stadium photograph establish a personal tone immediately.
- Government → finance appears as a story, not a list of accomplishments.
- Advisor / investor / future operator is a subtle experience framework. Amazon remains incoming, never a completed job.
- Finance details are expandable. Questions precede experiences so uncertainty and learning are visible.
- Large film and hiking cards give hobbies substantial space. Music, chess, history, languages, GeoGuessr, mangoes, and Bob Ross are allowed to be interests without professional justification.
- The photo journal uses real supplied material. No stock travel photos or guessed location labels were added.
- No fabricated articles. Draft Markdown notes stay off the public page; the notebook has a deliberate empty state.
- Contact and résumé buttons remain hidden when their destinations are missing. No dead placeholder links.
- No phone, exact address, proprietary investment details, fabricated market views, or unrelated third-party material.

## AI assistance

AI organized the content, wrote the source, extracted and cropped stills, drafted editable copy, implemented responsive layouts and interactions, and ran checks. The human finishing work is choosing personal favorites, adding specific memories, confirming facts, and making the prose sound like you.

## Technical work and challenges

- The workspace was empty; no existing app was overwritten.
- Node was available through the bundled runtime rather than the usual shell path. Dependencies were installed after network permission was granted.
- The CapCut video binary could not run, and Apple developer tools were unavailable. A packaged FFmpeg binary from the Python package registry extracted the video frames successfully.
- Contact sheets were inspected to avoid selecting blurry transitions or mislabeling unrelated frames. Six stills were selected. Embedded video resolution limits their quality.
- Next.js development file watchers exceeded the local limit; polling mode resolved the issue. A stale preview was restarted before inspection.
- Direct headless browser startup was unavailable in the sandbox. The connected in-app browser was used to inspect the site and check responsive dimensions and interactions instead.
- Next.js static export keeps deployment simple. No database, authentication, third-party tracking, or API keys are required.
- No deployment was made. The project includes Vercel configuration and instructions.

## Alternatives considered

A résumé-first portfolio would have repeated information reviewers already have, so experience is secondary to the story and interests. A dark noir theme throughout would have made the site colder and more theatrical, so dark color is limited to two areas. Stock or generated travel imagery would have been less personal than the supplied video. A complicated CMS would add unnecessary maintenance, so content uses small TypeScript data files and Markdown.

## Five audits

1. **Generic language:** Reviewed the rendered copy for corporate clichés. No “passionate,” “results-driven,” “synergy,” or generic startup positioning. First-person prose remains a draft for your review.
2. **Résumé balance:** Reduced detailed numbers and résumé bullets; retained enough context for credibility. Interests, community, curiosity, and the photo journal occupy substantial page space.
3. **Personal specificity:** Retained the government origin story, incoming Amazon question, film noir, Rutgers orchestra, approximate chess rating, classical history, RV travel, languages, mangoes, and Bob Ross.
4. **Design:** Inspected desktop and mobile views, intentional photo crops, layout at 375/390/430/768/1024/1440 px, and readable section hierarchy. No horizontal overflow at those widths.
5. **Technical:** Production build and TypeScript passed. A minor lint configuration warning was fixed, then checks were rerun. Browser checks found no broken images or recorded errors/warnings. Verified expandable questions, mobile navigation closing after selection, lightbox opening, and Escape dismissal. A native dialog supplies focus containment; native details provide keyboard interaction. Reduced-motion CSS disables transitions and smooth scrolling. Lighthouse scores were not measured.

## Before your reflection

Personally revisit the design and copy, record what you actually change, and describe those choices. The most useful next contributions are real movie picks, one or two specific photo memories, and your own version of the introduction.

## Revision 2 — visual pages, following your critique

You asked for substantially less text, more photos and placeholders, more color, and a cover page leading to separate areas. You specifically preferred the original section 04, which guided the revision.

- Replaced the long homepage with a compact collage cover.
- Created actual routes for Interests, Achievements, Photos, and Notebook. Persistent navigation marks the active page.
- Moved biography, professional explanations, film choices, and additional photo frames into keyboard-accessible native dialogs. Notebook explanations stay collapsed until selected.
- Introduced lavender, orange, peach, sage, yellow, blue, and pink cards while retaining the editorial serif and the film-noir tile.
- Added named photo slots for almost every interest, role, trip, and community activity. Files are checked during rendering/build so missing photographs produce frames without failed network requests.
- Included an actual painting from the official Bob Ross UK gallery and credited the source. It is not presented as a personal painting or a stated favorite.
- Kept original source data rather than discarding your longer background. The new boards are configured in `data/boards.ts`; the old single-page photo map is retained as a reference but no longer drives the UI.
- Added `PHOTO_GUIDE.md` with exact filenames and instructions. Placeholder plus signs are not fake upload buttons.
- Validation: lint, typecheck, and production build pass. Responsive and click/navigation checks are performed against the updated production export.

Revision 2 browser checks: all five primary pages passed overflow and broken-image checks at 375, 390, 430, 768, 1024, and 1440 px. Verified actual navigation, music and film dialogs (including three film frames), incoming Amazon status, About dialog, Escape dismissal, and mobile card layouts. No browser errors or warnings were recorded. A small chess-label overlap found visually on mobile was corrected.

## Revision 3 — School tab

Following your request, Amazon now precedes NJ Treasury. Achievements contains only work experience. A new School page groups Rutgers and its clubs/student government, Langley High School and Model UN/club slots, and scouting/community service. Langley clubs remain an editable empty list rather than invented activities. An official Rutgers logo is included without changing the artwork. Notebook navigation and published note routes were removed; draft content remains in source for safekeeping. The About link now points to School, and mobile navigation accommodates all five tabs.

## Revision 4 — Career and navigation

Renamed Achievements to Career, including the route, cover link, page metadata, and navigation. The new introduction states Jibran’s user-specified interest in technology, media, and telecommunications investment banking, followed by the experience cards. Amazon remains first and clearly marked incoming for Summer 2027. Swapped School and Interests in the navigation: Cover, School, Career, Interests, Photos. Rechecked the existing painting against the official Bob Ross UK gallery and retained its source credit; no generated image was substituted. The career introduction is editable in `data/career.ts`.


## Browser comments revision
Applied all 30 comments: career paragraph and hedge fund interactions, removal of career questions, school titles/location/RTWS card, film ratings and text, requested frame removals, cover captions, and seven sourced images. Verified production build, ESLint, and TypeScript. Checked phone (390 px) and desktop (1440 px) layouts and opening/closing tile dialogs. Image provenance is in PHOTO_GUIDE.md and linked in dialogs.

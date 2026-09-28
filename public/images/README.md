# Updated photo system

See `../../PHOTO_GUIDE.md` for the new photo frames and exact filenames. The redesigned pages use `data/boards.ts`. The original extraction notes below remain useful for the six video stills.

# Photo guide

The six current JPEGs come from `DSP Video Jibran.mov`. The original video remains untouched and is not shipped with the website. Black letterbox bars were removed; images were resized and compressed. No AI face generation or identity editing was used. Locations/dates were not inferred.

| Filename | Current role | Suggested replacement |
| --- | --- | --- |
| `portrait.jpg` | Hero, stadium photo (~46 s) | 1400×1050 landscape; face on left or center, room around head |
| `mountains.jpg` | Hiking card and journal (~54 s) | 1200×1600 portrait; landscape with clear focal point |
| `travel-childhood.jpg` | Journal, river/bridge (~10 s) | 1400×1000 landscape; subject within central area |
| `waterside.jpg` | Journal, camel/pyramids (~14 s); legacy extraction name | 1200×1500 portrait; keep subject and background together |
| `friends.jpg` | Community (~26 s) | 1400×1050 landscape; group within frame |
| `palms.jpg` | Journal (~42 s) | 1000×1600 portrait |
| `violin.jpg` | Optional configured slot | 1200×1500 portrait; instrument or you performing |

Prefer originals to video screenshots. JPEG or WebP are suitable for photos; aim for 150–350 KB per image when practical. Do not upscale a small original. Images are cropped with `object-fit: cover` in cards; the lightbox shows the complete image. Set `position` in `data/photos.ts` (for example `"40% center"`) if the focal point needs adjustment.

Drag replacements here using the same names, then refresh and rebuild. For new entries, add a record in `data/photos.ts` and its key to `journalPhotos`. Suggested names for future additions: `rutgers.jpg`, `dc.jpg`, `treasury.jpg`, `scouting.jpg`, `eagle-project.jpg`, `model-un.jpg`, `orchestra.jpg`, `piano.jpg`, `roadtrip.jpg`, `morocco.jpg`, `spain.jpg`, `italy.jpg`, `tuscany.jpg`. These optional images are not required for the site to work.

Every photo record has `src`, `alt`, `title`, `location`, `year`, and `memory`. Keep unknown details blank. Write alt text describing what is visible; put your personal memory in `memory`.

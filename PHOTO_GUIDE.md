# Fill the photo frames

Send your phone photos to your computer (AirDrop is fine), export them as JPEG, and put them in `public/images/` using the names below. Rebuild with `pnpm build` and refresh the preview. Photos automatically replace the colored frames; no layout editing is needed.

**The plus sign is a placeholder, not an upload control.** Nothing is uploaded or stored in the browser. Use the project folder or send the pictures in this chat for help placing them.

Landscape shots around 1400 × 1000 work well for most cards. Portrait images also work; the cards crop them, while the click-open viewer shows the complete image. JPEG or WebP works; if using WebP, change the extension in `data/boards.ts`. Convert HEIC from your phone before adding it. Use your own photographs for personal experiences.

## Cover

- `portrait.jpg` — existing stadium photo; replace with a favorite portrait if you prefer.
- `rutgers.jpg` — Rutgers/campus/you at school. Appears on the cover and Career.

## Interests

| Frame | Filename |
| --- | --- |
| Film tile | `film.jpg` |
| Film shelf images (inside the tile) | `favorite-film-1.jpg`, `favorite-film-2.jpg`, `favorite-film-3.jpg` |
| Violin / main music tile | `violin.jpg` |
| More music pictures | `orchestra.jpg`, `piano.jpg`, `guitar.jpg` |
| Chess | `chess.jpg` |
| History | `history.jpg` |
| History reading | `history-book.jpg` |
| More hiking pictures | `hiking.jpg`, `hiking-friends.jpg` |
| Road-trip tile | `roadtrip.jpg` |
| RV and stops | `rv.jpg`, `roadtrip-stop.jpg` |
| GeoGuessr or a map | `geoguessr.jpg` |
| Mangoes | `mangoes.jpg` |

## Career

| Frame | Filename |
| --- | --- |
| NJ Treasury | `treasury.jpg` |
| Amazon (incoming, Summer 2027) | `amazon.jpg` |
| Roadmap Advisors | `roadmap.jpg` |
| Troy Tutors | `troy-tutors.jpg` |
| Congress | `congress.jpg` |
| Scouting | `scouting.jpg` |
| Eagle project / jamboree (inside Scouting) | `eagle-project.jpg`, `jamboree.jpg` |
| Student government | `student-government.jpg` |
| Model UN | `model-un.jpg` |
| Rutgers | `rutgers.jpg` |
| Road to Wall Street (inside Rutgers) | `road-to-wall-street.jpg` |
| Community service | `volunteering.jpg` |

## Photo album

Add `morocco.jpg`, `spain.jpg`, `italy.jpg`, `tuscany.jpg`, `rv.jpg`, `campus.jpg`, and `home.jpg`.

The video stills already fill `mountains.jpg`, `travel-childhood.jpg`, `friends.jpg`, `palms.jpg`, and `waterside.jpg`. Their locations were not guessed. Edit an album card’s `detail` in `data/boards.ts` to add a memory that appears when clicked.

## Add more frames or change captions

All visible cards and extra frames live in `data/boards.ts`. Each card has a title, short label, color, image path, alt text, and detail text. The detail text only appears after clicking. Add entries to `frames` for more photos inside a card. Add an object to `albumCards` to grow the album.

The Bob Ross card uses *Mountain Lake* from the official Bob Ross UK gallery, with a visible credit linking to https://bobross.uk/gallery/. This is external artwork, not a personal painting or a claim about your favorite painting. The supplied six personal photos remain from your video.

## School tab (latest update)

Rutgers, student government, clubs, Langley, Model UN, scouting, and service now live on `/school/`.

- `rutgers.jpg`: Rutgers school card.
- `rutgers-clubs.jpg`: Rutgers clubs card.
- `langley.jpg`: Langley High School card.
- `langley-friends.jpg`: an extra photo inside the Langley card.
- `langley-clubs.jpg`: Langley clubs card.
- `langley-club-1.jpg`, `langley-club-2.jpg`: extra Langley club photos.
- `career.jpg`: the Career link on the cover.

Add your Langley clubs to the `langleyClubs` array in `data/boards.ts`; no component editing is needed. Model UN is already listed separately. Student government, scouting, Eagle project, jamboree, and service filenames are unchanged.

Rutgers logo source: https://www.rutgers.edu/sites/default/files/1200x630_RSUNJ-RED.png (official Rutgers website). It is used as a school identifier and links to the university.


## Online images added from browser feedback

- `career.jpg`: inside the Amazon Spheres, Seattle — [Amazon press gallery](https://press.aboutamazon.com/seattle-headquarters).
- `favorite-film-1.jpg`: Safety Last! (1923) still — [Wikimedia Commons, public domain](https://commons.wikimedia.org/wiki/File:Safety_Last_(1923)_sceenshot.jpg).
- `favorite-film-2.jpg`: Gladiator poster — [Paramount Pictures](https://www.paramountpictures.com/movies/gladiator).
- `favorite-film-3.jpg`: The Pursuit of Happyness poster — [Sony Pictures](https://www.sonypictures.com/movies/thepursuitofhappyness).
- `langley-carnegie.jpg`: Philharmonic soundcheck at Carnegie Hall, March 2023, photo by Karen DeFilipps — [Langley Orchestra](https://www.langleyorchestra.org/2023/03/15/langley-orchestra-performs-at-carnegie-hall/).
- `rv-reference.jpg`: Joshua Tree RV camping, NPS / Paul Martinez — [NPS Flickr](https://www.flickr.com/photos/joshuatreenp/53453932338/).
- `american-mountains.jpg`: Grand Teton National Park — [National Park Service](https://www.nps.gov/grte/index.htm).

These are sourced reference images, not Jibran’s personal travel photographs. Credits are linked in the corresponding tile dialogs.

## Additional requested photos

- `rutgers.jpg`: Rutgers Business School, Livingston, 100 Rock. [Rutgers](https://www.business.rutgers.edu/visit/livingston).
- `rutgers-clubs.jpg`: Wall Street sign, Frostly, CC0. [Source](https://commons.wikimedia.org/wiki/File:Wall_Street_street_sign.jpg).
- `langley.jpg`: Langley High School entrance, Patrickneil, [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/). [Source](https://commons.wikimedia.org/wiki/File:Langley_High_School.jpg).
- `treasury.jpg`: NJ State House, Lowlova, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). [Source](https://commons.wikimedia.org/wiki/File:NJ_Capitol.JPG).
- `chess.jpg`: Chess pieces, Shixart1985, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/). [Source](https://commons.wikimedia.org/wiki/File:Chess_pieces_on_the_board.jpg).

Images resized for the website; CSS crops previews. Share-alike photo licenses continue to apply to the respective image files.

## Personal photos supplied in this revision

All eleven supplied images are now included. HEIC files were converted to JPEG; web copies are sized to at most 1800 pixels. The original library files remain unchanged. Colosseum: cover, history, Italy album. Dolomites meadow replaces Tuscany. Hiking: Interests and album. Orchestra: music and album. Eagle Scout and Model UN: School and album. Capitol: Congress and album. Graduation: Langley details and album. Basketball, pizza, and monkeys: album.

## Latest additions
Langley entrance replaced with the supplied maxresdefault.jpg. Added the supplied D.C. friends photo, trophy group photo, and volunteering photo. Class President uses the students image from https://www.business.rutgers.edu/undergraduate-new-brunswick/student-involvement with a source link in its dialog.

## Latest sourced photos
- Rutgers football crowd: Larry McAllister / Rutgers University, https://www.rutgers.edu/news/winning-day-rutgers
- Roadmap Advisors office sign: https://www.roadmapadvisors.com/about/
- Tutoring illustration (not a Troy Tutors session): Kidsdoor, https://kidsdoor.net/volunteer/study.html

Roadmap Advisors, Troy Tutors, and Congress experience details were expanded from Jibran_Salam_Sep 2026.pdf. Amazon and NJ Treasury experience content was preserved.

## Camera roll cleanup
The camera roll has 20 cards, with no placeholder cards or kicker labels. The trail photo is also used for hiking and road trips. Rock jumping replaces the previous outdoor friends photo using frame 004 from the original video.
Mangoes: Alexander Schimmeck / Unsplash, https://unsplash.com/photos/yellow-and-red-fruit-lot-vTXtQ8ZBzvY
Map photograph: https://store.newpress.com/products/newpress-2025-map

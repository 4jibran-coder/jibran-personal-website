import {experiences} from './experience';
import {leadership} from './leadership';
import {interests} from './interests';
export type Frame = {image:string;label:string;alt:string;credit?:{title:string;url:string;licenseUrl?:string}};
export type BoardItem = {id:string;title:string;kicker:string;tone:string;size?:string;image:string;alt:string;detail:string;stat?:string;frames?:Frame[];credit?:{title:string;url:string;licenseUrl?:string};};
const frame=(name:string,label:string):Frame=>({image:`/images/${name}.jpg`,label,alt:label});
export const interestCards:BoardItem[]=[
 {id:'film',title:'Movies',kicker:'',tone:'ink',size:'tall',image:'/images/favorite-film-1.jpg',alt:'Harold Lloyd in Safety Last! (1923)',detail:interests.film,frames:[{...frame('favorite-film-1','Safety Last!'),credit:{title:'Wikimedia Commons · public domain film still',url:'https://commons.wikimedia.org/wiki/File:Safety_Last_(1923)_sceenshot.jpg'}},{...frame('favorite-film-2','Gladiator'),credit:{title:'Paramount Pictures',url:'https://www.paramountpictures.com/movies/gladiator'}},{...frame('favorite-film-3','The Pursuit of Happyness'),credit:{title:'Sony Pictures',url:'https://www.sonypictures.com/movies/thepursuitofhappyness'}}]},
 {id:'hiking',title:'Hiking',kicker:'',tone:'sage',size:'wide',image:'/images/hiking-personal.jpg',alt:'Jibran hiking on a mountain trail',detail:'I enjoy hiking and exploring new places.'},
 {id:'music',title:'Music',kicker:'',tone:'peach',image:'/images/orchestra-personal.jpg',alt:'Jibran with orchestra friends and their violins',detail:interests.music,frames:[{...frame('langley-carnegie','Langley Orchestra at Carnegie Hall'),credit:{title:'Karen DeFilipps · Langley Orchestra',url:'https://www.langleyorchestra.org/2023/03/15/langley-orchestra-performs-at-carnegie-hall/'}}]},
 {id:'chess',title:'Chess',kicker:'',tone:'yellow',image:'/images/chess.jpg',alt:'Wooden chess pieces on a chessboard',credit:{title:'Shixart1985 · resized · CC BY 2.0',url:'https://commons.wikimedia.org/wiki/File:Chess_pieces_on_the_board.jpg',licenseUrl:'https://creativecommons.org/licenses/by/2.0/'},detail:interests.chess,stat:'~1600'},
 {id:'history',title:'Classical History',kicker:'',tone:'lavender',image:'/images/colosseum.jpg',alt:'Jibran at the Colosseum in Rome',detail:interests.history},
 {id:'bob-ross',title:'Bob Ross',kicker:'',tone:'sage',size:'wide',image:'/images/bob-ross-mountain-lake.jpg',alt:'Mountain Lake painting shown in the official Bob Ross UK gallery',detail:'I like watching Bob Ross paint.',credit:{title:'Mountain Lake · Bob Ross UK gallery',url:'https://bobross.uk/gallery/'}},
 {id:'roadtrips',title:'Travel',kicker:'',tone:'blue',image:'/images/scenic-trail.jpg',alt:'A winding hiking trail through trees toward mountain peaks',detail:'Hiking, RV road trips, and exploring new places are some of my favorite ways to spend time outside. Morocco, Spain, Italy, and the Dolomites are among the places I’ve visited.'},
 {id:'geography',title:'Geography',kicker:'',tone:'pink',image:'/images/geoguessr.jpg',alt:'A printed world map with a pencil',credit:{title:'Newpress · World map',url:'https://store.newpress.com/products/newpress-2025-map'},detail:'I enjoy geography and playing GeoGuessr.'},
 {id:'mangoes',title:'Mangoes',kicker:'',tone:'orange',image:'/images/mangoes.jpg',alt:'A pile of ripe yellow and red mangoes',credit:{title:'Alexander Schimmeck · Unsplash',url:'https://unsplash.com/photos/yellow-and-red-fruit-lot-vTXtQ8ZBzvY'},detail:'I love mangoes.'},
];
const careerPhotos=['treasury','amazon','roadmap','troy-tutors','congress'];
const tones=['blue','yellow','lavender','sage','peach'];
const allCareerCards:BoardItem[]=experiences.map((e,i)=>({id:careerPhotos[i],title:e.name,kicker:i===1?'Up next · Summer 2027':e.lens,tone:tones[i],image:i===1?'/images/career.jpg':`/images/${careerPhotos[i]}.jpg`,alt:i===1?'Inside the Amazon Spheres at its Seattle headquarters':i===0?'New Jersey State House in Trenton':i===2?'Roadmap Advisors office and company sign':i===3?'A tutor and student working through a book together':`A photograph from ${e.name}`,credit:i===1?{title:'Amazon · Seattle headquarters',url:'https://press.aboutamazon.com/seattle-headquarters'}:i===0?{title:'Lowlova · resized · CC BY-SA 4.0',url:'https://commons.wikimedia.org/wiki/File:NJ_Capitol.JPG',licenseUrl:'https://creativecommons.org/licenses/by-sa/4.0/'}:i===2?{title:'Roadmap Advisors · Office',url:'https://www.roadmapadvisors.com/about/'}:i===3?{title:'Kidsdoor · Illustrative tutoring photo',url:'https://kidsdoor.net/volunteer/study.html'}:undefined,detail:`${e.role}\n${e.location} · ${e.dates}\n\n${e.detail}`}));
export const careerCards:BoardItem[]=[allCareerCards[1],allCareerCards[0],...allCareerCards.slice(2)];
const communityCards:BoardItem[]=leadership.map((l,i)=>({id:['scouting','student-government','model-un'][i],title:l.title,kicker:l.subtitle,tone:['sage','pink','lavender'][i],image:i===1?'/images/rutgers-crowd.jpg':`/images/${['scouting','student-government','model-un'][i]}.jpg`,alt:i===1?'Rutgers students cheering at a football game':`A photograph from ${l.title}`,detail:l.text,credit:i===1?{title:'Larry McAllister · Rutgers University',url:'https://www.rutgers.edu/news/winning-day-rutgers'}:undefined,frames:i===0?[frame('eagle-project','Eagle Scout project'),frame('jamboree','International jamboree')]:undefined}));
export const rutgersCards:BoardItem[]=[
 {id:'rutgers',title:'Rutgers ’29',kicker:'Business School',tone:'scarlet',image:'/images/rutgers.jpg',alt:'Rutgers Business School building at 100 Rock on the Livingston campus',credit:{title:'Rutgers Business School',url:'https://www.business.rutgers.edu/visit/livingston'},detail:'B.S. Finance + Mathematics · Expected May 2029\n\nGPA: 3.90 / 4.00\nDean’s List — all semesters\nDe Chavez Jayceryll Scholarship',frames:[frame('campus','Around campus')]},
 communityCards[1],
 {id:'rutgers-clubs',title:'Road to Wall Street',kicker:'Cohort 16',tone:'rutgers-red',image:'/images/rutgers-clubs.jpg',alt:'Wall Street road sign in New York City',detail:'Road to Wall Street is a Rutgers program that prepares students for careers in finance through technical training, interview preparation, and alumni mentorship. I’m part of Cohort 16.',credit:{title:'Frostly · Wall Street sign · CC0',url:'https://commons.wikimedia.org/wiki/File:Wall_Street_street_sign.jpg'}}
];
// Add or edit your own clubs here; they appear inside the Langley clubs card.
export const langleyClubs:string[]=[];
export const langleyCards:BoardItem[]=[
 {id:'langley',title:'Langley High School.',kicker:'McLean, Virginia',tone:'sage',image:'/images/langley-new.jpg',alt:'Langley High School entrance and sign',detail:'Before Rutgers: Langley High School, in McLean, Virginia.',frames:[frame('graduation','Graduation day')]},
 communityCards[2],
 {id:'langley-clubs',title:'Clubs & activities.',kicker:'Langley',tone:'peach',image:'/images/langley-clubs.jpg',alt:'Jibran and friends in suits standing together on outdoor steps',detail:langleyClubs.join('\n')}
];
export const serviceCards:BoardItem[]=[communityCards[0],
 {id:'service',title:'Volunteering',kicker:'Community service',tone:'sand',image:'/images/volunteering.jpg',alt:'Jibran doing volunteer construction work outdoors',detail:'I earned the President’s Volunteer Lifetime Service Award for 4,000 hours of volunteering over my 19 years.\n\nScouting and community service have been a significant part of my life.'}
];
export const albumCards:BoardItem[]=[
 {id:'scenic-trail',title:'Mountain trail',kicker:'',tone:'sage',image:'/images/scenic-trail.jpg',alt:'A trail winding through trees toward mountain peaks',detail:''},
 {id:'friends-dc',title:'Washington, D.C.',kicker:'',tone:'blue',image:'/images/friends-dc.jpg',alt:'Friends together near the Washington Monument at night',detail:''},
 {id:'friends-award',title:'Friends',kicker:'',tone:'lavender',image:'/images/friends-award.jpg',alt:'Jibran and friends posing with a trophy',detail:''},
 {id:'volunteering-album',title:'Volunteering',kicker:'',tone:'sage',image:'/images/volunteering.jpg',alt:'Jibran working outdoors with protective glasses and gloves',detail:''},
 {id:'graduation',title:'Langley graduation',kicker:'',tone:'sage',image:'/images/graduation.jpg',alt:'Jibran receiving his Langley High School diploma',detail:''},
 {id:'basketball',title:'Basketball',kicker:'',tone:'blue',image:'/images/basketball.jpg',alt:'Jibran and friends together on a basketball court',detail:''},
 {id:'scouting-album',title:'Eagle Scout ceremony',kicker:'',tone:'sage',image:'/images/scouting.jpg',alt:'Jibran in his Eagle Scout uniform with a group at his ceremony',detail:''},
 {id:'model-un-album',title:'Model UN team',kicker:'',tone:'lavender',image:'/images/model-un.jpg',alt:'The Model UN team posing together outdoors with awards',detail:''},
 {id:'orchestra-album',title:'Orchestra',kicker:'',tone:'peach',image:'/images/orchestra-personal.jpg',alt:'Jibran with orchestra friends holding violins',detail:''},
 {id:'congress-album',title:'U.S. Capitol',kicker:'',tone:'blue',image:'/images/congress.jpg',alt:'Jibran and a group in front of the United States Capitol',detail:''},
 {id:'hiking-album',title:'Hiking',kicker:'',tone:'sage',image:'/images/hiking-personal.jpg',alt:'Jibran on a narrow mountain trail',detail:''},
 {id:'pizza',title:'Pizza',kicker:'',tone:'orange',image:'/images/pizza.jpg',alt:'A pizza topped with tomatoes and onions',detail:''},
 {id:'monkeys',title:'Monkeys',kicker:'',tone:'yellow',image:'/images/monkeys.jpg',alt:'Jibran with monkeys perched on his shoulder',detail:''},
 {id:'mountains',title:'The Dolomites',kicker:'',tone:'sage',image:'/images/mountains.jpg',alt:'A mountain ridge and winding path',detail:''},
 {id:'childhood',title:'Childhood',kicker:'',tone:'yellow',image:'/images/travel-childhood.jpg',alt:'A childhood photo beside a river and bridge',detail:''},
 ...['Italy','Dolomites'].map((place,i)=>({id:place.toLowerCase(),title:place==='Italy'?'Colosseum':'Dolomites',kicker:'',tone:['peach','blue','sage','lavender'][i],image:place==='Italy'?'/images/colosseum.jpg':`/images/${place.toLowerCase()}.jpg`,alt:`A personal photo from ${place}`,detail:''})),
 {id:'rock-jumping',title:'Rock jumping',kicker:'',tone:'blue',image:'/images/rock-jumping.jpg',alt:'Two people jumping from a rock into the sea, from my original video',detail:''},
 {id:'palms',title:'Sunset',kicker:'',tone:'peach',image:'/images/palms.jpg',alt:'Palm trees against a pink evening sky',detail:''},
 {id:'camel',title:'Pyramids',kicker:'',tone:'yellow',image:'/images/waterside.jpg',alt:'A childhood photograph on a camel near pyramids',detail:''},
];

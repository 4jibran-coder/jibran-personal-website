export type Photo = {src:string; alt:string; title:string; location:string; year:string; memory:string; position?:string};
export const photos: Record<string,Photo> = {
 hero:{src:'/images/portrait.jpg',alt:'Jibran taking a selfie beside a football pitch',title:'Away from the spreadsheet.',location:'',year:'',memory:'',position:'center'},
 hiking:{src:'/images/mountains.jpg',alt:'A winding path along a green mountain ridge beneath a cloudy sky',title:'The long way around',location:'',year:'',memory:''},
 childhood:{src:'/images/travel-childhood.jpg',alt:'A childhood travel photograph beside a river and a bridge lined with buildings',title:'An earlier chapter',location:'',year:'',memory:''},
 roadtrip:{src:'/images/waterside.jpg',alt:'A childhood photograph on a camel with pyramids in the distance',title:'A little further from home',location:'',year:'',memory:''},
 friends:{src:'/images/friends.jpg',alt:'Six friends standing together outdoors beside a tree stump',title:'Better with good company',location:'',year:'',memory:''},
 palms:{src:'/images/palms.jpg',alt:'Palm trees silhouetted against a pink evening sky',title:'One last look outside',location:'',year:'',memory:''},
 violin:{src:'/images/violin.jpg',alt:'Violin photograph',title:'Music',location:'',year:'',memory:''},
};
export const journalPhotos = ['hiking','childhood','roadtrip','palms'];
// Add confirmed locations, years, and personal memories above; none were inferred from the video.

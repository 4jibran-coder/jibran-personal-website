import type {Metadata} from 'next';
import Image from 'next/image';

export const metadata:Metadata={title:'Why Recalc'};
const reasons=[
 {number:'01',title:'People who push me.',text:'I want to learn alongside students who are curious about finance, ambitious about their futures, and willing to challenge each other. People who make me ask better questions and aim higher.',tone:'lavender'},
 {number:'02',title:'A community that knows me.',text:'At a school as large as Rutgers, a smaller circle matters. I’m looking for people who know each other, celebrate each other’s wins, and grow together—beyond the program itself.',tone:'sage'},
 {number:'03',title:'A chance to give back.',text:'Older students, alumni, and mentors have given me so much guidance. I want to bring that same energy: share what I learn, show up for others, and help the next person behind me.',tone:'peach'},
];
export default function Recalc(){return <main id="main" className="recalc-page">
 <header className="recalc-heading"><h1>Why <em>Recalc.</em></h1><p>The next community I hope to grow with—and contribute to.</p></header>
 <section className="recalc-story" aria-labelledby="community-advice">
  <div className="recalc-story-copy"><p>In my senior-year yearbook, I was asked what advice I’d give a freshman. My answer was simple:</p><h2 id="community-advice">“Find your community<br/><em>as quickly as possible.”</em></h2><p>Model UN showed me why. The right people gave me more than friendships. They raised my standards, pushed me to work harder, and helped me become a better leader.</p><p className="recalc-bridge">That’s what draws me to Recalc Accelerator.</p></div>
  <figure className="recalc-photo"><Image src="/images/model-un.jpg" alt="Jibran’s Langley Model UN team together with their awards" width={1800} height={1200} sizes="(max-width: 800px) 100vw, 50vw" priority/><figcaption>My Model UN community at Langley.</figcaption></figure>
 </section>
 <section className="recalc-reasons" aria-label="What I’m looking for in Recalc Accelerator">{reasons.map(reason=><article key={reason.number} className={`recalc-reason ${reason.tone}`}><span className="recalc-number" aria-hidden="true">{reason.number}</span><h2>{reason.title}</h2><p>{reason.text}</p></article>)}</section>
 <section className="recalc-closing"><p>The best communities I’ve been part of have changed the direction of my life.</p><h2>I hope Recalc is the next one.<br/><em>And I want to help make it stronger.</em></h2></section>
 </main>}

import type {Metadata} from 'next';
import {careerCards} from '@/data/boards';
import {career} from '@/data/career';
import {prepareCard} from '@/lib/media';
import {Tile} from '@/components/Tile';
export const metadata:Metadata={title:'Career'};
export default function Career(){return <main id="main" className="career-page"><section className="career-intro lavender" aria-labelledby="career-title"><div><h1 id="career-title">TMT investment<br/><em>banking.</em></h1><div className="sector-tags">{career.sectors.map(s=><span key={s}>{s}</span>)}</div></div><div className="career-direction"><p>{career.intro}</p><p>{career.next}</p></div></section><section aria-labelledby="experience-heading"><div className="career-section-heading"><h2 id="experience-heading">Experience.</h2><span>Current, past & upcoming</span></div><div className="achievement-board">{careerCards.map(item=><Tile key={item.id} item={prepareCard(item)}/>)}</div></section></main>}

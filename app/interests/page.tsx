import type {Metadata} from 'next';
import {interestCards} from '@/data/boards';
import {films} from '@/data/interests';
import {prepareCard} from '@/lib/media';
import {Tile} from '@/components/Tile';
export const metadata:Metadata={title:'Interests'};
export default function Interests(){return <main id="main"><div className="page-heading"><div><h1>More than <em>Excel.</em></h1></div><p>Click on the tiles to see more.</p></div><div className="interest-board">{interestCards.map(item=><Tile key={item.id} item={prepareCard(item)}>{item.id==='film'&&<div className="film-list"><h3>My favorite films</h3>{films.map((f,i)=><div key={i}><span>0{i+1}</span><p>{f.title}<small>{[f.year,f.genre,f.rating].filter(Boolean).join(' · ')}<br/>{f.thought}</small></p></div>)}</div>}</Tile>)}</div><p className="tiny-credit">Painting: <a href="https://bobross.uk/gallery/" target="_blank" rel="noopener noreferrer">Mountain Lake · Bob Ross UK ↗</a></p></main>}

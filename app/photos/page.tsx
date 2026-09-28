import type {Metadata} from 'next';
import {albumCards} from '@/data/boards';
import {prepareCard} from '@/lib/media';
import {Tile} from '@/components/Tile';
export const metadata:Metadata={title:'Photo album'};
export default function Photos(){return <main id="main"><div className="page-heading"><div><h1>My <em>camera roll.</em></h1></div></div><div className="album-board">{albumCards.map(item=><Tile key={item.id} item={prepareCard(item)}/>)}</div></main>}

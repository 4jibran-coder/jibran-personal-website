import fs from 'node:fs';
import path from 'node:path';
import type {BoardItem,Frame} from '@/data/boards';
export function available(image:string){return image&&fs.existsSync(path.join(process.cwd(),'public',image))?image:''}
export function prepareFrame(f:Frame){return {...f,image:available(f.image)}}
export function prepareCard(item:BoardItem){return {...item,image:available(item.image),frames:item.frames?.map(prepareFrame)}}

import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
export function getNotes(){
 const dir=path.join(process.cwd(),'content/notes');
 return fs.readdirSync(dir).filter(f=>f.endsWith('.md')).map(file=>{
 const {data,content}=matter(fs.readFileSync(path.join(dir,file),'utf8'));
 return {slug:file.replace(/\.md$/,''),title:String(data.title||''),date:String(data.date||''),category:String(data.category||'Random'),description:String(data.description||''),draft:data.draft!==false,content};
 }).sort((a,b)=>b.date.localeCompare(a.date));
}

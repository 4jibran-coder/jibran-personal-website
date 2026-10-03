'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
const links=[['/','About'],['/skills/','Skills'],['/projects/','Projects'],['/career/','Career'],['/school/','School'],['/interests/','Interests'],['/photos/','Photos'],['/recalc/','Why Recalc']];
export function Nav(){const path=usePathname().replace(/\/$/,'')||'/';return <header className="nav"><Link href="/" className="wordmark">js<span>.</span></Link><nav aria-label="Main">{links.map(([url,label])=><Link key={url} href={url} aria-current={path===(url.replace(/\/$/,'')||'/')?'page':undefined}>{label}</Link>)}</nav><span className="nav-note">A few sides of Jibran</span></header>}

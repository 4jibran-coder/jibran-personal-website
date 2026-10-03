import {assetPath} from '@/lib/asset-path';
import {profile} from '@/data/profile';
export function Footer(){return <footer className="site-footer"><span>Jibran Salam · Rutgers ’29</span><div>{profile.email&&<a href={`mailto:${profile.email}`}>Email ↗</a>}{profile.linkedIn&&<a href={profile.linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>}{profile.resume&&<a href={assetPath(profile.resume)} target="_blank" rel="noopener noreferrer">Résumé ↗</a>}</div><span>Northern Virginia ↔ New Brunswick</span></footer>}

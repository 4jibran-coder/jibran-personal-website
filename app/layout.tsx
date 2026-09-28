import type {Metadata} from 'next';
import {Nav} from '@/components/Nav';
import {Footer} from '@/components/Footer';
import './globals.css';
export const metadata:Metadata={title:{default:'Jibran Salam — A few sides of me',template:'%s — Jibran Salam'},description:'Finance + Mathematics at Rutgers. A few sides of Jibran: school, career, interests, and a camera roll.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body><a href="#main" className="skip">Skip to content</a><div className="site-shell"><Nav/>{children}<Footer/></div></body></html>}

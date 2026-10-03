'use client';
import Image from 'next/image';
import {assetPath} from '@/lib/asset-path';
import {useRef,useState} from 'react';
import type {Photo as PhotoData} from '@/data/photos';
export function Photo({photo,priority=false,className='',lightbox=false}:{photo:PhotoData;priority?:boolean;className?:string;lightbox?:boolean}){
 const [failed,setFailed]=useState(false);
 const dialog=useRef<HTMLDialogElement>(null);
 const content=failed?<div className="photo-placeholder"><span>Photo coming soon</span><strong>{photo.title}</strong></div>:<Image src={assetPath(photo.src)} alt={photo.alt} width={1080} height={810} priority={priority} loading={priority?undefined:'lazy'} sizes="(max-width: 768px) 100vw, 50vw" onError={()=>setFailed(true)} style={{objectPosition:photo.position||'center'}}/>;
 return <div className={`photo ${className}`}>{lightbox&&!failed?<button className="photo-open" onClick={()=>dialog.current?.showModal()} aria-label={`Enlarge: ${photo.title}`}>{content}<span className="expand-mark" aria-hidden="true">↗</span></button>:content}{lightbox&&<dialog ref={dialog} className="lightbox" aria-label={photo.title} onClick={e=>{if(e.target===e.currentTarget)dialog.current?.close()}}><button className="close" autoFocus onClick={()=>dialog.current?.close()} aria-label="Close photo">×</button><Image src={assetPath(photo.src)} alt={photo.alt} width={1400} height={1200}/><p>{photo.title}{photo.location?` / ${photo.location}`:''}{photo.year?` / ${photo.year}`:''}</p>{photo.memory&&<p>{photo.memory}</p>}</dialog>}</div>
}

"use client";
import { useRef, useState } from 'react';
import { FiMaximize2, FiMinus, FiPlus, FiX, FiExternalLink } from 'react-icons/fi';
import CertificateImage from './CertificateImage';
export default function CertificatePreview({ certificate }) {
  const dialog = useRef(null);
  const opener = useRef(null);
  const [zoom, setZoom] = useState(1);
  const open = () => { setZoom(1); dialog.current.showModal(); };
  return <div className="cert-preview">
    <button ref={opener} className="cert-preview-trigger" onClick={open} aria-label={`Enlarge ${certificate.title} certificate`}><CertificateImage certificate={certificate} eager /></button>
    <div className="cert-preview-actions"><button onClick={open}><FiMaximize2 aria-hidden="true" /> Enlarge preview</button>{certificate.imageUrl && <a href={certificate.imageUrl} target="_blank" rel="noopener noreferrer">Full-size image <FiExternalLink aria-hidden="true" /></a>}</div>
    <dialog ref={dialog} className="cert-lightbox" aria-label={`${certificate.title} certificate preview`} onClose={() => opener.current?.focus()} onClick={event => { if (event.target === dialog.current) dialog.current.close(); }}>
      <div className="cert-lightbox-bar"><span>Certificate preview</span><div><button aria-label="Zoom out" disabled={zoom <= 1} onClick={() => setZoom(z => Math.max(1, z - .5))}><FiMinus /></button><output aria-live="polite">{zoom * 100}%</output><button aria-label="Zoom in" disabled={zoom >= 3} onClick={() => setZoom(z => Math.min(3, z + .5))}><FiPlus /></button><button onClick={() => dialog.current.close()} aria-label="Close certificate preview" autoFocus><FiX /></button></div></div>
      <div className="cert-zoom-scroll"><div style={{width:`${zoom * 100}%`}}><CertificateImage certificate={certificate} eager /></div></div>
    </dialog>
  </div>;
}

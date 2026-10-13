"use client";
import { useState } from 'react';
export default function CertificateImage({ certificate, eager = false }) {
  const [status, setStatus] = useState(certificate.imageUrl ? 'loading' : 'error');
  return <div className={`cert-image cert-image-${status}`}>
    {status === 'loading' && <span className="cert-image-loading" role="status"><span className="sr-only">Loading certificate preview</span></span>}
    {status === 'error' ? <span className="cert-image-error"><strong>{certificate.title}</strong><span>Preview unavailable · Explore credential</span></span> : <img src={certificate.imageUrl} alt={`${certificate.title} — ${certificate.issuer}`} width="1772" height="928" loading={eager ? 'eager' : 'lazy'} decoding="async" onLoad={() => setStatus('loaded')} onError={() => setStatus('error')} />}
  </div>;
}

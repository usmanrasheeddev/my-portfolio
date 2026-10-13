"use client";
import { useState } from 'react';
import Link from 'next/link';
import { FiArrowDown, FiArrowUp } from 'react-icons/fi';
import { certifications } from '../data/certifications';
import CertificateImage from './certifications/CertificateImage';

export default function Certifications() {
  const [expanded, setExpanded] = useState(false);
  const tile = (c, eager = false) => <Link className="cert-tile" href={`/certifications/${c.slug}`} key={c.id} aria-label={`Explore ${c.title}`}><CertificateImage certificate={c} eager={eager} /></Link>;
  return <section id="certifications" aria-labelledby="cert-title" className="cert-gallery">
    <div className="cert-section-heading"><h4 id="cert-title">Certifications</h4><span>{certifications.length} credentials</span></div>
    <div className="cert-grid">{certifications.filter(c => c.featured).map(c => tile(c, true))}</div>
    <div id="all-certifications" hidden={!expanded} className="cert-grid cert-more">{expanded && certifications.filter(c => !c.featured).map(c => tile(c))}</div>
    <button className="cert-show-all" aria-expanded={expanded} aria-controls="all-certifications" onClick={() => {setExpanded(!expanded); if (expanded) document.getElementById('certifications')?.scrollIntoView({block:'start',behavior:'instant'});}}>{expanded ? 'Show Featured Certifications' : 'View All Certifications'}{expanded ? <FiArrowUp aria-hidden="true" /> : <FiArrowDown aria-hidden="true" />}</button>
  </section>;
}

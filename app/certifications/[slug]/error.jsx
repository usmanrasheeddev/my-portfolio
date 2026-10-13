"use client";
import Link from 'next/link';
export default function CertificateError({ reset }) {
  return <main className="cert-detail-page"><div className="cert-detail-inner" role="alert"><h1>Unable to load this certificate</h1><p>Please try again, or return to the collection.</p><button className="cert-show-all" onClick={reset}>Try again</button><Link href="/#certifications">Back to certifications</Link></div></main>;
}

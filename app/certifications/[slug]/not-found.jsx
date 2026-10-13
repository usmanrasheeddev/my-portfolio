import Link from 'next/link';
export default function NotFound() { return <main className="cert-detail-page"><div className="cert-detail-inner"><h1>Certificate not found</h1><p>This credential is not in the collection.</p><Link href="/#certifications">Back to certifications</Link></div></main>; }

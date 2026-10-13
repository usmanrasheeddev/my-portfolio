import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import { certifications, getCertification, getRelatedCertifications } from '@/app/data/certifications';
import CertificatePreview from '@/app/components/certifications/CertificatePreview';
export const dynamicParams = false;
export function generateStaticParams() { return certifications.map(c => ({slug:c.slug})); }
export function generateMetadata({params}) { const c = getCertification(params.slug); return {title:c ? `${c.title} | Usman Rasheed` : 'Certificate not found', description:c?.description || c?.title}; }
export default function CertificatePage({params}) {
  const c = getCertification(params.slug);
  if (!c) notFound();
  const index = certifications.indexOf(c), previous = certifications[index - 1], next = certifications[index + 1], related = getRelatedCertifications(c);
  return <main className="cert-detail-page"><div className="cert-detail-inner">
    <nav aria-label="Breadcrumb" className="cert-breadcrumb"><Link href="/">Portfolio</Link><span>/</span><Link href="/#certifications">Certifications</Link><span>/</span><span aria-current="page">{c.issuer}</span></nav>
    <Link href="/#certifications" className="cert-back"><FiArrowLeft aria-hidden="true" /> All certifications</Link>
    <header className="cert-detail-heading"><p>{c.platform} · {c.type}</p><h1>{c.title}</h1><span>{c.issuer}</span></header>
    <CertificatePreview key={c.id} certificate={c} />
    <dl className="cert-facts"><div><dt>Issued by</dt><dd>{c.issuer}</dd></div><div><dt>Completed</dt><dd>{c.completionDate || c.date}</dd></div><div><dt>Credential ID</dt><dd>{c.id}</dd></div></dl>
    <div className="cert-official-links"><a href={c.url} target="_blank" rel="noopener noreferrer">Verify credential <FiArrowUpRight aria-hidden="true" /></a>{c.courseUrl && <a href={c.courseUrl} target="_blank" rel="noopener noreferrer">Official course <FiArrowUpRight aria-hidden="true" /></a>}</div>
    <section className="cert-copy"><h2>Learning overview</h2><p>{c.description || `Coursera lists this course's focus areas below. A detailed learning overview was not available on the credential page.`}</p><a className="cert-source" href={c.courseUrl || c.url} target="_blank" rel="noopener noreferrer">Based on the official Coursera course information <FiArrowUpRight aria-hidden="true" /></a></section>
    {c.skills?.length > 0 && <section className="cert-copy"><h2>Skills & concepts</h2><ul className="cert-skills">{c.skills.map(skill => <li key={skill}>{skill}</li>)}</ul></section>}
    {c.application && <section className="cert-copy"><h2>From learning to practice</h2><p>{c.application}</p><p className="cert-disclosure">Potential applications of the course content; not a claim of completed personal projects.</p></section>}
    {related.length > 0 && <section className="cert-copy"><h2>{c.childIds?.length ? 'Included course certificates' : 'Associated specialization'}</h2><div className="cert-related">{related.map(item => <Link href={`/certifications/${item.slug}`} key={item.id}><span>{item.title}<small>{item.issuer}</small></span><FiArrowUpRight aria-hidden="true" /></Link>)}</div></section>}
    {c.relatedProjects?.length > 0 && <section className="cert-copy"><h2>Related portfolio work</h2><p className="cert-disclosure">Connected by shared technology, independently of this course.</p><div className="cert-related">{c.relatedProjects.map(project => <Link key={project.url} href={project.url}><span>{project.title}<small>{project.context}</small></span><FiArrowUpRight aria-hidden="true" /></Link>)}</div></section>}
    <nav aria-label="Certificate navigation" className="cert-pagination">{previous ? <Link href={`/certifications/${previous.slug}`}><span><FiArrowLeft aria-hidden="true" /> Previous</span><strong>{previous.title}</strong></Link> : <span />}{next ? <Link href={`/certifications/${next.slug}`}><span>Next <FiArrowRight aria-hidden="true" /></span><strong>{next.title}</strong></Link> : <span />}</nav>
  </div></main>;
}

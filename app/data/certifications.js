// Add only earned credentials with their original Coursera verification URLs.
// Each entry: { title, issuer, date, url, skills: [] }.
import details from './certification-details.json';
import additionalCertifications from './additional-certifications.json';
const records = [
  {
    "title": "Docker Certified Associate Preparation Specialization",
    "issuer": "LearnKartS",
    "date": "Oct 2026",
    "featured": true,
    "url": "https://www.coursera.org/account/accomplishments/specialization/0224Z8TLA4V1"
  },
  {
    "title": "AWS Generative AI and AI Agents with Amazon Bedrock Professional Certificate",
    "issuer": "Amazon Web Services",
    "date": "Jul 2026",
    "featured": true,
    "url": "https://www.coursera.org/account/accomplishments/specialization/5395QKKOP4X3"
  },
  {
    "title": "Docker Security, Troubleshooting and DCA Exam Prep",
    "issuer": "LearnKartS",
    "date": "Oct 2026",
    "featured": false,
    "url": "https://www.coursera.org/account/accomplishments/verify/I2R5RILP75XU"
  },
  {
    "title": "Container Monitoring and Engine Administration",
    "issuer": "LearnKartS",
    "date": "Oct 2026",
    "featured": false,
    "url": "https://www.coursera.org/account/accomplishments/verify/ZIC4PNZJ393S"
  },
  {
    "title": "Docker Compose and Container Orchestration",
    "issuer": "LearnKartS",
    "date": "Oct 2026",
    "featured": false,
    "url": "https://www.coursera.org/account/accomplishments/verify/8ULQS22XB7EC"
  },
  {
    "title": "Docker Networking and Storage",
    "issuer": "LearnKartS",
    "date": "Oct 2026",
    "featured": false,
    "url": "https://www.coursera.org/account/accomplishments/verify/GBTWIUV7922S"
  },
  {
    "title": "Docker Registries and Image Distribution",
    "issuer": "LearnKartS",
    "date": "Oct 2026",
    "featured": false,
    "url": "https://www.coursera.org/account/accomplishments/verify/UUZW1X3Z61AB"
  },
  {
    "title": "Building Images with Dockerfiles",
    "issuer": "LearnKartS",
    "date": "Oct 2026",
    "featured": false,
    "url": "https://www.coursera.org/account/accomplishments/verify/4D3T4LH0J3U8"
  },
  {
    "title": "Docker Fundamentals and Container Management",
    "issuer": "LearnKartS",
    "date": "Oct 2026",
    "featured": false,
    "url": "https://www.coursera.org/account/accomplishments/verify/7G2I54YJ4LT6"
  },
  {
    "title": "Introduction to Docker",
    "issuer": "LearnQuest",
    "date": "Oct 2026",
    "featured": false,
    "url": "https://www.coursera.org/account/accomplishments/verify/5TUJG794CBJI"
  },
  {
    "title": "Foundations of Agentic AI & the GitHub Copilot SDK",
    "issuer": "GitHub",
    "date": "Oct 2026",
    "featured": false,
    "url": "https://www.coursera.org/account/accomplishments/verify/C2M4MJ3HQHJ4"
  },
  {
    "title": "Plan a Successful Freelancing Business",
    "issuer": "California Institute of the Arts",
    "date": "Sep 2026",
    "featured": false,
    "url": "https://www.coursera.org/account/accomplishments/verify/TT9769R0FWIB"
  },
  {
    "title": "Getting Started with AWS Generative AI for Developers",
    "issuer": "Amazon Web Services",
    "date": "Jul 2026",
    "featured": false,
    "url": "https://www.coursera.org/account/accomplishments/verify/9TK4V5EXN5ZJ"
  },
  {
    "title": "Amazon Bedrock Customization, Optimization & Automation",
    "issuer": "Amazon Web Services",
    "date": "Jul 2026",
    "featured": false,
    "url": "https://www.coursera.org/account/accomplishments/verify/JHH36ID96EVZ"
  },
  {
    "title": "Generative AI Applications with Amazon Bedrock",
    "issuer": "Amazon Web Services",
    "date": "Jul 2026",
    "featured": false,
    "url": "https://www.coursera.org/account/accomplishments/verify/RDNNESY3PEZZ"
  },
  {
    "title": "Getting started with generative AI in Azure",
    "issuer": "Microsoft",
    "date": "Jul 2026",
    "featured": false,
    "url": "https://www.coursera.org/account/accomplishments/verify/MSD2C57X8NG5"
  },
  {
    "title": "Ethical Hacking with Kali Linux",
    "issuer": "IBM",
    "date": "Jul 2026",
    "featured": false,
    "url": "https://www.coursera.org/account/accomplishments/verify/XTEASNB2PE71"
  },
  {
    "title": "Introduction to AI",
    "issuer": "Google",
    "date": "Jul 2026",
    "featured": false,
    "url": "https://www.coursera.org/account/accomplishments/verify/OS6EBL7KRFFM"
  },
  {
    "title": "Data Security",
    "issuer": "Cisco Learning and Certifications",
    "date": "Jun 2026",
    "featured": false,
    "url": "https://www.coursera.org/account/accomplishments/verify/Q9R2S2AQPZIJ"
  },
  {
    "title": "Introduction to Networking",
    "issuer": "NVIDIA",
    "date": "Jun 2026",
    "featured": false,
    "url": "https://www.coursera.org/account/accomplishments/verify/IKS19KTSTJS6"
  },
  {
    "title": "Use C++ to build a Crypto Trading Platform: Final System",
    "issuer": "University of London • Goldsmiths, University of London",
    "date": "Jun 2026",
    "featured": false,
    "url": "https://www.coursera.org/account/accomplishments/verify/TD7SQF7A3AR5"
  },
  {
    "title": "Instructional Design Foundations and Applications",
    "issuer": "University of Illinois Urbana-Champaign",
    "date": "Jun 2026",
    "featured": false,
    "url": "https://www.coursera.org/account/accomplishments/verify/UKK7MGTDXIHC"
  },
  {
    "title": "Foundations of Cybersecurity",
    "issuer": "Google",
    "date": "Jun 2026",
    "featured": false,
    "url": "https://www.coursera.org/account/accomplishments/verify/B779VUX0T3QU"
  },
  {
    "title": "Full-Stack React with Spring Boot: React Applications",
    "issuer": "Pearson",
    "date": "Jun 2026",
    "featured": false,
    "url": "https://www.coursera.org/account/accomplishments/verify/IZ9AF8DRQ0ZV"
  },
  {
    "title": "Foundations of Project Management",
    "issuer": "Google",
    "date": "Jun 2026",
    "featured": false,
    "url": "https://www.coursera.org/account/accomplishments/verify/B24WOO7IIREH"
  }
];

export const certifications = [...records, ...additionalCertifications].map(record => {
  const id = record.id || record.url.split('/').pop();
  return { ...record, id, slug: record.slug || id.toLowerCase(), platform: record.platform || 'Coursera',
    type: record.type || (record.featured ? 'Specialization / Professional Certificate' : 'Course certificate'),
    ...details[id],
    featured: ['0224Z8TLA4V1', '5395QKKOP4X3', 'C2M4MJ3HQHJ4', 'IZ9AF8DRQ0ZV'].includes(id) };
});
export const getCertification = slug => certifications.find(c => c.slug === slug);
export const getRelatedCertifications = certificate => certifications.filter(c => c.id !== certificate.id && (certificate.childIds?.includes(c.id) || c.childIds?.includes(certificate.id)));

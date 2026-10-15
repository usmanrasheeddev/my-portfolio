import { DM_Sans } from "next/font/google";
import "./globals.css";

const dm_sans = DM_Sans({ subsets: ["latin"] });
const siteUrl = "https://www.usmanrasheed.me";
const description = "Usman Rasheed is a full-stack developer and UI/UX designer. Explore his web applications, projects, experience, and professional certifications.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Usman Rasheed | Full-Stack Developer & UI/UX Designer",
  description,
  authors: [{ name: "Usman Rasheed", url: siteUrl }],
  creator: "Usman Rasheed",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  verification: { google: "jUTaNGrfhGUwAW2qFGH3eCYEnDGoE-ZjUOejmk-wymg" },
  openGraph: {
    type: "website", locale: "en_US", siteName: "Usman Rasheed",
    title: "Usman Rasheed | Full-Stack Developer & UI/UX Designer",
    description,
    images: [{ url: "/assets/profile-pic.png", alt: "Usman Rasheed, full-stack developer and UI/UX designer" }],
  },
  twitter: { card: "summary", title: "Usman Rasheed | Full-Stack Developer & UI/UX Designer", description, images: ["/assets/profile-pic.png"] },
  icons: { icon: "/assets/logo.png", shortcut: "/assets/logo.png" },
};

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: "Usman Rasheed",
  url: siteUrl,
  image: `${siteUrl}/assets/profile-pic.png`,
  jobTitle: "Full-Stack Developer and UI/UX Designer",
  description,
  sameAs: ["https://www.linkedin.com/in/usmanrasheedcontact/", "https://github.com/usmanrasheeddev"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dm_sans.className} antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }} />
        {children}
      </body>
    </html>
  );
}

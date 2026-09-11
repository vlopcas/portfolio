import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { allowIndexing, googleSiteVerification, site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — ${site.title}`, template: `%s — ${site.name}` },
  description: site.description,
  alternates: { canonical: "/" },
  manifest: "/manifest.webmanifest",
  robots: { index: allowIndexing, follow: allowIndexing, googleBot: { index: allowIndexing, follow: allowIndexing } },
  verification: googleSiteVerification ? { google: googleSiteVerification } : undefined,
  icons: {
    icon: [
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: { title: "Victor Castro | Data Scientist, Software & AI", description: site.description, url: site.url, siteName: site.name, locale: "pt_BR", type: "website", images: [{ url: "/images/social/preview-square.png", width: 1200, height: 1200, alt: "Victor Castro — Data Scientist, Software, Dados e Inteligência Artificial" }] },
  twitter: { card: "summary_large_image", title: "Victor Castro | Data Scientist, Software & AI", description: site.description, images: ["/images/social/preview-square.png"] },
};
export const viewport: Viewport = { colorScheme: "dark light", themeColor: [{ media: "(prefers-color-scheme: light)", color: "#f6f6f3" }, { media: "(prefers-color-scheme: dark)", color: "#0b1014" }] };
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}})()`;
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Person", "@id": `${site.url}/#person`, name: site.name, url: site.url, image: `${site.url}/images/portrait/victor.webp`, jobTitle: "Data Scientist", sameAs: [site.github, site.linkedin], knowsAbout: ["Software Engineering", "Data Engineering", "Data Science", "Machine Learning", "MLOps", "Artificial Intelligence"] },
    { "@type": "WebSite", "@id": `${site.url}/#website`, name: `${site.name} — Portfólio`, url: site.url, inLanguage: "pt-BR", publisher: { "@id": `${site.url}/#person` } },
  ],
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: themeScript }}/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}/></head><body><a className="skip-link" href="#conteudo">Pular para o conteúdo</a><SiteHeader/><main id="conteudo">{children}</main><SiteFooter/><WhatsAppFloat/></body></html>;
}

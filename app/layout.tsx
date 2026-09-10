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
  icons: { apple: [{ url: "/favicons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }] },
  openGraph: { title: site.name, description: site.description, url: site.url, siteName: site.name, locale: "pt_BR", type: "website" },
};
export const viewport: Viewport = { colorScheme: "dark light", themeColor: [{ media: "(prefers-color-scheme: light)", color: "#f6f6f3" }, { media: "(prefers-color-scheme: dark)", color: "#0b1014" }] };
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}})()`;
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Person", "@id": `${site.url}/#person`, name: site.name, url: site.url, image: `${site.url}/victor.jpg`, jobTitle: "Data Scientist", sameAs: [site.github, site.linkedin], knowsAbout: ["Software Engineering", "Data Engineering", "Data Science", "Machine Learning", "MLOps", "Artificial Intelligence"] },
    { "@type": "WebSite", "@id": `${site.url}/#website`, name: `${site.name} — Portfólio`, url: site.url, inLanguage: "pt-BR", publisher: { "@id": `${site.url}/#person` } },
  ],
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR" suppressHydrationWarning><head><link rel="icon" type="image/png" sizes="32x32" href="/favicons-light/favicon-32x32.png" media="(prefers-color-scheme: light)"/><link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" media="(prefers-color-scheme: dark)"/><script dangerouslySetInnerHTML={{ __html: themeScript }}/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}/></head><body><a className="skip-link" href="#conteudo">Pular para o conteúdo</a><SiteHeader/><main id="conteudo">{children}</main><SiteFooter/><WhatsAppFloat/></body></html>;
}

import Link from "next/link";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons";
import { ThemeImage } from "@/components/theme-image";
import { site } from "@/lib/site";
export function SiteFooter() { return <footer className="site-footer"><div className="container footer-inner"><Link className="brand" href="/" aria-label="Victor Castro, início"><ThemeImage darkSrc="/logo.png" lightSrc="/logo-preta.png" alt="" width={58} height={58}/></Link><p>© {new Date().getFullYear()} Victor Castro.</p><div className="social"><a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon/></a><a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon/></a><a href={`mailto:${site.email}`} aria-label="E-mail"><MailIcon/></a></div></div></footer>; }

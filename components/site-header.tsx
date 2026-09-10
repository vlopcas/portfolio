"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";
import { ThemeImage } from "./theme-image";
import { ThemeToggle } from "./theme-toggle";
const links = [["/", "Início"], ["/projects", "Projetos"], ["/about", "Sobre"], ["/experience", "Experiência"]] as const;
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function closeWithKeyboard(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    function closeOutside(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) setOpen(false);
    }
    window.addEventListener("keydown", closeWithKeyboard);
    document.addEventListener("pointerdown", closeOutside);
    return () => {
      window.removeEventListener("keydown", closeWithKeyboard);
      document.removeEventListener("pointerdown", closeOutside);
    };
  }, []);

  return <header ref={headerRef} className="site-header"><div className="container header-inner"><Link href="/" className="brand" aria-label="Victor Castro, início"><ThemeImage darkSrc="/logo.png" lightSrc="/logo-preta.png" alt="" width={58} height={58} priority/></Link><nav className="desktop-nav" aria-label="Navegação principal">{links.map(([href, label]) => <Link key={href} className={pathname === href ? "active" : ""} href={href}>{label}</Link>)}</nav><div className="header-actions"><ThemeToggle/><a className="button button-primary desktop-contact" href={site.whatsapp} target="_blank" rel="noreferrer">Vamos conversar</a><button className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen(!open)}>{open ? "×" : "☰"}</button></div></div>{open && <nav id="mobile-menu" className="mobile-nav" aria-label="Navegação móvel">{links.map(([href, label]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}<a className="button button-primary" href={site.whatsapp} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Conversar no WhatsApp</a></nav>}</header>;
}

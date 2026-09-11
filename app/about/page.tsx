import type { Metadata } from "next";
import Link from "next/link";
import { JourneyIcon } from "@/components/icons";
import { RouteHero } from "@/components/route-hero";
import { ThemeImage } from "@/components/theme-image";

export const metadata: Metadata = { title: "Sobre", description: "A trajetória de Victor Castro entre ciência, dados, software e inteligência artificial.", alternates: { canonical: "/about" } };

export default function AboutPage() {
  return <>
    <RouteHero className="about-header"><div className="container"><span className="eyebrow">Sobre mim</span><div className="editorial-heading"><h1 className="page-title">Minha trajetória entre<br/><span>ciência, dados e software.</span></h1><p className="lead">Minha carreira nasceu na ciência e ganhou escala com software, dados e inteligência artificial.</p></div></div></RouteHero>
    <section className="container section about-profile">
      <div className="portrait-wrap"><ThemeImage className="theme-portrait" imageClassName="portrait" darkSrc="/images/portrait/victor-dark.webp" lightSrc="/images/portrait/victor-light.webp" alt="Victor Castro" width={1000} height={1000} sizes="(max-width: 800px) 80vw, 40vw"/></div>
      <div className="about-story"><span className="story-marker"><JourneyIcon /></span><p className="story-lead">Biotecnologia foi onde aprendi a fazer boas perguntas. Dados e software se tornaram as ferramentas para respondê-las em escala.</p><p>Trabalhei com dados genéticos, modelagem molecular e imunoinformática aplicada ao desenvolvimento de vacinas. Essa base ensinou a investigar problemas, testar hipóteses e respeitar os limites das evidências.</p><p>Hoje combino machine learning, engenharia de dados, IA generativa e desenvolvimento full-stack. Gosto do ciclo inteiro: entender o contexto, estruturar os dados, construir a solução e acompanhar como ela se comporta em uso.</p><p>Aqui, cada projeto mostra tanto o resultado quanto o raciocínio por trás dele: arquitetura, decisões, limites e próximos passos.</p><Link className="button button-primary about-button" href="/experience"><JourneyIcon /> Ver minha experiência</Link></div>
    </section>
  </>;
}

import Image from "next/image";
import Link from "next/link";
import { AiIcon, CodeIcon, DataIcon, DirectionIcon, ExternalIcon, JourneyIcon, MlIcon, ScienceIcon, WhatsAppIcon } from "@/components/icons";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";
import victorPhoto from "@/public/victor.jpg";

const areas = [
  { title: "Software Engineering", text: "Aplicações web, APIs e definição de arquitetura para produtos e processos.", icon: CodeIcon },
  { title: "Data Engineering", text: "Pipelines, contratos e camadas analíticas com rastreabilidade.", icon: DataIcon },
  { title: "Data Science", text: "Análise e modelagem guiadas por evidências, não por promessas.", icon: ScienceIcon },
  { title: "ML / MLOps", text: "Do experimento ao monitoramento contínuo de modelos.", icon: MlIcon },
  { title: "Applied AI", text: "Recuperação, LLMs e automações com avaliação e contexto.", icon: AiIcon },
] as const;

export default function Home() {
  return <>
    <section className="hero-stage"><div className="container hero">
      <div className="hero-copy"><span className="eyebrow">Dados • Software • IA</span><h1 className="display">Olá, sou <span>Victor Castro.</span></h1><p>Atuo no desenvolvimento de aplicações, pipelines de dados, modelos de machine learning e soluções com IA, desde a análise do problema até a implementação e o acompanhamento em uso.</p><div className="hero-actions"><Link className="button button-primary" href="/projects">Conheça meu trabalho <DirectionIcon /></Link><a className="button" href="/cv-victor-castro.pdf" target="_blank">Ver currículo <ExternalIcon /></a></div></div>
      <div className="portrait-wrap"><Image className="portrait" src={victorPhoto} alt="Retrato de Victor Castro" priority sizes="(max-width: 800px) 80vw, 34vw"/></div>
    </div></section>
    <section className="container section"><div className="section-head"><div><span className="eyebrow">Trabalho selecionado</span><h2>Alguns dos meus projetos.</h2></div><Link className="text-link icon-link" href="/projects">Ver todos <span className="icon-orbit"><DirectionIcon /></span></Link></div><div className="grid project-grid">{projects.slice(0,3).map(p=><ProjectCard key={p.slug} project={p}/>)}</div></section>
    <section className="container section"><div className="section-head"><div><span className="eyebrow">Áreas de atuação</span><h2>Uma prática, várias camadas.</h2></div></div><div className="grid areas">{areas.map(({title,text,icon:Icon})=><article className="area" key={title}><div className="area-icon"><Icon /></div><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="container section about-slice home-about"><div><span className="eyebrow">Sobre</span><h2>Minha trajetória entre ciência e tecnologia.</h2></div><div><p>Comecei investigando proteínas, vacinas e dados biológicos. Hoje, essa mesma curiosidade aparece na forma como desenho pipelines, modelos e aplicações: entendendo o problema antes de escolher a tecnologia.</p><Link className="journey-link" href="/about"><span className="journey-icon"><JourneyIcon /></span><span><strong>Conheça minha trajetória</strong><small>Da Biotecnologia aos sistemas de dados</small></span><DirectionIcon /></Link></div></section>
    <section className="container section"><div className="cta"><div><span className="eyebrow">Vamos conversar</span><h2>Tem um problema interessante pela frente?</h2><p className="lead">Conte um pouco do contexto. Pode ser uma oportunidade, um projeto ou uma conversa sobre tecnologia e dados.</p></div><a className="button button-primary" href={site.whatsapp} target="_blank" rel="noreferrer"><WhatsAppIcon /> Falar no WhatsApp</a></div></section>
  </>;
}

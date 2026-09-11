import type { Metadata } from "next";
import Link from "next/link";
import { AiIcon, ChartIcon, DataIcon, DirectionIcon, DocumentIcon, ExternalIcon, MlIcon, MonitorIcon, ShieldIcon, SourceIcon, TransformIcon, WorkflowIcon } from "@/components/icons";
import { getProject, projects, statusLabels } from "@/lib/projects";
import { notFound } from "next/navigation";

function iconForStep(step: string) {
  const value = step.toLocaleLowerCase("pt-BR");
  if (/fonte|ons|dados sintéticos|dados tabulares/.test(value)) return SourceIcon;
  if (/document|cadastro/.test(value)) return DocumentIcon;
  if (/parsing|chunk|prepara|padron|feature|ingest/.test(value)) return TransformIcon;
  if (/marts|analític|dashboard/.test(value)) return ChartIcon;
  if (/valida|avalia|aprova|conformidade|qualidade/.test(value)) return ShieldIcon;
  if (/monitor|renova|ciclo/.test(value)) return MonitorIcon;
  if (/workflow|estado/.test(value)) return WorkflowIcon;
  if (/modelo|treino|ensemble|previs/.test(value)) return MlIcon;
  if (/rag|llm|gera|recupera|bm25|índice/.test(value)) return AiIcon;
  return DataIcon;
}
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const p = getProject(slug); if (!p) return {}; return { title: p.title, description: p.summary, alternates: { canonical: `/projects/${p.slug}` }, openGraph: { title: `${p.title} | Victor Castro`, description: p.summary, url: `/projects/${p.slug}` } }; }
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const p = getProject(slug); if (!p) notFound();
  const index = projects.findIndex(x => x.slug === p.slug); const prev = projects[(index - 1 + projects.length) % projects.length]; const next = projects[(index + 1) % projects.length];
  return <><header className={`page-header route-hero case-page-header project-hero-${p.slug}`}><div className="container"><Link className="back-link" href="/projects"><DirectionIcon/> Todos os projetos</Link><div className="case-header"><div><span className={`status status-${p.status}`}>{statusLabels[p.status]}</span><span className="project-area">{p.area}</span><h1 className="page-title">{p.title}</h1><p className="lead">{p.summary}</p><div className="tags">{p.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div></div></div></div></header>
    <article className="container section case-study"><section className="case-intro"><div><span className="eyebrow">Visão geral</span><h2>Contexto antes da tecnologia.</h2><p>{p.overview}</p></div></section>
      <div className="case-grid"><section className="case-panel"><span className="panel-label">O desafio</span><h2>Problema</h2><p>{p.problem}</p></section><section className="case-panel accent-panel"><span className="panel-label">{p.status === "planned" ? "Proposta" : "Construção"}</span><h2>Abordagem</h2><p>{p.approach}</p></section></div>
      <section className="architecture-section"><div className="section-title-row"><div><span className="eyebrow">{p.status === "planned" ? "Arquitetura proposta" : "Arquitetura atual"}</span><h2>Como as partes se conectam.</h2></div></div><ol className="architecture-flow">{p.architecture.map((step, stepIndex) => { const Icon = iconForStep(step); return <li key={step}><span className="flow-icon"><Icon/></span><strong>{step}</strong>{stepIndex < p.architecture.length - 1 && <span className="flow-connector" aria-hidden="true"><DirectionIcon/></span>}</li>; })}</ol></section>
      <div className="case-grid decisions-grid"><section><span className="eyebrow">Decisões</span><h2>Escolhas que orientam o projeto.</h2><ul className="feature-list">{p.decisions.map(x => <li key={x}><span>✓</span>{x}</li>)}</ul></section><section><span className="eyebrow">Próximos passos</span><h2>O que vem depois.</h2><ul className="feature-list next-list">{p.nextSteps.map(x => <li key={x}><span>+</span>{x}</li>)}</ul></section></div>
      <aside className="project-state"><span className={`status status-${p.status}`}>{statusLabels[p.status]}</span><p>O conteúdo reflete o estágio atual do projeto. Implementação, métricas e evidências só aparecem quando podem ser verificadas.</p></aside>
      <section className="project-resource"><div><span className="eyebrow">Código e contexto</span><p>Um estudo de caso sobre decisões, arquitetura e evolução.</p></div>{p.repository && <a className="button" href={p.repository} target="_blank" rel="noreferrer">Abrir repositório <ExternalIcon/></a>}</section>
      <nav className="project-navigation" aria-label="Projetos anterior e seguinte"><Link href={`/projects/${prev.slug}`}><DirectionIcon/><span><small>Navegar</small><strong>Projeto anterior</strong></span></Link><Link href={`/projects/${next.slug}`}><span><small>Continuar</small><strong>Próximo projeto</strong></span><DirectionIcon/></Link></nav>
    </article></>;
}

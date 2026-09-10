"use client";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { DirectionIcon } from "@/components/icons";
import { Project, statusLabels } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  useLayoutEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const update = () => {
      const { width, height } = card.getBoundingClientRect();
      const radius = Number.parseFloat(getComputedStyle(card).borderRadius) || 0;
      const perimeter = 2 * (width + height - 4 * radius) + 2 * Math.PI * radius;
      const topCenter = width / 2 - Math.PI * radius / 3.5;
      card.style.setProperty("--trace-start", `${topCenter / perimeter * 100}%`);
    };
    update();
    const readyFrame = requestAnimationFrame(() => card.classList.add("tracer-ready"));
    const observer = new ResizeObserver(update);
    observer.observe(card);
    return () => { cancelAnimationFrame(readyFrame); observer.disconnect(); };
  }, []);
  return <Link ref={cardRef} className="card project-card" href={`/projects/${project.slug}`}>
    <span className="project-tracer" aria-hidden="true" /><div className="project-card-top"><span className={`status status-${project.status}`}>{statusLabels[project.status]}</span></div>
    <span className="project-area">{project.area}</span><h3>{project.title}</h3><p>{project.summary}</p>
    <div className="tags">{project.tags.slice(0, 3).map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
    <span className="card-action"><span className="sr-only">Abrir detalhes de {project.title}</span><span className="icon-orbit"><DirectionIcon /></span></span>
  </Link>;
}

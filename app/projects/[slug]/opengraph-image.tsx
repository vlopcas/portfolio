import { ImageResponse } from "next/og";
import { getProject, projects, statusLabels } from "@/lib/projects";
export const dynamic = "force-static";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export default async function ProjectImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  const title = project?.title ?? "Projeto";
  const status = project ? statusLabels[project.status] : "Portfólio";
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "#0b1014", color: "#f2f4f5", fontFamily: "Arial" }}>
      <div style={{ display: "flex", justifyContent: "space-between", color: "#f06416", fontSize: 27 }}><span>VC · ESTUDO DE CASO</span><span>{status}</span></div>
      <div style={{ display: "flex", flexDirection: "column" }}><div style={{ fontSize: 86, fontWeight: 800, letterSpacing: -4 }}>{title}</div><div style={{ fontSize: 34, color: "#a8b2bc", marginTop: 18 }}>{project?.area ?? "Software, dados e IA"}</div></div>
      <div style={{ fontSize: 26 }}>Victor Castro · Software, Data & AI Systems</div>
    </div>, size,
  );
}

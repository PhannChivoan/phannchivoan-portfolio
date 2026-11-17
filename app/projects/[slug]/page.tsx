import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import PageFooter from "../../components/PageFooter";
import PageHeader from "../../components/PageHeader";
import ProjectCta from "../../components/project/ProjectCta";
import ProjectHero from "../../components/project/ProjectHero";
import ProjectModules from "../../components/project/ProjectModules";
import ProjectMore from "../../components/project/ProjectMore";
import ProjectOverview from "../../components/project/ProjectOverview";
import ScrollProgress from "../../components/project/ScrollProgress";
import { getProject, projects } from "../../data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return { title: project ? `${project.title} — Voan` : "Project not found" };
}

export default function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
  return (
    <Suspense fallback={<PageHeader />}>
      <ProjectContent params={params} />
    </Suspense>
  );
}

async function ProjectContent({
  params,
}: {
  params: PageProps<"/projects/[slug]">["params"];
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <div className="projectpage">
      <ScrollProgress />
      <PageHeader />
      <main>
        <ProjectHero project={project} />
        <ProjectOverview project={project} />
        <ProjectModules project={project} />
        <ProjectCta project={project} />
        <ProjectMore currentSlug={project.slug} />
      </main>
      <PageFooter />
    </div>
  );
}

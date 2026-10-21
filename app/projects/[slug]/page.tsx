
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/app/data/projectItem";
import { projectDetails } from "@/app/data/projectItem";
import ProjectHero from "@/app/components/ProjectHero";
import ProjectIntro from "@/app/components/ProjectIntro";
import ProjectGallery from "@/app/components/ProjectGallery";
import ProjectNavigation from "@/app/components/ProjectNavigation";
import BackToPortfolio from "@/app/components/BackToPortfolio";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return projectDetails.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <ProjectHero
        title={project.title}
        hero={project.hero}
        location={project.location}
        year={project.year}
        area={project.area}
      />

      <ProjectIntro
        description={project.description}
        location={project.location}
        year={project.year}
        area={project.area}
        image={project.disc}
      />

      {project.plan && (
        <section className="bg-[#0d0d0d] px-5 py-12 md:py-16">
          <div className="mx-auto w-full max-w-[1050px]">
            <Image
              src={project.plan}
              alt={`${project.title} architectural plan`}
              width={1600}
              height={1100}
              className="mx-auto h-auto max-h-[850px] w-full object-contain"
              sizes="(max-width: 768px) 100vw, 1050px"
            />
          </div>
        </section>
      )}

      <ProjectGallery
        gallery={project.gallery}
        projectSlug={project.slug}
      />

      <ProjectNavigation currentSlug={project.slug} />

      <BackToPortfolio />
    </main>
  );
}


import Link from "next/link";
import { projectDetails } from "@/app/data/projectItem";

interface ProjectNavigationProps {
  currentSlug: string;
}

export default function ProjectNavigation({
  currentSlug,
}: ProjectNavigationProps) {
  const currentIndex = projectDetails.findIndex(
    (project) => project.slug === currentSlug
  );

  const previousProject =
    currentIndex > 0
      ? projectDetails[currentIndex - 1]
      : null;

  const nextProject =
    currentIndex < projectDetails.length - 1
      ? projectDetails[currentIndex + 1]
      : null;

  return (
<div className="pointer-events-none relative z-50 mx-6 mt-12 md:fixed md:top-1/2 md:-translate-y-1/2 md:left-0 md:right-0 md:mx-0 md:mt-0">
      <div className="flex items-end justify-between">

        {/* Previous */}

        {previousProject ? (
          <Link
            href={`/projects/${previousProject.slug}`}
         // Previous
className="pointer-events-auto group flex h-[58px] w-[180px] items-center justify-center border border-2 border-white/50 bg-transparent text-center backdrop-blur-none transition-all duration-500 hover:border-white/90"
          >
            <span className="block text-center text-[10px] font-bold tracking-[0.25em] text-white/50 transition-colors duration-500 group-hover:text-white">
              ← PREVIOUS PROJECT
            </span>

        
          </Link>
        ) : (
          <div />
        )}

        {/* Next */}

        {nextProject ? (
          <Link
            href={`/projects/${nextProject.slug}`}
           // Previous
className="pointer-events-auto group flex h-[58px] w-[180px] items-center justify-center font-bold border border-2 border-white/50 bg-transparent text-center backdrop-blur-none transition-all duration-500 hover:border-white/90"
          >
            <span className="block text-center text-[10px] font-bold tracking-[0.25em] text-white/50 transition-colors duration-500 group-hover:text-white" >
              NEXT PROJECT →
            </span>

        
          </Link>
        ) : (
          <div />
        )}

      </div>
    </div>
  );
}


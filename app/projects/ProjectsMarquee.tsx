
export default function ProjectsMarquee() {
  return (
    <div className="projects-marquee" aria-label="Projects">
      <div className="projects-marquee-track">
        {Array.from({ length: 2 }).map((_, groupIndex) => (
          <div
            className="projects-marquee-group"
            key={groupIndex}
            aria-hidden={groupIndex === 1}
          >
            {Array.from({ length: 8 }).map((_, index) => (
              <span className="projects-marquee-word" key={index}>
                PROJECTS
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

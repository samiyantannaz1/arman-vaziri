import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ProcessCard from "./components/ProcessCard";
import GoldenGlow from "./components/GoldenGlow";
import StudioVision from "./components/StudioVision";
import Philosophy from "./components/Philosophy";
export default function Home() {
  return (
    <main className="home-stage">
      <Hero />

      <Projects />
      {/* Philosophy */}
<Philosophy/>

      <section
  className="relative z-20 isolate overflow-hidden px-5 py-20 text-white md:px-10 md:py-32"
  style={{
    background:
      "linear-gradient(to bottom, #242424 0%, #202020 35%, #1c1c1c 75%, #1c1c1c 100%)",
  }}
>

        <GoldenGlow />

        {/* Content */}
        <div className="relative z-10">
          <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <ProcessCard
              number="01"
              title="Start"
              description="We start by studying your project, taking all needed measurements and choosing style for it."
            />

            <ProcessCard
              number="02"
              title="Plan"
              description="Then, we process a point-by-point plan and present several examples for you."
            />

            <ProcessCard
              number="03"
              title="Visualization"
              description="At this stage we create detailed visualization for each room to provide you with an overall picture."
            />

            <ProcessCard
              number="04"
              title="Album"
              description="The design project album with all plans and visualizations is ready."
            />

          </div>
        </div>
      </section>
      <StudioVision/>
    </main>
  );
}
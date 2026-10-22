
import ProcessCard from "../components/ProcessCard";
import GoldenGlow from "../components/GoldenGlow";
import WorkMarquee from "./WorkMarquee";

const workStages = [
  {
    number: "01",
    title: "Start",
    description:
      "We start by studying your project, taking all needed measurements and choosing style for it.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Then, we process a point-by-point plan and present several examples for you.",
  },
  {
    number: "03",
    title: "Visualization",
    description:
      "At this stage we create detailed visualization for each room to provide you with an overall picture.",
  },
  {
    number: "04",
    title: "Album",
    description:
      "The design project album with all plans and visualizations is ready.",
  },
];

export default function WorkStage() {
  return (
    <section
   className="relative z-20 isolate overflow-hidden px-5 py-20 text-white md:px-10 md:py-32"
     style={{
  background: "#1a1a1a",
}}
    >
      <GoldenGlow />
        <div className="pb-[100px]"> 
       <WorkMarquee/>
      </div>

      <div className="relative z-10">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
         
{workStages.map((stage, index) => (
  <div
    key={stage.number}
    className="animate-[stageFloat_5s_ease-in-out_infinite]"
    style={{
      animationDelay: `${index * 0.7}s`,
    }}
  >
    <ProcessCard
      number={stage.number}
      title={stage.title}
      description={stage.description}
    />
  </div>
))}

        </div>
      </div>
    </section>
  );
}

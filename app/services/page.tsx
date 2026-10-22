
import ServiceItem from "./ServiceItem";
import { servicesData } from "./servicesData";

import WorkStage from "./WorkStages";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] px-5 pb-24 pt-36 text-white md:px-12 md:pt-44">
      <div className="mx-auto max-w-6xl">
       <div className="mx-auto mb-20 max-w-6xl text-center md:mb-28">
 <h1 className="text-xl font-light tracking-[0.04em] text-white md:text-3xl lg:text-4xl">
    OUR{" "}
    <span className="font-serif italic text-white/85">
      SERVICES
    </span>
  </h1>

  {/* Golden diamond */}
  <div className="mx-auto mt-8 mb-8 h-2 w-2 rotate-45 bg-[#c9a46a]" />

  {/* Description */}
<p className="mx-auto max-w-3xl animate-[serviceIntro_1.2s_cubic-bezier(0.22,1,0.36,1)_both] text-sm font-light leading-8 tracking-wide text-white/50 md:text-base md:leading-9">
  We transform ideas into{" "}
  <span className="text-white/85">thoughtfully designed spaces</span>,
  combining creativity, functionality, and attention to every detail.
  From the initial concept to the final visualization, every stage is
  shaped around your vision, lifestyle, and unique requirements.
</p>
</div>

        <div className="flex flex-col gap-40 md:gap-52">
          {servicesData.map((service) => (
            <ServiceItem
              key={service.number}
              number={service.number}
              title={service.title}
              image={service.image}
              description={service.description}
              imagePosition={service.imagePosition}
            />
          ))}
        </div>
      </div>
    
      <WorkStage />
    </main>
  );
}


import ServiceItem from "./ServiceItem";
import { servicesData } from "./servicesData";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] px-5 pb-24 pt-36 text-white md:px-12 md:pt-44">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 md:mb-20">
          <span className="mb-5 block text-xs tracking-[0.35em] text-white/45">
            WHAT WE DO
          </span>

          <h1 className="text-4xl font-light tracking-[0.08em] md:text-6xl">
            OUR SERVICES
          </h1>
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
    </main>
  );
}

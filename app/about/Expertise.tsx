
import Image from "next/image";

const expertiseItems = [
  {
    number: "01",
    title: "Architecture",
    image: "/images/about/architecture.png",
    description:
      "Architecture shapes the relationship between form, environment, and the people who experience a space.",
  },
  {
    number: "02",
    title: "Interior Design",
    image: "/images/about/interior-design.png",
    description:
      "Interior design brings spaces to life through materials, textures, light, and carefully considered details.",
  },
  {
    number: "03",
    title: "Spatial Concepts",
    image: "/images/about/spatial-concepts.png",
    description:
      "Spatial concepts explore the balance of geometry, proportion, and light to create a distinct atmosphere.",
  },
];

export default function Expertise() {
  return (
    <section className="relative overflow-hidden bg-[#1a1a1a] px-6 py-24 md:px-12 md:py-32 lg:px-20">
      <div className="mx-auto max-w-[1600px]">
        {/* Section heading */}
        <div className="mb-14 flex items-center gap-4">
          <span className="h-px w-10 bg-[#b49a6c]" />

          <span className="text-[10px] uppercase tracking-[0.3em] text-white/45">
            03 / Expertise
          </span>
        </div>

        {/* Intro */}
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-end">
          <div>
            <span className="mb-5 block text-[10px] uppercase tracking-[0.25em] text-white/40">
              Areas of Focus
            </span>
<h2 className="max-w-2xl text-[clamp(22px,2.8vw,40px)] font-light uppercase leading-[1.15] tracking-[-0.03em]">
  Architecture,
  <br />
  Interior Design
  <span className="text-white/40"> & Spatial Concepts</span>
</h2>
          </div>

          <p className="max-w-md text-sm font-light leading-7 text-white/50 md:justify-self-end">
            Exploring the connection between space, material, and light
            through a considered architectural approach.
          </p>
        </div>

        {/* Expertise cards */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
          {expertiseItems.map((item) => (
            <article key={item.number} className="group min-w-0">
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#242424]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 30vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />

                <div className="pointer-events-none absolute inset-0 bg-black/15 transition-colors duration-500 group-hover:bg-black/0" />
              </div>

              {/* Gold accent */}
              <div className="mb-6 mt-7 h-px w-10 bg-[#b49a6c] transition-all duration-500 group-hover:w-20" />

              {/* Title */}
              <h3 className="text-lg font-light uppercase tracking-[0.16em] text-white md:text-base lg:text-lg">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-5 max-w-sm text-sm font-light leading-7 text-white/50">
                {item.description}
              </p>

              {/* Number */}
              <div className="mt-8 border-t border-white/10 pt-4">
                <span className="text-[10px] tracking-[0.22em] text-white/35">
                  {item.number} / {item.title}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

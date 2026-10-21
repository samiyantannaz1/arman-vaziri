
import Image from "next/image";

export default function Philosophy() {
  return (
    <section className="relative overflow-hidden bg-[#1a1a1a] px-6 py-24 md:px-12 md:py-32 lg:px-20">
      <div className="mx-auto max-w-[1100px]">
        {/* Section label */}
        <div className="mb-16 flex items-center gap-4">
          <span className="h-px w-10 bg-white/40" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/45">
            02 / Design Philosophy
          </span>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Text */}
          <div className="order-2 flex flex-col md:order-1">
            <span className="mb-6 text-xs uppercase tracking-[0.25em] text-white/40">
              The Design Approach
            </span>

           <h2 className="max-w-xl text-[clamp(22px,2.8vw,40px)] font-light uppercase leading-[1.15] tracking-[-0.03em]">
  Beyond
  <br />
  <span className="text-white/40">The Form</span>
</h2>

            <div className="mt-8 max-w-md space-y-5 text-sm font-light leading-7 text-white/55 md:text-base">
              <p>
                Architecture is more than the arrangement of spaces.
                It is a dialogue between light, material, proportion,
                and the way people experience their surroundings.
              </p>

              <p>
                Every detail contributes to the atmosphere of a space,
                creating a balance between simplicity, function,
                and character.
              </p>
            </div>

            {/* Decorative line */}
            <div className="mt-12 flex items-center gap-4">
              <span className="h-px w-16 bg-white/35" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-white/35">
                Form / Material / Light
              </span>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#242424]">
              <Image
                src="/images/about/design-process.png"
                alt="Architectural sketches and material studies"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />

              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to left, rgba(0,0,0,0.3), transparent 45%, rgba(0,0,0,0.2)), rgba(0,0,0,0.12)",
                }}
              />
            </div>

            <div className="mt-4 flex items-center justify-between text-[9px] uppercase tracking-[0.2em] text-white/35">
              <span>Design Process</span>
              <span>Arman Vaziri</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

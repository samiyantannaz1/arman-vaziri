
import Image from "next/image";
import Philosophy from "./Philosophy";
import Expertise from "./Expertise";
import ContactCTA from "./ContactCTA";
import AboutMarquee from "./AboutMarquee";
export default function About() {
  return (
    <main className="min-h-screen  bg-[#1a1a1a]  text-white">
      {/* ABOUT HERO */}
      <section className="px-6 pb-20 pt-40 md:px-12 lg:px-20">
        <div className="mb-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-white/45">
          <span>Home</span>
          <span>/</span>
          <span>About</span>
        </div>
<h1 className="text-[clamp(26px,3.5vw,52px)] font-light uppercase leading-[1.05] tracking-[-0.035em]">
  About
  <br />
  <span className="text-white/40">Arman Vaziri</span>
</h1>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
       <div className="group relative aspect-[4/5] w-full max-w-[520px] overflow-hidden bg-[#171717]">
  <Image
    src="/images/arman.jpg"
    alt="Architecture by Arman Vaziri"
    fill
    priority
    sizes="(max-width: 668px) 100vw, 50vw"
    className="object-cover"
  />

  {/* Black shadow fading over the image */}
{/* Overall dark overlay */}
<div
  className="pointer-events-none absolute inset-0"
  style={{
    background: `
      linear-gradient(
        to right,
        rgba(0, 0, 0, 0.75) 0%,
        rgba(0, 0, 0, 0.3) 25%,
        transparent 50%,
        rgba(0, 0, 0, 0.3) 75%,
        rgba(0, 0, 0, 0.75) 100%
      ),
      rgba(0, 0, 0, 0.25)
    `,
  }}
/>
</div>

          <div className="flex flex-col justify-center py-4 md:py-12">
            <span className="mb-8 text-xs uppercase tracking-[0.3em] text-white/40">
              Architecture & Interior Design
            </span>

            <h2 className="max-w-xl text-3xl font-light leading-[1.25] tracking-tight md:text-5xl">
              Spaces shaped by
              <span className="text-white/40"> form, material and light.</span>
            </h2>

            <div className="mt-8 max-w-md space-y-5 text-sm font-light leading-7 text-white/55 md:text-base">
              <p>
                Arman Vaziri explores architecture and interior design through
                thoughtful forms, carefully selected materials, and a considered
                relationship between light and space.
              </p>

              <p>
                Each project is approached with attention to detail, spatial
                balance, and the character of the place.
              </p>
            </div>

            <div className="mt-12 border-t border-white/15 pt-5">
              <span className="text-[10px] uppercase tracking-[0.25em] text-white/40">
                Personal Approach
              </span>
            </div>
          </div>
        </div>

      </section>
      <AboutMarquee/>
      <Philosophy />
      <AboutMarquee/>
      <Expertise/>
      <AboutMarquee/>
      <ContactCTA/>
    </main>
  );
}

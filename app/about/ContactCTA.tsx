
import Link from "next/link";


export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-[#1a1a1a] px-6 py-24 md:px-12 md:py-32 lg:px-20">
      <div className="mx-auto max-w-[1600px] border-t border-white/15 pt-10 md:pt-14">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-end">
          <div>
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-10 bg-[#b49a6c]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/45">
                04 / Get in Touch
              </span>
            </div>
<h2 className="text-[clamp(22px,2.8vw,40px)] font-light uppercase leading-[1.15] tracking-[-0.03em]">
  Have a project
  <br />
  <span className="text-white/40">in mind?</span>
</h2>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <p className="mb-8 max-w-md text-sm font-light leading-7 text-white/50 md:text-right md:text-base">
              Have an idea or a project in mind?
              Let’s discuss how thoughtful architecture
              and design can bring it to life.
            </p>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-6 border-b border-white/30 pb-4 text-xs uppercase tracking-[0.25em] text-white transition-colors duration-300 hover:border-[#b49a6c] hover:text-[#b49a6c]"
            >
              <span>Let’s Talk</span>

              <span className="inline-block text-lg transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

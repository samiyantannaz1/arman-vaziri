
import Link from "next/link";

export default function BackToPortfolio() {
  return (
    <section className="bg-[#0d0d0d] px-6 py-24 md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1050px]">
        <Link
          href="/"
          className="group flex items-center justify-between border-y border-white/10 py-8 transition-colors duration-500 hover:border-white/30"
        >
          <span className="text-xs tracking-[0.3em] text-white/50 transition-colors duration-500 group-hover:text-white">
            BACK TO PORTFOLIO
          </span>

          <span className="text-lg text-white/50 transition-all duration-500 group-hover:translate-x-2 group-hover:text-white">
            ↗
          </span>
        </Link>
      </div>
    </section>
  );
}


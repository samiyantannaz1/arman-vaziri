
import Link from "next/link";

const navigation = [
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
  <footer className="relative z-50 border-t border-white/10 bg-[#1a1a1a] text-white">
      <div className="mx-auto max-w-[1440px] px-5 pb-6 pt-16 sm:px-8 sm:pt-20 lg:px-12 lg:pt-24">
        {/* Brand */}
        <div className="flex flex-col gap-8 border-b border-white/15 pb-12 sm:pb-16 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Link
              href="/"
              className="inline-block text-xl font-light tracking-[0.18em] sm:text-2xl"
            >
              ARMAN VAZIRI<span className="text-[#b99a68]">.</span>
            </Link>

            <p className="mt-3 text-[10px] tracking-[0.3em] text-white/50 sm:text-xs">
              ARCHITECTURE &amp; DESIGN
            </p>
          </div>

          <div className="max-w-xl">
            <h2 className="text-3xl font-light leading-tight sm:text-4xl lg:text-5xl">
              Let&apos;s create something
              <br className="hidden sm:block" /> timeless.
            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-white/55">
              Architecture shaped around space, material and light.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#b99a68] px-6 py-3 text-xs tracking-[0.12em] transition-colors duration-300 hover:bg-[#b99a68] hover:text-black"
            >
              START A PROJECT
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 py-10 sm:grid-cols-3 sm:py-12 lg:grid-cols-4">
          <div>
            <h3 className="mb-5 text-[10px] tracking-[0.25em] text-white/40">
              EXPLORE
            </h3>

            <nav aria-label="Footer navigation" className="flex flex-col items-start gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-white/75 transition-colors hover:text-[#b99a68]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="mb-5 text-[10px] tracking-[0.25em] text-white/40">
              GET IN TOUCH
            </h3>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm text-white/75 transition-colors hover:text-[#b99a68]"
            >
              Contact Arman <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-white/15 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/45">
            © {new Date().getFullYear()} Arman Vaziri. All rights reserved.
          </p>

          <p className="text-xs text-white/50">
            Website by{" "}
            <span className="text-[#b99a68]">Tannaz Samiyan</span>
          </p>

          <Link
            href="#top"
            className="w-fit text-xs text-white/50 transition-colors hover:text-[#b99a68]"
          >
            BACK TO TOP ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}


"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import useOffcanvas from "@/app/hooks/useOffcanvas";

const links = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function MobileMenu() {
  const pathname = usePathname();

  const {
    isOpen,
    closeOffcanvas,
    toggleOffcanvas,
  } = useOffcanvas();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      {/* Mobile Header */}
    <header className="fixed inset-x-0 top-0 z-[70] flex items-center justify-between px-7 py-5 sm:px-8">
        <Link
          href="/"
          onClick={closeOffcanvas}
          className="relative z-[80] text-sm font-semibold tracking-[0.16em] text-white"
        >
          ARMAN VAZIRI
          <span className="text-[#b99a68]">.</span>
        </Link>

        <button
          type="button"
          onClick={toggleOffcanvas}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
         className="relative z-[80] mr-1 flex h-11 w-11 shrink-0 items-center justify-center text-white"
        >
          <span className="relative flex h-5 w-6 flex-col justify-center">
            <span
              className={`absolute h-px w-6 bg-current transition-transform duration-300 ${
                isOpen ? "rotate-45" : "-translate-y-[4px]"
              }`}
            />
            <span
              className={`absolute h-px w-6 bg-current transition-transform duration-300 ${
                isOpen ? "-rotate-45" : "translate-y-[4px]"
              }`}
            />
          </span>
        </button>
      </header>

      {/* Full-screen Offcanvas */}
      <div
        id="mobile-navigation"
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-[60] flex flex-col bg-[#0d0d0d] px-7 pb-8 pt-28 transition-[opacity,visibility,transform] duration-500 ease-in-out ${
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-3 opacity-0"
        }`}
      >
        <div className="mb-10 flex items-center gap-3">
          <span className="h-px w-8 bg-[#b99a68]" />
          <span className="text-[10px] font-medium tracking-[0.3em] text-white/40">
            NAVIGATION
          </span>
        </div>

        <nav aria-label="Mobile navigation" className="flex flex-col">
          {links.map((link, index) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" &&
                pathname.startsWith(`${link.href}/`));

            return (
              <Link
                key={link.href}
                href={link.href}
                tabIndex={isOpen ? 0 : -1}
                onClick={closeOffcanvas}
                aria-current={isActive ? "page" : undefined}
                className={`group flex items-center justify-between border-b border-white/10 py-4 transition-colors duration-300 ${
                  isActive
                    ? "text-[#b99a68]"
                    : "text-white/85 hover:text-[#b99a68]"
                }`}
              >
                <span className="flex items-center gap-4">
                  <span className="w-5 text-[10px] tracking-wider text-white/30">
                    0{index + 1}
                  </span>

                  <span className="text-3xl font-light tracking-wide">
                    {link.label}
                  </span>
                </span>

                <span
                  aria-hidden="true"
                  className={`text-xl transition-all duration-300 ${
                    isActive
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                  }`}
                >
                  ↗
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto border-t border-white/10 pt-5">
          <p className="text-[10px] tracking-[0.22em] text-white/40">
            ARMAN VAZIRI
          </p>
          <p className="mt-2 text-xs text-white/55">
            Architecture &amp; Design
          </p>
        </div>
      </div>
    </div>
  );
}

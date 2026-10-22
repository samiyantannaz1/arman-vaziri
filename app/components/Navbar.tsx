
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import Container from "./Container";
import MobileMenu from "./MobileMenu";
import useIntroScreen from "@/app/hooks/useIntroScreen";

export default function Navbar() {
  const { isIntroComplete } = useIntroScreen();
  const pathname = usePathname();

  const [lightPosition, setLightPosition] = useState({
    x: 50,
    y: 50,
  });

  const handleMouseMove = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setLightPosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const navLinkClass = (href: string) =>
    `whitespace-nowrap text-[15px] font-semibold tracking-[0.10em] transition-colors duration-300 ${
      pathname === href
        ? "text-[#b99a68]"
        : "text-white/80 hover:text-[#b99a68]"
    }`;

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden md:block">
        <nav className="fixed left-0 top-0 z-50 w-full bg-transparent">
          <Container>
            <div className="relative flex items-end justify-between pt-18 pb-8">
              {/* Left Navigation */}
              <div className="flex flex-1 items-center justify-start gap-10">
                <Link href="/" className={navLinkClass("/")}>
                  Home
                </Link>

                <Link
                  href="/projects"
                  className={navLinkClass("/projects")}
                >
                  Projects
                </Link>

                <Link
                  href="/about"
                  className={navLinkClass("/about")}
                >
                  About
                </Link>
              </div>

              {/* Center Metallic Logo */}
              <Link
                href="/"
                aria-label="Arman Vaziri Home"
                onMouseMove={handleMouseMove}
                className={`group absolute left-1/2 top-8 -translate-x-1/2 whitespace-nowrap transition-opacity duration-700 ${
                  isIntroComplete ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  perspective: "500px",
                }}
              >
                <span
                  className="metallic-logo relative block text-[18px] font-bold uppercase tracking-[0.24em] transition-transform duration-300 ease-out group-hover:[transform:rotateX(5deg)_rotateY(-3deg)]"
                  style={{
                    color: "#e7e7e7",
                    backgroundImage: `radial-gradient(
                      circle at ${lightPosition.x}% ${lightPosition.y}%,
                      #ffffff 0%,
                      #f2f2f2 12%,
                      #a5a5a5 35%,
                      #eeeeee 48%,
                      #737373 65%,
                      #d8d8d8 82%,
                      #ffffff 100%
                    )`,
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    filter:
                      "drop-shadow(0px 1px 0px #ffffff) drop-shadow(0px 2px 0px #999999) drop-shadow(0px 3px 1px rgba(0,0,0,0.45))",
                  }}
                >
                  ARMAN VAZIRI
                </span>
              </Link>

              {/* Right Navigation */}
              <div className="flex flex-1 items-center justify-end gap-10">
                <Link
                  href="/contact"
                  className={navLinkClass("/contact")}
                >
                  Contact
                </Link>

                <Link
                  href="/services"
                  className={navLinkClass("/services")}
                >
                  Services
                </Link>
              </div>
            </div>
          </Container>
        </nav>
      </div>

      {/* Mobile Navbar and Offcanvas Menu */}
      <MobileMenu />
    </>
  );
}

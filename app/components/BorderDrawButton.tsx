
"use client";

interface BorderDrawButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function BorderDrawButton({
  href,
  children,
}: BorderDrawButtonProps) {
  return (
    <a
      href={href}
      className="group relative inline-flex min-w-[220px] items-center justify-center border border-white/30 px-10 py-5"
    >
      {/* Animated top border */}
      <span className="absolute left-0 top-[-1px] h-px w-full origin-left scale-x-0 bg-[#c9a46a] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />

      {/* Animated right border */}
      <span className="absolute right-[-1px] top-0 h-full w-px origin-top scale-y-0 bg-[#c9a46a] transition-transform duration-700 delay-100 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100" />

      {/* Animated bottom border */}
      <span className="absolute bottom-[-1px] right-0 h-px w-full origin-right scale-x-0 bg-[#c9a46a] transition-transform duration-700 delay-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />

      {/* Animated left border */}
      <span className="absolute bottom-0 left-[-1px] h-full w-px origin-bottom scale-y-0 bg-[#c9a46a] transition-transform duration-700 delay-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100" />

      {/* Text */}
      <span className="text-[10px] uppercase tracking-[0.3em] text-white transition-colors duration-500 group-hover:text-[#c9a46a]">
        {children}
      </span>

      {/* Arrow */}
      <span className="ml-5 text-base text-white transition-all duration-500 group-hover:translate-x-2 group-hover:text-[#c9a46a]">
        →
      </span>
    </a>
  );
}


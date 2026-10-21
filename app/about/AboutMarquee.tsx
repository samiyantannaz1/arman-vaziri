
"use client";

const words = Array.from({ length: 8 }, (_, index) => (
  <span key={index} className="about-marquee-word">
    ABOUT ME
  </span>
));

export default function AboutMarquee() {
  return (
    <section
      aria-label="About Arman Vaziri"
      className="about-marquee"
    >
      <div className="about-marquee-track">
        <div className="about-marquee-group">
          {words}
        </div>

        <div className="about-marquee-group" aria-hidden="true">
          {words}
        </div>
      </div>
    </section>
  );
}

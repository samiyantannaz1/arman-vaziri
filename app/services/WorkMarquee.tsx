
"use client";

const words = Array.from({ length: 8 }, (_, index) => (
  <span key={index} className="work-marquee-word">
    WORK STAGES
  </span>
));

export default function WorkMarquee() {
  return (
    <section
      aria-label="Our work process"
      className="work-marquee"
    >
      <div className="work-marquee-track">
        <div className="work-marquee-group">
          {words}
        </div>

        <div className="work-marquee-group" aria-hidden="true">
          {words}
        </div>
      </div>
    </section>
  );
}

"use client";

const words = Array.from({ length: 8 }, (_, index) => (
  <span key={index} className="about-marquee-word">
    START A CONVERSATION
  </span>
));

export default function ContactMarquee() {
  return (
    <section
      aria-label="Start a conversation"
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
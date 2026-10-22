import AboutHero from "./AboutHero";
import Philosophy from "./Philosophy";
import Expertise from "./Expertise";
import ContactCTA from "./ContactCTA";
import AboutMarquee from "./AboutMarquee";
import ContactMarquee from "./ContactMarquee";

export default function About() {
  return (
    <main className="about-page relative min-h-screen bg-[#1a1a1a] text-white">
      <div className="about-page-glow" aria-hidden="true" />

      <div className="relative z-10">
        <AboutHero />

        <AboutMarquee />
        <Philosophy />

        <AboutMarquee />
        <Expertise />

        <ContactMarquee />
        <ContactCTA />
      </div>
    </main>
  );
}
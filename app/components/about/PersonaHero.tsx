import Image from "next/image";
import Reveal from "../Reveal";

const facts = [
  { icon: "fa-solid fa-location-dot", text: "Phnom Penh, Cambodia" },
  { icon: "fa-solid fa-graduation-cap", text: "BSc Software Engineering" },
  { icon: "fa-solid fa-briefcase", text: "Backend Developer Intern" },
  { icon: "fa-solid fa-language", text: "Khmer · English" },
];

export default function PersonaHero() {
  return (
    <section className="phero">
      <div className="container phero-grid">
        <Reveal>
          <div className="availability">
            <span className="dot"></span> User Persona · Available for opportunities
          </div>
          <h1>
            Meet <span>Voan</span>
            <br />
            Full Stack Developer
          </h1>
          <p className="lead">
            A curious builder from Phnom Penh who loves turning ideas into
            clean, scalable web applications — and never stops learning.
          </p>
          <p className="quote">
            “Build a better web, one line of code at a time.”
          </p>
          <div className="facts">
            {facts.map((f) => (
              <span key={f.text}>
                <i className={f.icon}></i> {f.text}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal className="portrait">
          <Image
            src="/my-hero-section.png"
            alt="Voan working on a laptop"
            fill
            preload
            sizes="(max-width: 900px) 100vw, 45vw"
          />
          <div className="badge">
            <strong>Voan</strong>
            <small>Full Stack Developer</small>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

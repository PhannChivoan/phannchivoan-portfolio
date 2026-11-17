import Image from "next/image";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <Reveal className="hero-copy">
          <div className="availability">
            <span className="dot"></span> Available for opportunities
          </div>
          <div className="eyebrow">Hello, I&apos;m</div>
          <h1>
            Hi, I&apos;m <span>Voan</span>
            <br />
            Full Stack Developer
          </h1>
          <p>I build modern web applications and turn ideas into reality.</p>
          <div className="actions">
            <a className="btn primary" href="#projects">
              View My Projects <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a className="btn secondary" href="#contact">
              Contact Me <i className="fa-regular fa-envelope"></i>
            </a>
          </div>
          <div className="socials">
            <a href="https://github.com/" aria-label="GitHub">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://linkedin.com/" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="#" aria-label="YouTube">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="mailto:your@email.com" aria-label="Email">
              <i className="fa-regular fa-envelope"></i>
            </a>
          </div>
        </Reveal>
        <Reveal className="hero-photo">
          <Image
            src="/my-hero-section.png"
            alt="Voan, full stack developer, working on a laptop"
            fill
            preload
            sizes="(max-width: 650px) 100vw, 68vw"
          />
        </Reveal>
      </div>
    </section>
  );
}

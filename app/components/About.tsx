import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

const stats = [
  { icon: "fa-solid fa-code", value: "2+", label: "Projects Completed" },
  { icon: "fa-solid fa-graduation-cap", value: "BSc", label: "Software Engineering" },
  { icon: "fa-regular fa-heart", value: "100%", label: "Passion for Tech" },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <Reveal className="about-photo">
          <Image
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=700&q=85"
            alt="Collaborative technology workspace"
            fill
            sizes="(max-width: 650px) 100vw, 210px"
          />
        </Reveal>
        <Reveal className="about-copy">
          <h2>About Me</h2>
          <div className="underline"></div>
          <p>
            I&apos;m a Full Stack Developer with a passion for technology,
            problem-solving, and continuous learning. I enjoy building scalable
            web applications and exploring new tools and frameworks.
          </p>
          <p>
            When I&apos;m not coding, you can find me gaming, reading, or
            traveling to discover new places.
          </p>
          <Link className="mini-link" href="/about">
            Learn More About Me <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </Reveal>
        <Reveal className="stats">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <i className={s.icon}></i>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

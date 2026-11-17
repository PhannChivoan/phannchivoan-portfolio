import Image from "next/image";
import Reveal from "./Reveal";

const skills = [
  { icon: "fa-brands fa-html5", name: "HTML5" },
  { icon: "fa-brands fa-css3-alt", name: "CSS3" },
  { icon: "fa-brands fa-js", name: "JavaScript" },
  { icon: "fa-brands fa-react", name: "React" },
  { icon: "fa-brands fa-python", name: "Python" },
  { icon: "fa-solid fa-bolt", name: "FastAPI" },
  { icon: "fa-brands fa-laravel", name: "Laravel" },
  { icon: "fa-solid fa-database", name: "MySQL" },
  { icon: "fa-solid fa-database", name: "PostgreSQL" },
  { icon: "fa-brands fa-git-alt", name: "Git" },
  { icon: "fa-brands fa-github", name: "GitHub" },
  { icon: "fa-brands fa-docker", name: "Docker" },
  { icon: "fa-brands fa-aws", name: "AWS" },
  { icon: "fa-solid fa-wind", name: "Tailwind CSS" },
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container skills-row">
        <Reveal className="skills-list">
          <h2>My Skills</h2>
          <p>Technologies and tools I work with:</p>
          <div className="techs">
            {skills.map((s) => (
              <span className="tech" key={s.name}>
                <i className={s.icon}></i> {s.name}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal className="tech-illustration">
          <Image
            src="/skills.png"
            alt="Laptop surrounded by React, JavaScript, Python and code icons"
            width={360}
            height={380}
          />
        </Reveal>
      </div>
    </section>
  );
}

import Reveal from "../Reveal";

const tools = [
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
  { icon: "fa-brands fa-docker", name: "Docker" },
  { icon: "fa-brands fa-aws", name: "AWS" },
];

const day = [
  { time: "08:00", title: "Plan & coffee", text: "Review tasks, pick the day's top priorities." },
  { time: "09:30", title: "Deep work", text: "Build features, write APIs, fix bugs." },
  { time: "14:00", title: "Learn & experiment", text: "Try new tools, read docs, side projects." },
  { time: "20:00", title: "Unwind", text: "researching, reading or music to recharge." },
];

export default function PersonaToolbox() {
  return (
    <section className="psec">
      <div className="container p2">
        <Reveal>
          <h2 className="section-title">Toolbox</h2>
          <p className="psub">Technologies I use every day.</p>
          <div className="ptechs">
            {tools.map((t) => (
              <span className="ptech" key={t.name}>
                <i className={t.icon}></i> {t.name}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <h2 className="section-title">A Day in My Life</h2>
          <p className="psub">How a typical day looks.</p>
          <div className="ptl">
            {day.map((d) => (
              <div className="pev" key={d.time}>
                <small>{d.time}</small>
                <h4>{d.title}</h4>
                <p>{d.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

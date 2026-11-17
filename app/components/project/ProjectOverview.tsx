import type { Project } from "../../data/projects";
import Reveal from "../Reveal";

export default function ProjectOverview({ project }: { project: Project }) {
  const facts = [
    { icon: "fa-solid fa-user", label: "My role", value: project.role },
    { icon: "fa-regular fa-calendar", label: "Year", value: project.year },
    { icon: "fa-solid fa-signal", label: "Status", value: project.status },
    { icon: "fa-solid fa-cubes", label: "Modules", value: `${project.modules.length}` },
  ];

  return (
    <section className="pj-sec">
      <div className="container">
        <Reveal className="pj-facts">
          {facts.map((f) => (
            <div key={f.label}>
              <span className="pj-ico">
                <i className={f.icon}></i>
              </span>
              <span>
                <small>{f.label}</small>
                <strong>{f.value}</strong>
              </span>
            </div>
          ))}
        </Reveal>
        <div className="pj-overview">
          <Reveal className="pj-about from-left">
            <h2 className="pj-kicker">Overview</h2>
            <p>{project.overview}</p>
          </Reveal>
          <Reveal className="pj-stack from-right">
            <h2 className="pj-kicker">Tech Stack</h2>
            <div className="pj-tags">
              {project.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

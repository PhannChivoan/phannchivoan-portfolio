import Image from "next/image";
import type { Project } from "../../data/projects";
import Reveal from "../Reveal";

export default function ProjectModules({ project }: { project: Project }) {
  return (
    <section className="pj-sec">
      <div className="container">
        <h2 className="section-title">System Modules &amp; Features</h2>
        <p className="pj-sub">A walkthrough of what {project.title} can do.</p>
        <div className="pj-mods">
          {project.modules.map((m, i) => {
            const reversed = i % 2 === 1;
            return (
              <div className={`pj-mod${reversed ? " rev" : ""}`} key={m.title}>
                <Reveal className={`pj-mod-media ${reversed ? "from-right" : "from-left"}`}>
                  <div className="pj-glow"></div>
                  <div className="pj-frame">
                    <div className="pj-bar">
                      <i></i>
                      <i></i>
                      <i></i>
                    </div>
                    <div className="pj-frame-img">
                      <Image
                        src={m.image}
                        alt={m.title}
                        fill
                        sizes="(max-width: 900px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </Reveal>
                <Reveal className={`pj-mod-copy ${reversed ? "from-left" : "from-right"}`}>
                  <span className="pj-num">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{m.title}</h3>
                  <p>{m.description}</p>
                  <ul>
                    {m.points.map((p) => (
                      <li key={p}>
                        <i className="fa-solid fa-circle-check"></i> {p}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

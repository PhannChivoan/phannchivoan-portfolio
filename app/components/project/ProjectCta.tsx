import type { Project } from "../../data/projects";
import Reveal from "../Reveal";

export default function ProjectCta({ project }: { project: Project }) {
  return (
    <section className="pj-sec">
      <div className="container">
        <Reveal className="pj-cta">
          <div className="pj-cta-copy">
            <span className="pj-kicker">Outcome</span>
            <h2>See {project.title} in action</h2>
            <p>{project.outcome}</p>
            <a
              className="pj-link"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.liveUrl.replace(/^https?:\/\//, "")}{" "}
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
          <div className="pj-cta-actions">
            <a
              className="btn primary"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a
              className="btn secondary"
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

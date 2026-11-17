import Image from "next/image";
import Link from "next/link";
import type { Project } from "../../data/projects";
import Reveal from "../Reveal";

export default function ProjectHero({ project }: { project: Project }) {
  return (
    <section className="pj-hero">
      <span className="pj-blob one"></span>
      <span className="pj-blob two"></span>
      <div className="container pj-hero-grid">
        <Reveal className="pj-hero-copy">
          <Link className="pj-crumb" href="/#projects">
            <i className="fa-solid fa-arrow-left"></i> All projects
          </Link>
          <div className="availability">
            <span className="dot"></span> {project.status}
          </div>
          <h1>{project.title}</h1>
          <p className="pj-lead">{project.summary}</p>
          <div className="actions">
            <a
              className="btn primary"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Live Site{" "}
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
            <a
              className="btn secondary"
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Source <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </Reveal>
        <Reveal className="pj-hero-media from-right">
          <div className="pj-float">
            <div className="pj-frame">
              <div className="pj-bar">
                <i></i>
                <i></i>
                <i></i>
              </div>
              <div className="pj-frame-img">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  preload
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

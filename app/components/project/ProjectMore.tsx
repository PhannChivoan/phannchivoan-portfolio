import Image from "next/image";
import Link from "next/link";
import { projects } from "../../data/projects";
import Reveal from "../Reveal";

export default function ProjectMore({ currentSlug }: { currentSlug: string }) {
  const others = projects.filter((p) => p.slug !== currentSlug);

  return (
    <section className="pj-sec">
      <div className="container">
        <h2 className="section-title">More Projects</h2>
        <p className="pj-sub">Other work you might like.</p>
        <Reveal className="pj-more">
          {others.map((p) => (
            <Link className="pj-mini" href={`/projects/${p.slug}`} key={p.slug}>
              <div className="pj-mini-img">
                <Image src={p.image} alt={p.alt} fill sizes="(max-width: 900px) 100vw, 33vw" />
              </div>
              <div className="pj-mini-body">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <span>
                  View Project <i className="fa-solid fa-arrow-right"></i>
                </span>
              </div>
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

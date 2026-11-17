"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { projects } from "../data/projects";
import Reveal from "./Reveal";

const GAP = 12;
const COPIES = 3;
const items = Array.from({ length: COPIES }, () => projects).flat();

export default function Projects() {
  const viewRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const view = viewRef.current;
    if (!view) return;

    const card = () => view.children[0] as HTMLElement;
    const step = () => card().offsetWidth + GAP;
    const setWidth = () => step() * projects.length;

    view.scrollLeft = setWidth();

    let idleTimer: ReturnType<typeof setTimeout>;
    const normalize = () => {
      const w = setWidth();
      if (view.scrollLeft < w * 0.5) view.scrollLeft += w;
      else if (view.scrollLeft > w * 1.5) view.scrollLeft -= w;
    };
    const onScroll = () => {
      clearTimeout(idleTimer);
      idleTimer = setTimeout(normalize, 150);
    };

    const timer = setInterval(() => {
      if (pausedRef.current || document.hidden) return;
      const next = Math.round(view.scrollLeft / step()) + 1;
      view.scrollTo({ left: next * step(), behavior: "smooth" });
    }, 2600);

    let dragging = false;
    let moved = false;
    let startX = 0;
    let startLeft = 0;
    const onDown = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      dragging = true;
      moved = false;
      startX = e.clientX;
      startLeft = view.scrollLeft;
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 5) {
        moved = true;
        view.classList.add("dragging");
      }
      view.scrollLeft = startLeft - dx;
    };
    const onUp = () => {
      dragging = false;
      view.classList.remove("dragging");
    };
    const onClick = (e: MouseEvent) => {
      if (moved) {
        e.preventDefault();
        e.stopPropagation();
        moved = false;
      }
    };

    view.addEventListener("scroll", onScroll, { passive: true });
    view.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    view.addEventListener("click", onClick, true);
    window.addEventListener("resize", normalize);
    return () => {
      clearInterval(timer);
      clearTimeout(idleTimer);
      view.removeEventListener("scroll", onScroll);
      view.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      view.removeEventListener("click", onClick, true);
      window.removeEventListener("resize", normalize);
    };
  }, []);

  const pause = () => {
    pausedRef.current = true;
  };
  const resume = () => {
    pausedRef.current = false;
  };

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="projects-head">
          <div>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-sub">Some of my recent work.</p>
          </div>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            View All Projects <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <Reveal
          onMouseEnter={pause}
          onMouseLeave={resume}
          onFocus={pause}
          onBlur={resume}
        >
          <div className="projects-grid" ref={viewRef}>
            {items.map((p, i) => {
              const clone = i < projects.length || i >= projects.length * 2;
              return (
                <article
                  className="project"
                  key={`${p.slug}-${i}`}
                  aria-hidden={clone || undefined}
                >
                  <div className="project-img">
                    <Image
                      src={p.image}
                      alt={p.alt}
                      fill
                      sizes="250px"
                      draggable={false}
                    />
                  </div>
                  <div className="project-body">
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                    <div className="tags">
                      {p.tags.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                    <Link
                      href={`/projects/${p.slug}`}
                      tabIndex={clone ? -1 : undefined}
                      draggable={false}
                    >
                      View Project <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

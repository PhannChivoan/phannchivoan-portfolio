import type { CSSProperties } from "react";
import Reveal from "../Reveal";

const painPoints = [
  "Messy, undocumented codebases",
  "Unclear requirements that change late",
  "Slow feedback loops when deploying",
  "Tutorials that skip real-world problems",
];

const traits = [
  { left: "Introvert", right: "Extrovert", value: 62 },
  { left: "Practical", right: "Creative", value: 78 },
  { left: "Spontaneous", right: "Planner", value: 30 },
  { left: "Solo work", right: "Teamwork", value: 68 },
];

export default function PersonaTraits() {
  return (
    <section className="psec">
      <div className="container p2">
        <Reveal className="card warn">
          <div className="ico">
            <i className="fa-solid fa-triangle-exclamation"></i>
          </div>
          <h3>Pain Points</h3>
          <ul>
            {painPoints.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="card">
          <div className="ico"><i className="fa-solid fa-chart-simple"></i></div>
          <h3>Personality</h3>
          <div className="bars">
            {traits.map((t) => (
              <div className="bar-row" key={t.left}>
                <span>{t.left}</span>
                <div className="track">
                  <div
                    className="fill"
                    style={{ "--w": `${t.value}%` } as CSSProperties}
                  ></div>
                </div>
                <span>{t.right}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

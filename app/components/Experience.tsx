import Reveal from "./Reveal";

const events = [
  {
    date: "2026 — Present",
    title: "Backend Developer Intern",
    place: "Innotech Solution Co, LTD.",
  },
  {
    date: "2023 — Present",
    title: "Bachelor's Degree in Software Engineering",
    place: "BELTEI International University, Phnom Penh",
  },
];

export default function Experience() {
  return (
    <Reveal className="experience">
      <h2>Experience &amp; Education</h2>
      <div className="timeline">
        {events.map((e) => (
          <div className="event" key={e.title}>
            <small>{e.date}</small>
            <h3>{e.title}</h3>
            <p>{e.place}</p>
          </div>
        ))}
      </div>
    </Reveal>
  );
}

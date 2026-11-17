import Reveal from "../Reveal";

export default function PersonaIntro() {
  return (
    <section className="psec">
      <div className="container">
        <h2 className="section-title">Who I Am</h2>
        <p className="psub">The person behind the code.</p>
        <div className="p3">
          <Reveal className="card">
            <div className="ico"><i className="fa-solid fa-user"></i></div>
            <h3>Background</h3>
            <p>
              A Software Engineering student turned developer with hands-on
              experience building web apps from front end to back end. I learn
              best by shipping real projects.
            </p>
          </Reveal>
          <Reveal className="card">
            <div className="ico"><i className="fa-solid fa-bullseye"></i></div>
            <h3>Goals</h3>
            <ul>
              <li>Grow into a confident senior full stack engineer</li>
              <li>Build products that solve real problems</li>
              <li>Master cloud and scalable architecture</li>
            </ul>
          </Reveal>
          <Reveal className="card">
            <div className="ico"><i className="fa-solid fa-heart"></i></div>
            <h3>Motivations</h3>
            <ul>
              <li>Seeing an idea become a working product</li>
              <li>Continuous learning and new tools</li>
              <li>Collaborating with great teams</li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

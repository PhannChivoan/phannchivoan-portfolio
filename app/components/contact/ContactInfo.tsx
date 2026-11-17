import Reveal from "../Reveal";
export default function ContactInfo() {
  return (
    <Reveal>
      <div className="availability">
        <span className="dot"></span> Available for opportunities
      </div>
      <h1>
        Let&apos;s <span>Connect</span>
      </h1>
      <p className="lead">
        Have a project in mind or just want to say hello? Fill in the form and
        I&apos;ll get back to you as soon as I can.
      </p>
      <div className="info">
        <a href="mailto:your@email.com">
          <span className="ico"><i className="fa-regular fa-envelope"></i></span>
          <span>
            <small>Email</small>
            <strong>your@email.com</strong>
          </span>
        </a>
        <div>
          <span className="ico"><i className="fa-solid fa-location-dot"></i></span>
          <span>
            <small>Location</small>
            <strong>Phnom Penh, Cambodia</strong>
          </span>
        </div>
        <div>
          <span className="ico"><i className="fa-regular fa-clock"></i></span>
          <span>
            <small>Response time</small>
            <strong>Usually within 24 hours</strong>
          </span>
        </div>
      </div>
      <div className="socials">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="#" aria-label="YouTube">
          <i className="fa-brands fa-youtube"></i>
        </a>
        <a href="mailto:your@email.com" aria-label="Email">
          <i className="fa-regular fa-envelope"></i>
        </a>
      </div>
    </Reveal>
  );
}

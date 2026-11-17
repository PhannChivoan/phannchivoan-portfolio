import Link from "next/link";
import Reveal from "../Reveal";

export default function PersonaCta() {
  return (
    <section className="psec">
      <div className="container">
        <Reveal className="cta">
          <div>
            <h2>Let&apos;s build something together</h2>
            <p>
              Have a project in mind or just want to say hello? I&apos;d love to
              hear from you.
            </p>
          </div>
          <Link className="pbtn" href="/contact">
            Send Message <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

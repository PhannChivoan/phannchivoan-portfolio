import Link from "next/link";
import Reveal from "./Reveal";

export default function ContactCard() {
  return (
    <Reveal className="contact-card" id="contact">
      <h2>Let&apos;s Connect!</h2>
      <p>
        Have a project in mind or just want to say hello? I&apos;d love to hear
        from you.
      </p>
      <Link href="/contact" className="btn primary">
        Send Message <i className="fa-solid fa-arrow-right"></i>
      </Link>
    </Reveal>
  );
}

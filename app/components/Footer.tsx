import Link from "next/link";
import Year from "./Year";

export default function Footer() {
  return (
    <footer>
      <div className="container footer-row">
        <div className="footer-brand">
          <Link className="logo" href="/">
            <i className="fa-solid fa-code"></i> Voan
          </Link>
          <p>Building a better web, one line of code at a time.</p>
        </div>
        <div className="footer-links">
          <a href="https://github.com/">GitHub ↗</a>
          <a href="https://linkedin.com/">LinkedIn ↗</a>
          <a href="#">YouTube ↗</a>
          <a href="mailto:your@email.com">Email ↗</a>
        </div>
        <div className="copyright">
          © <Year /> Voan. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

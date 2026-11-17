import Link from "next/link";

export default function PageHeader() {
  return (
    <header>
      <nav className="container">
        <Link className="logo" href="/">
          <i className="fa-solid fa-code"></i> Voan
        </Link>
        <Link className="back" href="/">
          <i className="fa-solid fa-arrow-left"></i> Back to Portfolio
        </Link>
        <a className="download hide-md" href="/cv.pdf" download>
          Download CV <i className="fa-solid fa-download"></i>
        </a>
      </nav>
    </header>
  );
}

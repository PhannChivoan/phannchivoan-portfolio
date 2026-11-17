"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#interests", label: "Interests" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className="container">
        <Link className="logo" href="/">
          <i className="fa-solid fa-code"></i> Voan
        </Link>
        <button
          className="menu"
          aria-label="Open navigation"
          onClick={() => setOpen((o) => !o)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <ul className={`nav-links${open ? " open" : ""}`}>
          {links.map((link, i) => (
            <li key={link.href}>
              <a
                className={i === 0 ? "active" : undefined}
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
        <a className="download" href="/cv.pdf" download>
          Download CV <i className="fa-solid fa-download"></i>
        </a>
      </nav>
    </header>
  );
}

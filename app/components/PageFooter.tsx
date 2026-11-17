import Link from "next/link";
import Year from "./Year";

export default function PageFooter() {
  return (
    <footer className="subfooter">
      <div className="container footer-row">
        <Link className="logo" href="/">
          <i className="fa-solid fa-code"></i> Voan
        </Link>
        <div>
          © <Year /> Voan. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

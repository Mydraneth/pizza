import { Link, useLocation } from "react-router-dom";
import logo from "../../images/iteration-1-images/logo.svg";

export default function Header() {
  const location = useLocation();
  const headerClass =
    location.pathname === "/" ? "header-home" : "header-internal";
  return (
    <header id="header" className={headerClass}>
      <Link to="/">
        <img src={logo} alt="Pizza logo" />
      </Link>
    </header>
  );
}

import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <h1>KOD ACIKTIRIR PİZZA, DOYURUR</h1>
        <Link id="order-link" to="/order">
          ACIKTIM
        </Link>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          The Social Network
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/profil">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Inscription
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/socialwall">
                The-Wall
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

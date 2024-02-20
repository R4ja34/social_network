import { useAtom } from "jotai";
import { jwtAtom } from "../atoms/jwtAtom";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [jwt, setJwt] = useAtom(jwtAtom);
  const navigate = useNavigate();

  // Fonction de déconnexion
  const handleLogout = () => {
    // Effacer le jeton JWT de l'état local
    setJwt(null);
    // Rediriger vers la page de connexion
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Home
        </a>
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
              <a className="nav-link" href="/profil">
                Profile
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/documentation">
                Documentation
              </a>
            </li>
          </ul>
          {jwt && (
            <button onClick={handleLogout} className="btn btn-outline-danger">
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

import LoginForm from "../components/LoginForm";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function Home() {
  return (
    <div>
      <h1 className="text-center py-5">Bienvenue sur The Social Network</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>
              Avec TSN, partagez et restez en contact avec votre entourage.
            </h3>
          </div>
          <div className="col-md-8">
            <LoginForm />
            {/* Utilisation du composant Link pour rediriger vers la page d'inscription */}
            <Link to="/register">
              <Button variant="secondary">Créer un compte</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

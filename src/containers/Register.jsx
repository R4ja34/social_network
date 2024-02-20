import RegisterForm from "../components/RegisterForm";

export default function Register() {
  // state
  // comportement
  // affichage
  return (
    <div>
      <h1 className="text-center py-5">Bienvenue sur The Social Network</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>
              crée vite ton compte est retrouve toutes les news de ton
              entourage.
            </h3>
          </div>
          <div className="col-md-8">
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
}

import LoginForm from "../components/LoginForm";

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
          </div>
        </div>
      </div>
    </div>
  );
}

import { useAtom } from "jotai";
import { jwtAtom } from "../atoms/jwtAtom";
import { useNavigate } from "react-router-dom";

function SocialWall() {
  const [jwt] = useAtom(jwtAtom);
  const navigateTo = useNavigate();

  // Si l'utilisateur n'est pas connecté, redirigez-le vers la page de connexion
  if (!jwt) {
    navigateTo("/profil");
  }

  // Si l'utilisateur est connecté, affichez le contenu du Social Wall
  return (
    <div>
      <h1>Social Wall</h1>
      {/* Ajoutez ici le contenu du Social Wall */}
    </div>
  );
}

export default SocialWall;

import { useAtom } from "jotai";
import { jwtAtom } from "../atoms/jwtAtom";
import { useNavigate } from "react-router-dom";

function Profil() {
  const [jwt] = useAtom(jwtAtom);
  const navigateTo = useNavigate();

  // state
  // Si l'utilisateur n'est pas connecté, redirigez-le vers la page de connexion
  if (!jwt) {
    navigateTo("/profil");
  }

  // comportement

  // affichage
  return (
    <div>
      <div className="py-5 h-100">
        <div className="justify-content-center align-items-center h-100">
          <div className="lg-9 xl-7">
            <div className="card">
              <div
                className="rounded-top text-white d-flex flex-row"
                style={{ backgroundColor: "#000", height: "200px" }}
              >
                <div
                  className="ms-4 mt-5 d-flex flex-column"
                  style={{ width: "150px" }}
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp" // ici mettre l'image de profil
                    alt="Generic placeholder image"
                    className="mt-4 mb-2 img-thumbnail"
                    style={{ width: "150px", zIndex: "1" }}
                  />
                  <button
                    className="btn btn-outline-dark"
                    type="button"
                    style={{ zIndex: "1" }}
                  >
                    Modifier
                  </button>
                </div>
                <div className="ms-3" style={{ marginTop: "150px" }}>
                  <h5>Name user</h5>
                </div>
              </div>
              <div
                className="p-4 text-black"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <div className="d-flex justify-content-end text-center py-1">
                  <div>
                    <p className="mb-1 h5">253</p>
                    <p className="small text-muted mb-0">Poste</p>
                  </div>
                  <div className="px-3">
                    <p className="mb-1 h5">1026</p>
                    <p className="small text-muted mb-0">Followers</p>
                  </div>
                  <div>
                    <p className="mb-1 h5">478</p>
                    <p className="small text-muted mb-0">Following</p>
                  </div>
                </div>
              </div>
              <div className="card-body text-black p-4">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">Description</p>
                  <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                    <p className="font-italic mb-1">Web Developer</p>
                    <p className="font-italic mb-1">Lives in New York</p>
                    <p className="font-italic mb-0">Photographer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profil;

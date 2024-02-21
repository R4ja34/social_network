import { useEffect, useState } from "react";
import Cookies from "js-cookie";

function Profil() {
  // State
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUserData, setEditedUserData] = useState({
    username: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedUserData({ ...editedUserData, [name]: value });
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditedUserData({
      username: userData.username,
      description: userData.description,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = Cookies.get("jwt");
      if (!token) {
        console.log("JWT token not found");
        return;
      }
      const response = await fetch(
        "http://localhost:1337/api/users-permissions/users/me",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            username: editedUserData.username,
            description: editedUserData.description,
          }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        setUserData(data);
        setIsEditing(false);
      } else {
        console.log("Failed to update data:", response.statusText);
      }
    } catch (error) {
      console.log("Error updating data:", error);
    }
  };

  useEffect(() => {
    let isMounted = true; // Utilisé pour éviter les fuites de mémoire
    const fetchData = async () => {
      try {
        const token = Cookies.get("jwt");
        if (!token) {
          console.log("JWT token not found");
          return;
        }
        const response = await fetch("http://localhost:1337/api/users/me", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          if (isMounted) {
            setUserData(data);
          }
        } else {
          console.log("Failed to fetch data:", response.statusText);
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();

    return () => {
      isMounted = false; // Définit isMounted à false lors du démontage du composant
    };
  }, []);

  // Affichage
  return (
    <div>
      <div className="py-5 h-100">
        {userData && (
          <div className="justify-content-center align-items-center h-100">
            <div className="lg-9 xl-7">
              <div className="card">
                <form onSubmit={handleSubmit}>
                  <div
                    className="rounded-top text-white d-flex flex-row"
                    style={{ backgroundColor: "#000", height: "200px" }}
                  >
                    <div
                      className="ms-4 mt-5 d-flex flex-column"
                      style={{ width: "150px" }}
                    >
                      <img
                        src={userData.profileImage}
                        alt="Profile"
                        className="mt-4 mb-2 img-thumbnail"
                        style={{ width: "150px", zIndex: "1" }}
                      />
                      {isEditing ? (
                        <button
                          className="btn btn-outline-dark"
                          type="submit"
                          style={{ zIndex: "1" }}
                        >
                          Enregistrer
                        </button>
                      ) : (
                        <button
                          className="btn btn-outline-dark"
                          type="button"
                          style={{ zIndex: "1" }}
                          onClick={handleEdit}
                        >
                          Modifier
                        </button>
                      )}
                    </div>
                    <div className="ms-3" style={{ marginTop: "150px" }}>
                      {isEditing ? (
                        <input
                          type="text"
                          name="username"
                          value={editedUserData.username}
                          onChange={handleChange}
                        />
                      ) : (
                        <h5>{userData.username}</h5>
                      )}
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
                      <div
                        className="p-4"
                        style={{ backgroundColor: "#f8f9fa" }}
                      >
                        {isEditing ? (
                          <textarea
                            name="description"
                            value={editedUserData.description || ""}
                            onChange={handleChange}
                          />
                        ) : (
                          <p className="font-italic mb-1">
                            {userData.description || ""}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profil;

import { useEffect } from "react";
import Cookies from "js-cookie";

function NewPost() {
  useEffect(() => {
    const token = Cookies.get("jwt"); // Remplacez par votre token JWT

    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:1337/api/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Ajoutez le jeton d'authentification Bearer
          },
          body: JSON.stringify({
            user: userId,
            text: text,
          }),
        });
        if (response.ok) {
          console.log("Data fetched successfully");
          const data = await response.json();
          console.log(data);
        } else {
          console.log("Failed to fetch data:", response.statusText);
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []); // Add an empty dependency array to run this effect only once when the component mounts

  return (
    <div>
      <h1>New Post</h1>
    </div>
  );
}

export default NewPost;

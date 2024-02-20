import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./containers/Home";
import Profil from "./containers/Profil";
import Register from "./containers/Register";
import SocialWall from "./containers/SocialWall";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/register" element={<Register />} />
          <Route path="/socialwall" element={<SocialWall />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

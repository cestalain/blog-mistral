import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppNavbar from "./components/Navbar";
import Accueil from "./pages/Accueil";
import Aquarelle from "./pages/Aquarelle";
import Petanque from "./pages/Petanque";
import Auvergne from "./pages/Auvergne";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/aquarelle" element={<Aquarelle />} />
        <Route path="/aquarelle/:subCategory" element={<Aquarelle />} />
        <Route path="/petanque" element={<Petanque />} />
        <Route path="/auvergne" element={<Auvergne />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

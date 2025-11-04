import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import About from "./pages/About";
import AllHeroes from "./pages/AllHeroes";
import SpecialHeroes from "./pages/SpecialHeroes";
import OldHeroes from "./pages/OldHeroes";
import NewHeroes from "./pages/NewHeroes";
import Cart from "./pages/Cart";
import "./App.css";

export default function App() {
  return (
    <div className="app-container d-flex flex-column min-vh-100">
      <Navbar />

      <main className="app-content flex-grow-1">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/all-heroes" element={<AllHeroes />} />
          <Route path="/special-heroes" element={<SpecialHeroes />} />
          <Route path="/old-heroes" element={<OldHeroes />} />
          <Route path="/new-heroes" element={<NewHeroes />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

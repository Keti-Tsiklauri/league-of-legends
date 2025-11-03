import Navbar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Page1 from "./pages/SpecialHeroes";
import Page2 from "./pages/OldHeroes";
import Page3 from "./pages/NewHeroes";
import SpecialHeroes from "./pages/SpecialHeroes";
import OldHeroes from "./pages/OldHeroes";
import NewHeroes from "./pages/NewHeroes";
import AllHeroes from "./pages/AllHeroes";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/all-heroes" element={<AllHeroes />} />
        <Route path="/special-heroes" element={<SpecialHeroes />} />
        <Route path="/old-heroes" element={<OldHeroes />} />
        <Route path="/new-heroes" element={<NewHeroes />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

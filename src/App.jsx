import Navbar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </>
  );
}

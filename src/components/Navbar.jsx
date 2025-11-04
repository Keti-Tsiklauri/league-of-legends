import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-brand">
          League of Legends
        </NavLink>

        <button className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <NavLink to="/" end onClick={() => setMenuOpen(false)}>
            Main
          </NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
          <NavLink to="/all-heroes" onClick={() => setMenuOpen(false)}>
            All Heroes
          </NavLink>
          <NavLink to="/special-heroes" onClick={() => setMenuOpen(false)}>
            Special Heroes
          </NavLink>
          <NavLink to="/old-heroes" onClick={() => setMenuOpen(false)}>
            Old Heroes
          </NavLink>
          <NavLink to="/new-heroes" onClick={() => setMenuOpen(false)}>
            New Heroes
          </NavLink>
          <NavLink to="/cart" onClick={() => setMenuOpen(false)}>
            Cart
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

import { NavLink } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-brand">
          League of Legends
        </NavLink>

        <div className="navbar-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Main
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>
          <NavLink
            to="/all-heroes"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            All Heroes
          </NavLink>
          <NavLink
            to="/special-heroes"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Special Heroes
          </NavLink>
          <NavLink
            to="/old-heroes"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Old Heroes
          </NavLink>
          <NavLink
            to="/new-heroes"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            New Heroes
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Cart
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h2 className="logo">League of Legends</h2>

        {/* Desktop Links */}
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Main
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/page1" onClick={() => setIsOpen(false)}>
              Page 1
            </Link>
          </li>
          <li>
            <Link to="/page2" onClick={() => setIsOpen(false)}>
              Page 2
            </Link>
          </li>
          <li>
            <Link to="/page3" onClick={() => setIsOpen(false)}>
              Page 3
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

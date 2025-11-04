import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} League of Legends Fan Site
        </p>
        <div className="social-icons">
          <a
            href="https://www.facebook.com/LeagueOfLegends"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon facebook"
          >
            <FaFacebook color="white" />
          </a>
          <a
            href="https://twitter.com/LeagueOfLegends"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon twitter"
          >
            <FaTwitter color="white" />
          </a>
          <a
            href="https://www.instagram.com/leagueoflegends/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon instagram"
          >
            <FaInstagram color="white" />
          </a>
        </div>
      </div>
    </footer>
  );
}

import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <p className="mb-2 mb-md-0">
          &copy; {new Date().getFullYear()} League of Legends Fan Site
        </p>

        <div className="d-flex gap-3">
          <a
            href="https://www.facebook.com/LeagueOfLegends"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon bg-primary rounded-circle d-flex justify-content-center align-items-center"
            style={{ width: 40, height: 40 }}
          >
            <FaFacebook color="white" />
          </a>

          <a
            href="https://twitter.com/LeagueOfLegends"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon bg-info rounded-circle d-flex justify-content-center align-items-center"
            style={{ width: 40, height: 40 }}
          >
            <FaTwitter color="white" />
          </a>

          <a
            href="https://www.instagram.com/leagueoflegends/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon bg-danger rounded-circle d-flex justify-content-center align-items-center"
            style={{ width: 40, height: 40 }}
          >
            <FaInstagram color="white" />
          </a>
        </div>
      </div>
    </footer>
  );
}

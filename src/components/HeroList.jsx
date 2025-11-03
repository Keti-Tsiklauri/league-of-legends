import React from "react";
import "./HeroList.css"; // separate CSS file for hero animations

export default function HeroList({ champions, title }) {
  return (
    <div className="container mt-5">
      <h1 className="display-4 text-center mb-4">{title}</h1>

      <div className="row">
        {champions.map((champion) => (
          <div key={champion.id} className="col-md-3 col-sm-6 mb-4">
            <div className="hero-card-wrapper">
              <div className="card h-100 shadow-sm hero-card">
                <img
                  src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
                  className="card-img-top"
                  alt={champion.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{champion.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {champion.title}
                  </h6>
                  <p className="card-text">
                    {champion.lore
                      ? champion.lore.substring(0, 100) + "..."
                      : "No lore available"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

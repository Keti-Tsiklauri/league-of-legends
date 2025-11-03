import React from "react";
import "./HeroList.css";

export default function HeroList({ champions, title }) {
  return (
    <div className="container mt-5">
      <h1 className="display-4 text-center mb-4">{title}</h1>

      <div className="row">
        {champions.map((champion) => {
          const price = Math.floor(Math.random() * 6300) + 450;
          const passiveName = champion.passive?.name || "Passive Unknown";
          const spellsNames = champion.spells?.map((spell) => spell.name) || [
            "Ability Unknown",
          ];

          return (
            <div key={champion.id} className="col-md-3 col-sm-6 mb-4 d-flex">
              <div className="hero-card-wrapper flex-fill">
                <div className="card h-100 shadow-sm hero-card d-flex flex-column">
                  <img
                    src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
                    className="card-img-top"
                    alt={champion.name}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{champion.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {champion.title}
                    </h6>
                    <p className="card-text flex-grow-1">
                      <strong>Abilities:</strong> {passiveName}
                      {spellsNames.length > 0 && `, ${spellsNames.join(", ")}`}
                    </p>
                    <p className="card-text mt-auto">
                      <strong>Price:</strong> {price} RP
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

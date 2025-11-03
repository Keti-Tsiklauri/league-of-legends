import React, { useEffect, useState } from "react";
import "./HeroList.css";

export default function HeroList({ champions, title }) {
  const [boughtHeroes, setBoughtHeroes] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const boughtIds = storedCart.map((hero) => hero.id);
    setBoughtHeroes(boughtIds);
  }, []);

  const handleAddToCart = (hero) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find((item) => item.id === hero.id);

    if (!existing) {
      cart.push({
        ...hero,
        quantity: 1,
        price: Math.floor(Math.random() * 6300) + 450,
      });
      localStorage.setItem("cart", JSON.stringify(cart));
      setBoughtHeroes([...boughtHeroes, hero.id]); // update state
    }
  };

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
          const isBought = boughtHeroes.includes(champion.id);

          return (
            <div key={champion.id} className="col-md-3 col-sm-6 mb-4 d-flex">
              <div className="hero-card-wrapper flex-fill">
                <div className="card h-100 shadow-sm hero-card d-flex flex-column position-relative">
                  <img
                    src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
                    className="card-img-top"
                    alt={champion.name}
                  />
                  {isBought && (
                    <span
                      className="badge bg-success position-absolute"
                      style={{ top: "10px", right: "10px", fontSize: "1rem" }}
                    >
                      Bought
                    </span>
                  )}
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{champion.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {champion.title}
                    </h6>
                    <p className="card-text flex-grow-1">
                      <strong>Abilities:</strong> {passiveName}
                      {spellsNames.length > 0 && `, ${spellsNames.join(", ")}`}
                    </p>
                    <p className="card-text">
                      <strong>Price:</strong> {price} RP
                    </p>
                    {!isBought && (
                      <button
                        className="btn btn-primary mt-2"
                        onClick={() => handleAddToCart(champion)}
                      >
                        Buy
                      </button>
                    )}
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

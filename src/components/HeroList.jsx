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
      setBoughtHeroes([...boughtHeroes, hero.id]);
    }
  };

  return (
    <div className="hero-list-container">
      <h1 className="hero-list-title">{title}</h1>

      <div className="heroes-grid">
        {champions.map((champion) => {
          const price = Math.floor(Math.random() * 6300) + 450;
          const passiveName = champion.passive?.name || "Passive Unknown";
          const spellsNames = champion.spells?.map((spell) => spell.name) || [
            "Ability Unknown",
          ];
          const isBought = boughtHeroes.includes(champion.id);

          return (
            <div key={champion.id} className="hero-card-wrapper">
              <div className="hero-card">
                <img
                  src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
                  alt={champion.name}
                />
                {isBought && <span className="bought-badge">Bought</span>}
                <div className="card-body">
                  <h5 className="card-title">{champion.name}</h5>
                  <h6 className="card-subtitle">{champion.title}</h6>
                  <p className="card-text">
                    <strong>Abilities:</strong> {passiveName}
                    {spellsNames.length > 0 && `, ${spellsNames.join(", ")}`}
                  </p>
                  <p className="card-text">
                    <strong>Price:</strong> {price} RP
                  </p>
                  {!isBought && (
                    <button
                      className="buy-btn"
                      onClick={() => handleAddToCart(champion)}
                    >
                      Buy
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

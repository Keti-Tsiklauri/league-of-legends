import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About League of Legends</h1>

      <p>
        <strong>League of Legends</strong> (LoL) is a multiplayer online battle
        arena (MOBA) game developed and published by Riot Games. Released in
        2009, it has become one of the most popular and influential games in the
        world.
      </p>

      <h2 className="section-title">History & Creation</h2>
      <p>
        League of Legends was created by Riot Games, founded by Brandon Beck and
        Marc Merrill in 2006. The game was inspired by the Warcraft III mod
        “Defense of the Ancients (DotA)” and was designed to provide a
        competitive, team-based experience that is easy to pick up but hard to
        master.
      </p>

      <h2 className="section-title">Gameplay & Features</h2>
      <p>
        Players assume the role of a "champion" with unique abilities, and work
        in teams to destroy the opposing team's Nexus, the core building located
        in their base. League of Legends features regular updates, ranked modes,
        seasonal events, and a vast roster of over 160 champions, each with
        their own lore and abilities.
      </p>

      <h2 className="section-title">Popularity & User Base</h2>
      <p>
        LoL has millions of active players worldwide. Riot Games reports that at
        peak times, there are over 8 million players online simultaneously,
        making it one of the most played PC games globally. The game also has a
        huge esports presence, including the League of Legends World
        Championship, which attracts millions of viewers each year.
      </p>

      <h2 className="section-title">Why It's Considered the Best</h2>
      <ul>
        <li>Constant updates and new champions keep the game fresh.</li>
        <li>Deep strategic gameplay combined with fast-paced action.</li>
        <li>A strong global esports scene and competitive community.</li>
        <li>Rich lore and diverse champions for a variety of playstyles.</li>
        <li>
          Free-to-play model with cosmetic purchases, accessible to everyone.
        </li>
      </ul>

      <p>
        League of Legends has had a huge impact on gaming culture, shaping the
        MOBA genre and esports as we know them today.
      </p>
    </div>
  );
}

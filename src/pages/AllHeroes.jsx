import React, { useEffect, useState } from "react";
import HeroList from "../components/HeroList";
import "./AllHeroes.css";

export default function AllHeroes() {
  const [champions, setChampions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChampions = async () => {
      try {
        const res = await fetch(
          "https://ddragon.leagueoflegends.com/cdn/13.23.1/data/en_US/champion.json"
        );

        if (!res.ok) {
          throw new Error("Failed to fetch all champion list");
        }

        const data = await res.json();
        const championList = Object.values(data.data);

        const detailedChampions = await Promise.all(
          championList.map(async (champ) => {
            const res = await fetch(
              `https://ddragon.leagueoflegends.com/cdn/13.23.1/data/en_US/champion/${champ.id}.json`
            );

            if (!res.ok) {
              throw new Error(`Failed to fetch data for ${champ.id}`);
            }

            const champData = await res.json();
            return champData.data[champ.id];
          })
        );

        setChampions(detailedChampions);
      } catch (error) {
        console.error("Error fetching champions:", error);
        setError("Unable to load champions. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchChampions();
  }, []);

  if (loading) {
    return <p className="status-message">Loading champions...</p>;
  }

  if (error) {
    return <p className="status-message error">{error}</p>;
  }

  return (
    <HeroList champions={champions} title="All League of Legends Champions" />
  );
}

import React, { useEffect, useState } from "react";
import HeroList from "../components/HeroList";

export default function AllHeroes() {
  const [champions, setChampions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChampions = async () => {
      try {
        // 1️⃣ Fetch all champion summaries
        const res = await fetch(
          "https://ddragon.leagueoflegends.com/cdn/13.23.1/data/en_US/champion.json"
        );
        const data = await res.json();
        const championList = Object.values(data.data);

        // 2️⃣ Fetch each champion’s details (abilities)
        const detailedChampions = await Promise.all(
          championList.map(async (champ) => {
            const res = await fetch(
              `https://ddragon.leagueoflegends.com/cdn/13.23.1/data/en_US/champion/${champ.id}.json`
            );
            const champData = await res.json();
            return champData.data[champ.id];
          })
        );

        setChampions(detailedChampions);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching champions:", error);
        setLoading(false);
      }
    };

    fetchChampions();
  }, []);

  if (loading) return <p className="text-center mt-5">Loading champions...</p>;

  return (
    <HeroList champions={champions} title="All League of Legends Champions" />
  );
}

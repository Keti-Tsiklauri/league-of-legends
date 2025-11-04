import { useEffect, useState } from "react";
import HeroList from "../components/HeroList";
import "./OldHeroes.css";

export default function OldHeroes() {
  const [champions, setChampions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChampions = async () => {
      try {
        const versionsRes = await fetch(
          "https://ddragon.leagueoflegends.com/api/versions.json"
        );
        if (!versionsRes.ok) throw new Error("Failed to fetch versions");

        const versions = await versionsRes.json();
        const latestVersion = versions[0];

        const res = await fetch(
          `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/en_US/champion.json`
        );
        if (!res.ok) throw new Error("Failed to fetch champions");

        const data = await res.json();
        const champsArray = Object.values(data.data);

        const oldHeroesNames = [
          "Annie",
          "Ashe",
          "Garen",
          "Master Yi",
          "Alistar",
        ];

        const old = champsArray.filter((c) => oldHeroesNames.includes(c.name));

        const detailedChampions = await Promise.all(
          old.map(async (champ) => {
            const res = await fetch(
              `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/en_US/champion/${champ.id}.json`
            );
            if (!res.ok)
              throw new Error(`Failed to fetch data for ${champ.id}`);

            const champData = await res.json();
            return champData.data[champ.id];
          })
        );

        setChampions(detailedChampions);
      } catch (error) {
        console.error("Error fetching old champions:", error);
        setError("Unable to load old champions. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchChampions();
  }, []);

  if (loading) {
    return <p className="status-message">Loading old champions...</p>;
  }

  if (error) {
    return <p className="status-message error">{error}</p>;
  }

  return <HeroList champions={champions} title="Old Heroes" />;
}

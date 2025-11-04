import { useEffect, useState } from "react";
import HeroList from "../components/HeroList";
import "./NewHeroes.css";

export default function NewHeroes() {
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
        if (!res.ok) throw new Error("Failed to fetch champions list");

        const data = await res.json();
        const champsArray = Object.values(data.data);

        const newHeroesNames = ["Viego", "Seraphine", "K'Sante", "Nilah"];
        const recent = champsArray.filter((c) =>
          newHeroesNames.includes(c.name)
        );

        const detailedChampions = await Promise.all(
          recent.map(async (champ) => {
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
        console.error("Error fetching new champions:", error);
        setError("Unable to load new champions. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchChampions();
  }, []);

  if (loading) {
    return <p className="status-message">Loading new champions...</p>;
  }

  if (error) {
    return <p className="status-message error">{error}</p>;
  }

  return <HeroList champions={champions} title="New Heroes" />;
}

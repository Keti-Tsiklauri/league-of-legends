import { useEffect, useState } from "react";
import HeroList from "../components/HeroList";
import "./SpecialHeroes.css";

export default function SpecialHeroes() {
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

        const specialNames = ["Ahri", "Jinx", "Ekko", "Yasuo", "Lux"];
        const special = champsArray.filter((c) =>
          specialNames.includes(c.name)
        );

        const detailedResults = await Promise.allSettled(
          special.map(async (champ) => {
            const res = await fetch(
              `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/en_US/champion/${champ.id}.json`
            );
            if (!res.ok)
              throw new Error(`Failed to fetch data for ${champ.id}`);
            const champData = await res.json();
            return champData.data[champ.id];
          })
        );

        const successfulChampions = detailedResults
          .filter((result) => result.status === "fulfilled")
          .map((result) => result.value);

        setChampions(successfulChampions);
      } catch (err) {
        console.error("Error fetching special champions:", err);
        setError("Unable to load special champions. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchChampions();
  }, []);

  if (loading)
    return <p className="status-message">Loading special champions...</p>;
  if (error) return <p className="status-message error">{error}</p>;

  return <HeroList champions={champions} title="Special Heroes" />;
}

import { useEffect, useState } from "react";
import HeroList from "../components/HeroList";

export default function OldHeroes() {
  const [champions, setChampions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChampions = async () => {
      try {
        // 1️⃣ Get latest version
        const versionsRes = await fetch(
          "https://ddragon.leagueoflegends.com/api/versions.json"
        );
        const versions = await versionsRes.json();
        const latestVersion = versions[0];

        // 2️⃣ Fetch all champions
        const res = await fetch(
          `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/en_US/champion.json`
        );
        const data = await res.json();
        const champsArray = Object.values(data.data);

        // 3️⃣ Filter only old heroes
        const oldHeroesNames = [
          "Annie",
          "Ashe",
          "Garen",
          "MasterYi",
          "Alistar",
        ];
        const old = champsArray.filter((c) => oldHeroesNames.includes(c.name));

        // 4️⃣ Fetch details for each old hero
        const detailedChampions = await Promise.all(
          old.map(async (champ) => {
            const res = await fetch(
              `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/en_US/champion/${champ.id}.json`
            );
            const champData = await res.json();
            return champData.data[champ.id];
          })
        );

        setChampions(detailedChampions);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching old champions:", error);
        setLoading(false);
      }
    };

    fetchChampions();
  }, []);

  if (loading)
    return <p className="text-center mt-5">Loading old champions...</p>;

  return <HeroList champions={champions} title="Old Heroes" />;
}

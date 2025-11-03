import { useEffect, useState } from "react";
import HeroList from "../components/HeroList";

export default function NewHeroes() {
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

        // 3️⃣ Filter only new heroes
        const newHeroesNames = ["Viego", "Seraphine", "K'Sante", "Nilah"];
        const recent = champsArray.filter((c) =>
          newHeroesNames.includes(c.name)
        );

        // 4️⃣ Fetch details for each new hero
        const detailedChampions = await Promise.all(
          recent.map(async (champ) => {
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
        console.error("Error fetching new champions:", error);
        setLoading(false);
      }
    };

    fetchChampions();
  }, []);

  if (loading)
    return <p className="text-center mt-5">Loading new champions...</p>;

  return <HeroList champions={champions} title="New Heroes" />;
}

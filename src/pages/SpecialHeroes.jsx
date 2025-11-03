import { useEffect, useState } from "react";
import HeroList from "../components/HeroList";

export default function SpecialHeroes() {
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

        // 3️⃣ Filter only special heroes
        const specialNames = ["Ahri", "Jinx", "Ekko", "Yasuo", "Lux"];
        const special = champsArray.filter((c) =>
          specialNames.includes(c.name)
        );

        // 4️⃣ Fetch details for each special hero
        const detailedChampions = await Promise.all(
          special.map(async (champ) => {
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
        console.error("Error fetching special champions:", error);
        setLoading(false);
      }
    };

    fetchChampions();
  }, []);

  if (loading)
    return <p className="text-center mt-5">Loading special champions...</p>;

  return <HeroList champions={champions} title="Special Heroes" />;
}

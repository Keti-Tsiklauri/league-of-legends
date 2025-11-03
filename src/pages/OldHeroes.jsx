import { useEffect, useState } from "react";
import HeroList from "../components/HeroList";

export default function OldHeroes() {
  const [champions, setChampions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChampions = async () => {
      try {
        const versionsRes = await fetch(
          "https://ddragon.leagueoflegends.com/api/versions.json"
        );
        const versions = await versionsRes.json();
        const latestVersion = versions[0];

        const res = await fetch(
          `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/en_US/champion.json`
        );
        const data = await res.json();
        const champsArray = Object.values(data.data);

        const oldHeroes = ["Annie", "Ashe", "Garen", "MasterYi", "Alistar"];
        const old = champsArray.filter((c) => oldHeroes.includes(c.name));

        setChampions(old);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchChampions();
  }, []);

  if (loading)
    return <p className="text-center mt-5">Loading old champions...</p>;

  return <HeroList champions={champions} title="Old Heroes" />;
}

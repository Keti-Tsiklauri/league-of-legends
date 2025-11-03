import { useEffect, useState } from "react";
import HeroList from "../components/HeroList";

export default function NewHeroes() {
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

        const newHeroes = ["Viego", "Seraphine", "K'Sante", "Nilah"];
        const recent = champsArray.filter((c) => newHeroes.includes(c.name));

        setChampions(recent);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchChampions();
  }, []);

  if (loading)
    return <p className="text-center mt-5">Loading new champions...</p>;

  return <HeroList champions={champions} title="New Heroes" />;
}

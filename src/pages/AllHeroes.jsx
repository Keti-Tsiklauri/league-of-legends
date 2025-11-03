import { useEffect, useState } from "react";
import HeroList from "../components/HeroList";

export default function AllHeroes() {
  const [champions, setChampions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChampions = async () => {
      try {
        // Get latest version
        const versionsRes = await fetch(
          "https://ddragon.leagueoflegends.com/api/versions.json"
        );
        const versions = await versionsRes.json();
        const latestVersion = versions[0];

        // Fetch champion data
        const res = await fetch(
          `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/en_US/champion.json`
        );
        const data = await res.json();
        const champsArray = Object.values(data.data);

        setChampions(champsArray);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchChampions();
  }, []);

  if (loading)
    return <p className="text-center mt-5">Loading all champions...</p>;

  return (
    <HeroList champions={champions} title="All League of Legends Champions" />
  );
}

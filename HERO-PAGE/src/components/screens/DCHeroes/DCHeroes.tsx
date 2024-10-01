import { useEffect, useState } from "react";
import { IHeores } from "../../../types/IHeroes.ts";
import { heroesData } from "../../../data/heroes.ts";
import { ListHeroes } from "../../ui/ListHeroes/ListHeroes.tsx";

export const DCHeroes = () => {
  const [heroes, setHeroes] = useState<IHeores[]>([]);

  const handleGetHeroesDc = () => {
    const result = heroesData.filter((hero) => hero.publisher === "DC Comics");

    setHeroes(result);
  };

  useEffect(() => {
    handleGetHeroesDc();
  }, []);

  return <ListHeroes heroes={heroes} title="Heroes DC Comics" />;
};

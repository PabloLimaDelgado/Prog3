import React, { useEffect, useState } from "react";
import { IHeores } from "../../../types/IHeroes.ts";
import { heroesData } from "../../../data/heroes.ts";
import { ListHeroes } from "../../ui/ListHeroes/ListHeroes.tsx";

export const MarvelHeores = () => {
  const [heroes, setHeroes] = useState<IHeores[]>([]);

  const handleGetHeroesDc = () => {
    const result = heroesData.filter(
      (hero) => hero.publisher === "Marvel Comics"
    );

    setHeroes(result);
  };

  useEffect(() => {
    handleGetHeroesDc();
  }, []);

  return <ListHeroes heroes={heroes} title="Heroes Marvel Comics" />;
};

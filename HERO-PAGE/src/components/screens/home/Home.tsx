import { heroesData } from "../../../data/heroes.ts";
import { ListHeroes } from "../../ui/ListHeroes/ListHeroes.tsx";

export const Home = () => {
  return (
    <>
      <ListHeroes heroes={heroesData} title={"Todos los heroes"} />
    </>
  );
};

import { FC } from "react";
import { IHeores } from "../../../types/IHeroes";
import styles from "./ListHeroes.module.scss";
import { CardHero } from "../CardHero/CardHero";

interface IListHeroes {
  heroes: IHeores[];
  title: string;
}

export const ListHeroes: FC<IListHeroes> = ({ heroes, title }) => {
  return (
    <div className={styles.containerPrincipalList}>
      <div className={styles.containerTitle}>
        <h2>{title}</h2>
      </div>
      <div className={styles.containerList}>
        {heroes.map((heroe) => (
          <CardHero heroe={heroe} key={heroe.id}/>
        ))}
      </div>
    </div>
  );
};

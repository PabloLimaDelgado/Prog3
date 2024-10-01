import React, { useEffect, useState } from "react";
import { IHeores } from "../../../types/IHeroes.ts";
import { useNavigate, useParams } from "react-router-dom";
import { heroesData } from "../../../data/heroes.ts";
import styles from "./Heroe.module.scss";
import { Button } from "react-bootstrap";

export const Heroe = () => {
  const [hero, setHero] = useState<IHeores | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const getHeroById = () => {
    const result = heroesData.find((h) => h.id === id);
    result ? setHero(result) : setHero(null);
  };

  const handleNavigate = () => {
    navigate(-1);
  };

  useEffect(() => {
    getHeroById();
  }, []);
  return (
    <>
      {hero && (
        <div className={styles.containerHeroPage}>
          <div className={styles.containerImgHeroPage}>
            <img src={`/assets/heroes/${id}.jpg`} alt={hero.characters} />
          </div>

          <div>
            <h3>{hero.superhero}</h3>
            <ul>
              <li>
                <b>Alter Ego: </b> {hero.alter_ego}
              </li>

              <li>
                <b>Publisher: </b> {hero.publisher}
              </li>

              <li>
                <b>First Appearance: </b> {hero.first_appearance}
              </li>
            </ul>

            <Button variant="primary" onClick={handleNavigate}>
              Regresar
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

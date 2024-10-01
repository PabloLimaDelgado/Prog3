import { FC } from "react";
import { IHeores } from "../../../types/IHeroes.ts";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./CardHero.module.scss";

interface ICardHero {
  heroe: IHeores;
}
export const CardHero: FC<ICardHero> = ({ heroe }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/hero/${heroe.id}`);
  };

  return (
    <Card
      onClick={handleNavigate}
      style={{ width: "100%" }}
      className={styles.card}
    >
      <Card.Img variant="top" src={`/assets/heroes/${heroe.id}.jpg`} />
      <Card.Body>
        <Card.Title>{heroe.superhero}</Card.Title>
        <Card.Text>
          <p>
            <b>Alter Ego: </b> {heroe.alter_ego}
          </p>

          <p>
            <b>Publisher: </b> {heroe.publisher}
          </p>

          <p>
            <b>First Appearance: </b> {heroe.first_appearance}
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

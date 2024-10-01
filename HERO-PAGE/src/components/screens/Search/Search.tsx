import React, { useEffect, useState } from "react";
import { useForm } from "../../../hooks/useForm.ts";
import { IHeores } from "../../../types/IHeroes.ts";
import { heroesData } from "../../../data/heroes.ts";
import { Form, InputGroup } from "react-bootstrap";
import { CardHero } from "../../ui/CardHero/CardHero";
import styles from "./Search.module.scss";

export const Search = () => {
  const { values, handleChange } = useForm({
    search: "",
  });

  const { search } = values;
  const [heroes, setHeroes] = useState<IHeores[]>([]);

  useEffect(() => {
    const result = heroesData.filter((h) =>
      h.superhero.toLocaleLowerCase().trim().includes(search)
    );

    setHeroes(result);
  }, [search]);
  return (
    <div className={styles.containerSearch}>
      <div>
        <InputGroup className="mb-3">
          <InputGroup.Text>Ingrese heroe:</InputGroup.Text>
          <Form.Control onChange={handleChange} type="text" name="search" />
        </InputGroup>
      </div>
      <div className={styles.containerListHeros}>
        {heroes.length > 0 ? (
          <>
            {heroes.map((hero) => (
              <div key={hero.id} style={{ width: "80%" }}>
                <CardHero heroe={hero} />
              </div>
            ))}
          </>
        ) : (
          <div>
            <h2>No coincide la busqueda</h2>
          </div>
        )}
      </div>
    </div>
  );
};

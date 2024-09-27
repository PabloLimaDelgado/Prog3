import React, { FC } from "react";
import { Card } from "react-bootstrap";

interface ItemProduct {
  precio: number;
  imagen: string;
  nombre: string;
}

interface IListProduct {
  arryItems: ItemProduct[];
}
export const ListProduct: FC<IListProduct> = ({ arryItems }) => {
  return (
    <div
      className="p-1 m-3 border rounded d-grid gap-2"
      style={{
        gridTemplateColumns: "repeat(2, 1fr)",
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      {arryItems.map((elemento, index) => (
        <Card key={index} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={elemento.imagen} />
          <Card.Body>
            <Card.Title>{elemento.nombre}</Card.Title>
            <Card.Text>${elemento.precio}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

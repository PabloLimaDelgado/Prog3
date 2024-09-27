import React from "react";
import { Container, Navbar } from "react-bootstrap";

type Props = {};

export const Header = (props: Props) => {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Carga de productos</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

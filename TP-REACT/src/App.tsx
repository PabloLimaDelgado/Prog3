import React, { useState } from "react";
import MiPrimerComponent from "./components/MiPrimerComponent/MiPrimerComponent.tsx";
import { ComponentCounter } from "./components/ComponentCounter/ComponentCounter.tsx";
import { ComponentUseEffect } from "./components/ComponetUseEffect/ComponentUseEffect.tsx";
import { FormComponent } from "./components/FormComponent/FormComponent.tsx";
import { AddProduct } from "./components/AddProduct/AddProduct.tsx";

type Props = {};

const App = (props: Props) => {
  return (
    <>
      {/* <MiPrimerComponent text="Hola mundo" backgroundColor="yellow" />
      <hr />
      <ComponentCounter />
      <hr />
      <ComponentUseEffect />
      <hr />
      <FormComponent />
      <hr /> */}
      <AddProduct />
    </>
  );
};

export default App;

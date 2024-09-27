import React, { useState } from "react";

type Props = {};

export const ComponentCounter = (props: Props) => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter((prev) => prev + 1);
  };

  const decrementarCounter = () => {
    if (counter > 0) {
      setCounter((prev) => prev - 1);
    }
  };
  return (
    <>
      <h2>Valor de counter {counter}</h2>
      <button onClick={incrementCounter}>Incrementar</button>
      <button onClick={decrementarCounter}>Decrementar</button>
    </>
  );
};

import React, { useEffect, useState } from "react";

type Props = {};

export const ComponentUseEffect = (props: Props) => {
  const [state, setState] = useState(false);

  useEffect(() => {
    console.log("Componente Montado");

    return () => {
      console.log("Componente desmontado");
    };
  }, []);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <>
      <div>
        <p>{state ? "Es true" : "Es false"}</p>
        <button
          onClick={() => {
            setState(!state);
          }}
        >
          Cambiar state
        </button>
      </div>
    </>
  );
};

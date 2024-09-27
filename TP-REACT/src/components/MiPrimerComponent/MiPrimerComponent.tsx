import { FC } from "react";

interface Props {
  text: string;
  backgroundColor: string;
  fontSize?: number;
}

const MiPrimerComponent: FC<Props> = ({ text, backgroundColor, fontSize }) => {
  return (
    <div
      style={{
        background: `${backgroundColor}`,
        textAlign: "center",
        fontSize: `${fontSize || 1.4}rem`,
      }}
    >
      <p>{text}</p>
    </div>
  );
};

export default MiPrimerComponent;

import { FC } from "react";

interface IProps {
  onClickAction?: () => void;
  text: string;
}

const Button: FC<IProps> = ({ onClickAction, text }) => {
  return (
    <button
      onClick={onClickAction}
      style={{
        border: "none",
        height: "50px",
        width: "200px",
        backgroundColor: "#22313E",
        cursor: "pointer",
        fontSize: "1.3em",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        margin: "30px 0",
        color: "white",
      }}
    >
      {text}
    </button>
  );
};

export default Button;

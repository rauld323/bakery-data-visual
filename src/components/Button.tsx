import { FC } from "react";
import "./Button.css";

interface IProps {
  onClickAction?: () => void;
  text: string;
}

const Button: FC<IProps> = ({ onClickAction, text }) => {
  return <button onClick={onClickAction}>{text}</button>;
};

export default Button;

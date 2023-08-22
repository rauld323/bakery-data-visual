import { FC } from "react";
import styled from "styled-components";

interface IProps {
  onClickAction?: () => void;
  text: string;
}

const Button: FC<IProps> = ({ onClickAction, text }) => {
  return (
    <StyledButton style={{ alignSelf: "center" }} onClick={onClickAction}>
      {text}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  border: none;
  height: 50px;
  width: 200px;
  background-color: #22313e;
  cursor: pointer;
  font-size: 1.3em;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 30px 0;
  color: white;

  &:hover {
    background-color: #009fb2;
    color: white;
  }
`;

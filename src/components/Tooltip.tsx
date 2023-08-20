import { FC, ReactElement, useState } from "react";
import { styled } from "styled-components";

interface IProps {
  children: ReactElement;
  content: any;
}

const Tooltip: FC<IProps> = ({ children, content }) => {
  let timeout: string | number | NodeJS.Timeout | undefined;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, 100);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <StyledTooltipWrapper onMouseEnter={showTip} onMouseLeave={hideTip}>
      {children}
      {active && <StyledTooltipTip>{content}</StyledTooltipTip>}
    </StyledTooltipWrapper>
  );
};

export default Tooltip;

const StyledTooltipWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const StyledTooltipTip = styled.div`
  position: absolute;
  border-radius: 4px;
  transform: translateX(-130%) translateY(-80%);
  padding: 6px;
  color: white;
  background: black;
  font-size: 14px;
  font-family: sans-serif;
  line-height: 1;
  z-index: 100;
  height: 50px;
  margin-top: 10px;
  width: 170px;
  display: flex;
  align-items: center;
  &::before {
    content: " ";
    left: 50%;
    border: solid transparent;
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-width: 6px;
    margin-left: calc(30px * -1);
    right: calc(100% + 30px);
    top: 50%;
    transform: translateX(0) translateY(-50%);
  }
`;

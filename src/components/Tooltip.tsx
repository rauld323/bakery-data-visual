import { FC, useState } from "react";

interface IProps {
  valueKey?: string;
  value?: string | number;
  children?: any;
  delay?: number;
}

const Tooltip: FC<IProps> = ({
  children,
  valueKey = "Delivery",
  value = "100",
  delay,
}) => {
  let timeout: string | number | NodeJS.Timeout | undefined;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, delay || 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div
      className="Tooltip-Wrapper"
      // When to show the tooltip
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
      style={{ backgroundColor: "green" }}
    >
      {children}
      {active && <div>{value}</div>}
    </div>
  );
};

export default Tooltip;

import { FC, useState } from "react";

interface IProps {
  valueKey?: string;
  value?: string | number;
  children: any[] | any;
  delay?: number;
  content: any;
}

const Tooltip: FC<IProps> = ({
  children,
  valueKey = "Delivery",
  value = "100",
  delay,
  content,
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
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {children}
      {active && (
        <div
          className={"TooltipTip"}
          style={{
            position: "absolute",
            borderRadius: "4px",
            // left: "50%",
            // transform: translateX("-50%"),
            padding: "6px",
            // // color: var(--tooltip-text-color),
            // // background: var(--tooltip-background-color)
            fontSize: "14px",
            // font-family: sans-serif,
            lineHeight: 1,
            zIndex: "100",
            // white-space: nowrap
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;

import { FilteredObject } from "../DataView";
import { AxisBottomProps } from "./BottomAxis";
import { AxisLeftProps } from "./LeftAxis";
import "./Bars.css";

interface BarsProps {
  data: FilteredObject[];
  height: number;
  scaleX: AxisBottomProps["scale"];
  scaleY: AxisLeftProps["scale"];
}

export function Bars({ data, height, scaleX, scaleY }: BarsProps) {
  return (
    <>
      {data.map(({ index, target_date, demand_qty }) => (
        <rect
          key={index}
          x={scaleX(target_date)}
          y={scaleY(demand_qty)}
          width={scaleX.bandwidth()}
          height={height - scaleY(demand_qty)}
          fill="#58508d"
          stroke="white"
          className={"bar"}
        />
      ))}
    </>
  );
}

import { AxisBottomProps } from "./BottomAxis";
import { AxisLeftProps } from "./LeftAxis";

interface IProps {
  scaleX: AxisBottomProps["scale"];
  scaleY: AxisLeftProps["scale"];
  index: number;
  target_date: string;
  plotValue: number;
  color: string;
}

export function PlotLine({
  index,
  color,
  target_date,
  plotValue,
  scaleX,
  scaleY,
}: IProps) {
  return (
    <>
      <line
        key={index}
        x1={scaleX(target_date)! + scaleX.bandwidth() / 2}
        y1={scaleY(plotValue)}
        x2={scaleX(target_date)! + scaleX.bandwidth() / 2}
        y2={scaleY(plotValue)}
        stroke={color}
        strokeWidth={2}
      />
    </>
  );
}

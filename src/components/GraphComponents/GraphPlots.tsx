import { isEmpty } from "../../helpers/isEmpty";
import { AxisBottomProps } from "./BottomAxis";
import { AxisLeftProps } from "./LeftAxis";

interface IProps {
  height: number;
  scaleX: AxisBottomProps["scale"];
  scaleY: AxisLeftProps["scale"];
  index: number;
  target_date: string;
  plotValue: number;
  color: string;
  plotLocation: number;
}

export function GraphPlots({
  index,
  color,
  target_date,
  plotValue,
  scaleX,
  scaleY,
  height,
  plotLocation,
}: IProps) {
  return (
    <>
      {isEmpty(plotValue) ? (
        ""
      ) : (
        <>
          <circle
            key={`dot-${index}`}
            cx={scaleX(target_date)! + scaleX.bandwidth() / plotLocation}
            cy={scaleY(plotValue)}
            r={4}
            fill={color}
            height={height - scaleY(plotValue)}
          />
          {/* <line
            key={index}
            x1={scaleX(target_date)! + scaleX.bandwidth()}
            y1={scaleY(plotValue)}
            x2={scaleX(target_date)! + scaleX.bandwidth() / plotLocation}
            y2={scaleY(plotValue)}
            stroke={color}
          /> */}
        </>
      )}
    </>
  );
}

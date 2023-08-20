import { isEmpty } from "../../helpers/isEmpty";
import { AxisBottomProps } from "../../Components/GraphComponents/BottomAxis";
import { AxisLeftProps } from "../../Components/GraphComponents/LeftAxis";

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
        </>
      )}
    </>
  );
}

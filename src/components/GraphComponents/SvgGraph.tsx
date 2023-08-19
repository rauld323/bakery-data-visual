import { scaleBand, scaleLinear } from "d3";
import React, { FC } from "react";
import { FilteredObject } from "../DataView";
import { Bars } from "./Bars";

import { AxisBottom } from "./BottomAxis";
import { GraphPlots } from "./GraphPlots";
import { AxisLeft } from "./LeftAxis";

interface IProps {
  data: FilteredObject[];
}

const SvgGraph: FC<IProps> = ({ data }) => {
  const margin = { top: 20, right: 0, bottom: 20, left: 30 };
  const width = (data.length > 1 ? 2000 : 200) - margin.left - margin.right;
  const height = 500 - margin.top - margin.bottom;

  const scaleX = scaleBand()
    .domain(data.map(({ target_date, index }) => target_date))
    .range([0, width]);

  const scaleY = scaleLinear()
    .domain([0, Math.max(...data.map(({ demand_qty }) => demand_qty))])
    .range([height, 0]);

  return (
    <svg
      width={width + margin.left + margin.right}
      height={height + margin.top + margin.bottom}
      color="black"
    >
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisBottom scale={scaleX} transform={`translate(0, ${height})`} />
        <AxisLeft scale={scaleY} />
        <Bars data={data} height={height} scaleX={scaleX} scaleY={scaleY} />s
        {data.map(({ index, target_date, delivery_qty, recommendation }) => (
          <>
            <GraphPlots
              height={height}
              scaleX={scaleX}
              scaleY={scaleY}
              index={index}
              target_date={target_date}
              plotValue={delivery_qty}
              color={"#009FB2"}
              plotLocation={2.5}
            />
            <GraphPlots
              height={height}
              scaleX={scaleX}
              scaleY={scaleY}
              index={index}
              target_date={target_date}
              plotValue={recommendation}
              color={"#EE7702"}
              plotLocation={1.5}
            />
          </>
        ))}
      </g>
    </svg>
  );
};

export default SvgGraph;

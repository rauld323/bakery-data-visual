import { scaleBand, scaleLinear } from "d3";
import React, { FC } from "react";
import { FilteredObject } from "../DataView";
import { Bars } from "./Bars";
import { AxisBottom } from "../../Components/GraphComponents/BottomAxis";
import { GraphPlots } from "../../Components/GraphComponents/GraphPlots";
import { AxisLeft } from "../../Components/GraphComponents/LeftAxis";

interface IProps {
  data: FilteredObject[];
}

const SvgGraph: FC<IProps> = ({ data }) => {
  const margin = {
    top: data.length === 1 ? 150 : 50,
    right: 0,
    bottom: 20,
    left: 30,
  };
  const width = (data.length > 1 ? 2000 : 200) - margin.left - margin.right;
  const height = 500 - margin.top - margin.bottom;

  function test(delivery_qty: number, recommendation: number) {
    if (delivery_qty > recommendation) {
      return delivery_qty;
    } else return recommendation;
  }

  const scaleX = scaleBand()
    .domain(data.map(({ target_date }) => target_date))
    .range([0, width]);

  const scaleY = scaleLinear()
    .domain([
      0,
      Math.max(
        ...data.map(({ delivery_qty, recommendation }) =>
          test(delivery_qty, recommendation)
        )
      ),
    ])
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

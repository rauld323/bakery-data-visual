import { scaleBand, scaleLinear } from "d3";
import React, { FC } from "react";
import Button from "./Button";
import { FilteredObject } from "./DataView";
import { Bars } from "./GraphComponents/Bars";
import { AxisBottom } from "./GraphComponents/BottomAxis";
import { GraphPlots } from "./GraphComponents/GraphPlots";
import { AxisLeft } from "./GraphComponents/LeftAxis";
import Legend from "./Legend";

interface IProps {
  data: FilteredObject[];
  toggleComponent: () => void;
}

const Graph: FC<IProps> = ({ toggleComponent, data }) => {
  const margin = { top: 20, right: 0, bottom: 20, left: 30 };
  const width = (data.length > 1 ? 2000 : 200) - margin.left - margin.right;
  const height = 500 - margin.top - margin.bottom;

  const scaleX = scaleBand()
    .domain(data.map(({ target_date }) => target_date))
    .range([0, width]);

  const scaleY = scaleLinear()
    .domain([0, Math.max(...data.map(({ demand_qty }) => demand_qty))])
    .range([height, 0]);

  const noDataMessage = () => {
    return (
      <div style={{ paddingTop: "80px" }}>
        <h1>Sorry, there is no data for that query!</h1>
      </div>
    );
  };

  const svgGraph = () => {
    return (
      <svg
        width={width + margin.left + margin.right}
        height={height + margin.top + margin.bottom}
        color="black"
      >
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          <AxisBottom scale={scaleX} transform={`translate(0, ${height})`} />
          <AxisLeft scale={scaleY} />
          <Bars data={data} height={height} scaleX={scaleX} scaleY={scaleY} />

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

  return (
    <div style={{ overflow: "auto", width: "100%" }}>
      {data.length !== 0 ? svgGraph() : noDataMessage()}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          height: "125px",
        }}
      >
        <Legend />
        <Button onClickAction={toggleComponent} text={"Table"} />
      </div>
    </div>
  );
};

export default Graph;

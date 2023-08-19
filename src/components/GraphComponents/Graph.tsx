import React, { FC } from "react";
import Button from "../Button";
import { FilteredObject } from "../DataView";
import NoDataMessage from "../NoDataMessage";

import Legend from "./Legend";
import SvgGraph from "./SvgGraph";

interface IProps {
  data: FilteredObject[];
  toggleComponent: () => void;
}

const Graph: FC<IProps> = ({ toggleComponent, data }) => {
  return (
    <div style={{ overflow: "auto", width: "100%" }}>
      {data.length !== 0 ? <SvgGraph data={data} /> : <NoDataMessage />}
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

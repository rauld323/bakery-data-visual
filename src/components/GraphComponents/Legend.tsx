import React from "react";

const Legend = () => {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginRight: "5px",
        }}
      >
        <div
          style={{ height: "20px", width: "20px", backgroundColor: "#009FB2" }}
        />
        <div
          style={{ height: "20px", width: "20px", backgroundColor: "#EE7702" }}
        />
        <div
          style={{ height: "20px", width: "20px", backgroundColor: "#58508d" }}
        />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
        }}
      >
        <div>Delivery</div>
        <div>Recommendation</div>
        <div>Demand</div>
      </div>
    </div>
  );
};

export default Legend;

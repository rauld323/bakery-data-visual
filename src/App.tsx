import "./App.css";
import React from "react";
import DataView from "./Components/DataView";
import deliveries from "../src/Data/deliveries.json";
import recommendations from "../src/Data/recommendations.json";
import sales from "../src/Data/sales.json";
import { BakeryContext } from "./Context/BakeryContext";

function App() {
  return (
    <div className="App">
      <BakeryContext.Provider value={{ deliveries, recommendations, sales }}>
        <DataView />
      </BakeryContext.Provider>
    </div>
  );
}

export default App;

import "./App.css";
import React, { createContext } from "react";
import DataView from "./components/DataView";
import deliveries from "../src/data/deliveries.json";
import recommendations from "../src/data/recommendations.json";
import sales from "../src/data/sales.json";

export const BakeryContext = createContext({});

function App() {
  return (
    <div className="App">
      <BakeryContext.Provider value={{ deliveries, recommendations, sales }}>
        <DataView
          deliveries={deliveries}
          recommendations={recommendations}
          sales={sales}
        />
      </BakeryContext.Provider>
    </div>
  );
}

export default App;

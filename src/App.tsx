import "./App.css";
import React, { createContext } from "react";
import DataView from "./components/DataView";
import deliveries from "./data/deliveries.json";
import recommendations from "./data/recommendations.json";
import sales from "./data/sales.json";

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

import "./App.css";
import React from "react";
import DataView from "./components/DataView";
import deliveries from "./data/deliveries.json";
import recommendations from "./data/recommendations.json";
import sales from "./data/sales.json";

function App() {
  return (
    <div className="App">
      <DataView
        deliveries={deliveries}
        recommendations={recommendations}
        sales={sales}
      />
    </div>
  );
}

export default App;

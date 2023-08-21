import React, { useState, useMemo, useContext } from "react";
import { BakeryContext } from "src/Context/BakeryContext";
import { getProductNames } from "src/Enums/productNames";
import { getStoreName } from "src/Enums/storeNames";
import { combineObjectsByMatchingKeys } from "../helpers/combineArrays";
import { groupAndSumByProperty } from "../helpers/groupAndSumProperty";
import Frame from "./Frame";
import Graph from "./GraphComponents/Graph";
import Selector from "./Selector";
import Table from "./TableComponents/Table";

export interface FilteredObject {
  index: number;
  delivery_qty: number;
  demand_qty: number;
  demand_value: number;
  id_product: number;
  id_store: number;
  target_date: string;
  recommendation: number;
}

const DataView = () => {
  const { deliveries, recommendations, sales } = useContext(BakeryContext);

  const [selectedDate, setSelectedDate] = useState("");
  const [selectStore, setSelectStore] = useState("");
  const [selectProduct, setSelectProduct] = useState("");
  const [showTableComponent, setShowTableComponent] = useState(true);

  const toggleComponent = () => {
    setShowTableComponent((prevShowTableComponent) => !prevShowTableComponent);
  };

  const deliveryAndRecommendation = combineObjectsByMatchingKeys(
    deliveries,
    recommendations
  );

  const combinedFilteredData: FilteredObject[] = combineObjectsByMatchingKeys(
    deliveryAndRecommendation,
    sales
  );

  const uniqueDates = useMemo(
    () =>
      Array.from(new Set(combinedFilteredData.map((date) => date.target_date))),
    [combinedFilteredData]
  );

  const uniqueStores = useMemo(
    () =>
      Array.from(
        new Set(
          combinedFilteredData.map((store) => getStoreName(store.id_store))
        )
      ),
    [combinedFilteredData]
  );

  const uniqueProducts = useMemo(
    () =>
      Array.from(
        new Set(
          combinedFilteredData.map((product) =>
            getProductNames(product.id_product)
          )
        )
      ),
    [combinedFilteredData]
  );

  const filteredDeliveries = combinedFilteredData.filter((item) => {
    const matchesDate = !selectedDate || item.target_date === selectedDate;

    const matchesStore =
      !selectStore || getStoreName(item.id_store) === selectStore;

    const matchesProduct =
      !selectProduct || getProductNames(item.id_product) === selectProduct;

    return matchesStore && matchesProduct && matchesDate;
  });

  return (
    <>
      <div
        style={{
          backgroundColor: "#22313E",
          height: "80px",
          padding: "20px 70px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ color: "white", fontWeight: "bold", fontSize: "2em" }}>
          Report
        </div>
        <div style={{ display: "flex" }}>
          <Selector
            label={"Dates"}
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            uniqueItem={uniqueDates}
          />
          <Selector
            label={"Stores"}
            value={selectStore}
            onChange={(e) => setSelectStore(e.target.value)}
            uniqueItem={uniqueStores}
          />

          <Selector
            label={"Product"}
            value={selectProduct}
            onChange={(e) => setSelectProduct(e.target.value)}
            uniqueItem={uniqueProducts}
          />
        </div>
      </div>

      <Frame>
        {showTableComponent ? (
          <Table
            toggleComponent={toggleComponent}
            filteredDeliveries={filteredDeliveries}
          />
        ) : (
          <Graph
            toggleComponent={toggleComponent}
            data={groupAndSumByProperty(filteredDeliveries)}
          />
        )}
      </Frame>
    </>
  );
};

export default DataView;

import React, { useState } from "react";
import { FC } from "react";
import { combineObjectsByMatchingKeys } from "../helpers/combineArrays";
import { groupAndSumByProperty } from "../helpers/groupAndSumProperty";
import Frame from "./Frame";
import Graph from "./Graph";
import Selector from "./Selector";
import Table, { AllCombinedProps } from "./Table";
import "./Table.css";

export interface DeliveryObject {
  target_date: string;
  id_store: number;
  id_product: number;
  delivery_qty?: number;
  delivery_value_by_price: number;
}

export interface RecomendationObject {
  target_date: string;
  id_store: number;
  id_product: number;
  recommendation: number;
  recommendation_value_by_price: number;
}

export interface SalesObject {
  demand_qty: number;
  demand_value: number;
  id_product: number;
  id_store: number;
  sales_qty: number;
  sales_value: number;
  target_date: string;
}

export interface FilteredObject {
  delivery_qty: number;
  delivery_value_by_price: number;
  demand_qty: number;
  demand_value: number;
  id_product: number;
  id_store: number;
  sales_qty: number;
  sales_value: number;
  target_date: string;
}

export interface IProps {
  deliveries: DeliveryObject[];
  recommendations: RecomendationObject[];
  sales: SalesObject[];
}

const DataView: FC<IProps> = ({ deliveries, recommendations, sales }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectStore, setSelectStore] = useState("");
  const [selectProduct, setSelectProduct] = useState("");
  const [showTableComponent, setShowTableComponent] = useState(true);

  const toggleComponent = () => {
    setShowTableComponent(!showTableComponent);
  };
  const bartArray = combineObjectsByMatchingKeys(deliveries, recommendations);

  const salesAndBartArray: AllCombinedProps[] = combineObjectsByMatchingKeys(
    bartArray,
    sales
  );

  const uniqueDates = Array.from(
    new Set(salesAndBartArray.map((date) => date.target_date))
  );
  const uniqueStores = Array.from(
    new Set(salesAndBartArray.map((store) => store.id_store))
  );
  const uniqueProducts = Array.from(
    new Set(salesAndBartArray.map((product) => product.id_product))
  );

  const filteredDeliveries = salesAndBartArray.filter((item) => {
    const matchesDate = !selectedDate || item.target_date === selectedDate;

    const matchesStore =
      !selectStore || item.id_store === parseInt(selectStore);

    const matchesProduct =
      !selectProduct || item.id_product === parseInt(selectProduct);

    return matchesStore && matchesProduct && matchesDate;
  });

  console.log(filteredDeliveries);
  console.log(sales);
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

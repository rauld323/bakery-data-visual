import { FC } from "react";
import { getProductNames } from "../enums/productNames";
import { getStoreName } from "../enums/storeNames";
import { findClosestNumber } from "../helpers/findClosestNumber";
import { format, parse } from "date-fns";
import "./Table.css";
import Button from "./Button";
import { FilteredObject } from "./DataView";

interface IProps {
  filteredDeliveries: FilteredObject[];
  toggleComponent: () => void;
}

const Table: FC<IProps> = ({ filteredDeliveries, toggleComponent }) => {
  const noDataMessage = () => {
    return (
      <div style={{ paddingTop: "80px" }}>
        <h1>Sorry, there is no data for that query!</h1>
      </div>
    );
  };

  const displayTableData = () => {
    return filteredDeliveries.map((item) => (
      <div className="table-row">
        <div className="table-cell">{getStoreName(item.id_store)}</div>
        <div className="table-cell">{getProductNames(item.id_product)}</div>
        <div className="table-cell">
          {format(
            parse(item.target_date, "yyyy-MM-dd", new Date()),
            "yy-MM-dd"
          )}
        </div>
        <div className="table-cell">
          {item.recommendation > 0 ? item.recommendation : 0}
        </div>
        <div className="table-cell">{item.delivery_qty}</div>
        <div className="table-cell">{item.demand_qty}</div>
        <div className="table-cell">
          {findClosestNumber(
            item.delivery_qty,
            item.recommendation,
            item.demand_qty
          )}
        </div>
      </div>
    ));
  };

  return (
    <>
      <div
        className="table"
        style={{
          margin: "5% 5% 0",
          overflow: "auto",
          height: "400px",
          border: "black 3px solid",
          borderRadius: "5px",
        }}
      >
        <div className="table-row sticky-row">
          <div className="table-cell">Store</div>
          <div className="table-cell">Product</div>
          <div className="table-cell">Date </div>
          <div className="table-cell">Recomm...</div>
          <div className="table-cell">Delivery</div>
          <div className="table-cell">Demand</div>
          <div className="table-cell">Forecast Tendency</div>
        </div>

        {filteredDeliveries.length !== 0 ? displayTableData() : noDataMessage()}
      </div>
      <Button onClickAction={toggleComponent} text={"Graph"} />
    </>
  );
};

export default Table;

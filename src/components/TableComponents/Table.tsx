import { FC } from "react";
import { format, parse } from "date-fns";
import "./Table.css";
import { getProductNames } from "../../Enums/productNames";
import { getStoreName } from "../../Enums/storeNames";
import { findClosestNumber } from "../../helpers/findClosestNumber";
import Button from "../../Components/Button";
import { FilteredObject } from "../../Components/DataView";
import NoDataMessage from "../../Components/NoDataMessage";

interface IProps {
  filteredDeliveries: FilteredObject[];
  toggleComponent: () => void;
}

const Table: FC<IProps> = ({ filteredDeliveries, toggleComponent }) => {
  const displayTableData = () => {
    return filteredDeliveries.map((item, index) => (
      <div key={index} className="table-row">
        <tr className="table-cell">{getStoreName(item.id_store)}</tr>
        <tr className="table-cell">{getProductNames(item.id_product)}</tr>
        <tr className="table-cell">
          {format(
            parse(item.target_date, "yyyy-MM-dd", new Date()),
            "yy-MM-dd"
          )}
        </tr>
        <tr className="table-cell">
          {item.recommendation > 0 ? item.recommendation : 0}
        </tr>
        <tr className="table-cell">{item.delivery_qty}</tr>
        <tr className="table-cell">{item.demand_qty}</tr>
        <tr className="table-cell">
          {findClosestNumber(
            item.delivery_qty,
            item.recommendation,
            item.demand_qty
          )}
        </tr>
      </div>
    ));
  };

  return (
    <>
      <div
        style={{
          margin: "5% 5% 0",
          overflow: "auto",
          height: "400px",
          border: "black 3px solid",
          borderRadius: "5px",
        }}
      >
        <table className="table">
          <th className="table-row sticky-row">
            <tr className="table-cell">Store</tr>
            <tr className="table-cell">Product</tr>
            <tr className="table-cell">Date </tr>
            <tr className="table-cell">Recomm...</tr>
            <tr className="table-cell">Delivery</tr>
            <tr className="table-cell">Demand</tr>
            <tr className="table-cell">Forecast Tendency</tr>
          </th>

          {filteredDeliveries.length !== 0 ? (
            displayTableData()
          ) : (
            <NoDataMessage />
          )}
        </table>
      </div>
      <Button onClickAction={toggleComponent} text={"Graph"} />
    </>
  );
};

export default Table;

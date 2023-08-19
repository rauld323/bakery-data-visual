import { FC } from "react";
import { format, parse } from "date-fns";
import "./Table.css";
import { getProductNames } from "../../enums/productNames";
import { getStoreName } from "../../enums/storeNames";
import { findClosestNumber } from "../../helpers/findClosestNumber";
import Button from "../Button";
import { FilteredObject } from "../DataView";
import NoDataMessage from "../NoDataMessage";

interface IProps {
  filteredDeliveries: FilteredObject[];
  toggleComponent: () => void;
}

const Table: FC<IProps> = ({ filteredDeliveries, toggleComponent }) => {
  const displayTableData = () => {
    return filteredDeliveries.map((item, index) => (
      <div key={index} className="table-row">
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

        {filteredDeliveries.length !== 0 ? (
          displayTableData()
        ) : (
          <NoDataMessage />
        )}
      </div>
      <Button onClickAction={toggleComponent} text={"Graph"} />
    </>
  );
};

export default Table;

import { FC } from "react";
import { format, parse } from "date-fns";
import { getProductNames } from "../../Enums/productNames";
import { getStoreName } from "../../Enums/storeNames";
import { findClosestNumber } from "../../helpers/findClosestNumber";
import Button from "../../Components/Button";
import { FilteredObject } from "../../Components/DataView";
import NoDataMessage from "../../Components/NoDataMessage";
import styled from "styled-components";

interface IProps {
  filteredDeliveries: FilteredObject[];
  toggleComponent: () => void;
}

const Table: FC<IProps> = ({ filteredDeliveries, toggleComponent }) => {
  const displayTableData = () => {
    return filteredDeliveries.map((item, index) => (
      <StyledTableRow key={index}>
        <StyledTableCell>{getStoreName(item.id_store)}</StyledTableCell>
        <StyledTableCell>{getProductNames(item.id_product)}</StyledTableCell>
        <StyledTableCell>
          {format(
            parse(item.target_date, "yyyy-MM-dd", new Date()),
            "yy-MM-dd"
          )}
        </StyledTableCell>
        <StyledTableCell>
          {item.recommendation > 0 ? item.recommendation : 0}
        </StyledTableCell>
        <StyledTableCell>{item.delivery_qty}</StyledTableCell>
        <StyledTableCell>{item.demand_qty}</StyledTableCell>
        <StyledTableCell>
          {findClosestNumber(
            item.delivery_qty,
            item.recommendation,
            item.demand_qty
          )}
        </StyledTableCell>
      </StyledTableRow>
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
        <table>
          <StyledTableHeader>
            <StyledTableCell>Store</StyledTableCell>
            <StyledTableCell>Product</StyledTableCell>
            <StyledTableCell>Date </StyledTableCell>
            <StyledTableCell>Recomm...</StyledTableCell>
            <StyledTableCell>Delivery</StyledTableCell>
            <StyledTableCell>Demand</StyledTableCell>
            <StyledTableCell>Forecast Tendency</StyledTableCell>
          </StyledTableHeader>

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

const StyledTableHeader = styled.th`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  z-index: 2;
`;

const StyledTableRow = styled.tr`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

const StyledTableCell = styled.tr`
  background-color: #ffffff;
  text-align: center;
  padding: 10px;
  border: 1px solid #ddd;
`;

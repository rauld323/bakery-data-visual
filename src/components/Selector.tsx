import React, { FC } from "react";

interface IProps {
  label: string;
  value: string | number;
  uniqueItem: number[] | string[];
  onChange?: (e: any) => void;
}

const Selector: FC<IProps> = ({ value, uniqueItem, label, onChange }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        margin: "10px",
      }}
    >
      <label style={{ marginBottom: "5px", fontWeight: "600", color: "white" }}>
        {label}
      </label>
      <select
        value={value}
        onChange={onChange}
        style={{
          backgroundColor: "white",
          height: "35px",
          width: "120px",
          borderRadius: "10px",
          outline: "none",
          fontWeight: "bold",
        }}
      >
        <option value="">{`All ${label}`}</option>
        {uniqueItem.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selector;

import React, { FC } from "react";

interface IProps {
  children: any;
}

const Frame: FC<IProps> = ({ children }) => {
  return (
    <div
      style={{
        margin: "5% 15%",
        display: "flex",
        justifyContent: "center",
        borderRadius: "10px",
        border: "1px solid black",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {children}
    </div>
  );
};

export default Frame;

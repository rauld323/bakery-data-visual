import { FC } from "react";

interface IProps {
  message?: string;
  paddingTop?: string;
}

const NoDataMessage: FC<IProps> = ({
  message = "Sorry, there is no data for that query!",
  paddingTop = "80px",
}) => {
  return (
    <div style={{ paddingTop }}>
      <h1>{message}</h1>
    </div>
  );
};

export default NoDataMessage;

import Tooltip from "src/Components/Tooltip";
import { isEmpty, returnZeroIfEmpty } from "./isEmpty";

export function findClosestNumber(
  delivery: number,
  recommendation: number,
  demand: number
) {
  const deliveryDistance = Math.abs(delivery - demand);
  const recommendationDistance = Math.abs(
    returnZeroIfEmpty(recommendation) - demand
  );

  if (isEmpty(recommendation)) {
    return (
      <Tooltip content={"Recommendation is not provided."}>
        <div>N/A</div>
      </Tooltip>
    );
  } else if (deliveryDistance < recommendationDistance) {
    return (
      <Tooltip content={"Delivery quantity is closer to the demand."}>
        <div>Improved</div>
      </Tooltip>
    );
  } else if (deliveryDistance > recommendationDistance) {
    return (
      <Tooltip content={"Order Recommendation is closer to actual demand."}>
        <div>Deteriorated</div>
      </Tooltip>
    );
  } else
    return (
      <Tooltip content={"Recommendation and Delivery values are the same."}>
        <div>Same</div>
      </Tooltip>
    );
}

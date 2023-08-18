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
    return "N/A";
  } else if (deliveryDistance < recommendationDistance) {
    return "Improved";
  } else if (deliveryDistance > recommendationDistance) {
    return "Deteriorated";
  } else return "Same";
}

import { returnZeroIfEmpty } from "./isEmpty";

export function findClosestNumber(
  delivery: number,
  recommendation: number,
  demand: number
) {
  const deliveryDistance = Math.abs(delivery - demand);
  const recommendationDistance = Math.abs(
    returnZeroIfEmpty(recommendation) - demand
  );

  console.log(deliveryDistance, recommendationDistance);
  if (deliveryDistance < recommendationDistance) {
    return "Improved";
  } else if (deliveryDistance > recommendationDistance) {
    return "Deteriorated";
  } else return "Same";
}

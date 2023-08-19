import { createContext } from "react";
import deliveries from "../Data/deliveries.json";
import recommendations from "../Data/recommendations.json";
import sales from "../Data/sales.json";

export const BakeryContext = createContext({
  deliveries,
  recommendations,
  sales,
});

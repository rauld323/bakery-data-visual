import { createContext, useContext } from "react";

const BakeryContext = createContext("");

export default BakeryContext;

export function useBakeryData() {
  const context = useContext(BakeryContext);
  return context;
}

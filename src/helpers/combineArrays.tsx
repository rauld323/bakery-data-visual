import {
  DeliveryObject,
  RecomendationObject,
  SalesObject,
} from "../components/DataView";

export function combineObjectsByMatchingKeys(
  arr1: DeliveryObject[],
  arr2: RecomendationObject[] | SalesObject[]
) {
  const combinedArray = [];
  const mapArray2 = new Map();
  for (const obj2 of arr2) {
    const key = `${obj2.target_date}-${obj2.id_store}-${obj2.id_product}`;
    mapArray2.set(key, obj2);
  }

  for (const obj1 of arr1) {
    const key = `${obj1.target_date}-${obj1.id_store}-${obj1.id_product}`;
    if (mapArray2.has(key)) {
      const obj2 = mapArray2.get(key);
      combinedArray.push({ ...obj1, ...obj2 });
      mapArray2.delete(key);
    } else {
      combinedArray.push(obj1);
    }
  }

  return combinedArray;
}

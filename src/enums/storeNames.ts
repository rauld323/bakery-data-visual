export enum StoreName {
  "Store Three" = 100790000,
  "Store Six" = 100790001,
  "Store Nine" = 100790002,
}

export function getStoreName(
  storeName: StoreName
): string[] | number[] | string {
  switch (storeName) {
    case StoreName["Store Three"]:
      return "Store Three";
    case StoreName["Store Six"]:
      return "Store Six";
    default:
      return "Store Nine";
  }
}

enum StoreName {
  STORE_THREE = 100790000,
  STORE_SIX = 100790001,
  STORE_NINE = 100790002,
}

export function getStoreName(storeName: StoreName): string | number {
  switch (storeName) {
    case StoreName.STORE_THREE:
      return "Three";
    case StoreName.STORE_SIX:
      return "Six";
    default:
      return "Nine";
  }
}

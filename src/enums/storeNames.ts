export function getStoreName(storeName: string | number) {
  switch (storeName) {
    case 100790000:
      return "Three";
    case 100790001:
      return "Six";
    default:
      return "Nine";
  }
}

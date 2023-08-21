export function getProductNames(productName: number[] | string | number) {
  switch (productName) {
    case 100700034:
      return "Croissant";
    case 100700070:
      return "Black Bread";
    case 100700080:
      return "Danish Pastry";
    default:
      return "Grain Roll";
  }
}

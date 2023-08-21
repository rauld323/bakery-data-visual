export enum ProductName {
  PRODUCT_CROISSANT = 100700034,
  PRODUCT_BLACK_BREAD = 100700070,
  PRODUCT_DANISH_PASTRY = 100700080,
}

export function getProductNames(productName: any | string) {
  switch (productName) {
    case ProductName.PRODUCT_CROISSANT || 100700034:
      return "Croissant";
    case ProductName.PRODUCT_BLACK_BREAD || 100700070:
      return "Black bread";
    case ProductName.PRODUCT_DANISH_PASTRY || 100700080:
      return "Danish pastry";
    default:
      return "Grain roll";
  }
}

export enum ProductNames {
  "Croissant" = 100700034,
  "Black bread" = 100700070,
  "Danish pastry" = 100700080,
  "Grain roll" = 100700091,
}

export function getProductNames(productName: ProductNames): string {
  switch (productName) {
    case ProductNames["Croissant"] || 100700034:
      return "Croissant";
    case ProductNames["Black bread"] || 100700070:
      return "Black bread";
    case ProductNames["Danish pastry"] || 100700080:
      return "Danish pastry";
    default:
      return "Grain roll";
  }
}

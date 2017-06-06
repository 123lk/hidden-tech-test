export function findById (array) {
  return array.reduce(function (acc, product) {
    acc[product.id] = product;
    return acc;
  }, {});
}
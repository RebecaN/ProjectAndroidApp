const Product = require("../model/Product");
const productCtrl = {};

const products = [];
products.push(new Product("Apa", "Apa minerala", 1));
products.push(new Product("Branza", "20 grame", 2));
products.push(new Product("Paine", "Cu seminte", 3));

productCtrl.product = (request, response) => {
  response.send(products);
};

productCtrl.productById = (request, response) => {
  console.log(request.params.id);

  response.send(products.find(p => p.id === parseInt(request.params.id)));
};

module.exports = productCtrl;
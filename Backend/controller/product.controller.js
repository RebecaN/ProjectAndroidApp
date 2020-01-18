const ProductDto = require("../dto/Product");
const productService = require("../service/product.service");
const productCtrl = {};

  productCtrl.product = async (request, response) => {
    const products = await productService.allProducts();
    response.send(products);
};

productCtrl.productById = async (request, response, next) => {
  const productId = request.params.id;
  productService
    .getProductByID(productId)
    .then(product => response.send(product))
    .catch(err => {
      console.log("here");
      next(err);
    });
};

module.exports = productCtrl;
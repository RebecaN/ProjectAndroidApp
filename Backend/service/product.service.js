const Product = require("../model/Product");
const ProductDto = require("../dto/Product");

class ProductService {
  async getProductByID(id) {
    const productCol = await Product.find({ id: id }).limit(1);
    const product = productCol[0];
    if (product) {
      return new ProductDto(product.name, product.description, product.id);
    } else {
      throw Error(`ID ${id} not found`);
    }
  }

  async allProducts() {
    const products = await Product.find();
    const productsDto = [];
    for (const p of products) {
      productsDto.push(new ProductDto(p.name, p.description, p.id));
    }
    return productsDto;
  }
}

module.exports = new ProductService();
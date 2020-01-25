
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  id: {
    type: String
  }
});

/**
 * @typedef Iconset
 */
module.exports = mongoose.model("Product", productSchema);
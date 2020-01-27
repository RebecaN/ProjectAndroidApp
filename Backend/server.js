console.log("---- Starting the backend -----")

 const cors = require("cors");
 const express = require("express");
 const app = express();
 const productRouter = require("./route/product.route");

 //const Product = require("./db-model/Product");
 const Product = require("./model/Product");

 const mongoose = require("mongoose");
//se creaza in mongo DB 
  const url = "mongodb://localhost:27017/test";
  mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
  });

  _fillUpDB();
  app.use(cors());
  app.use("/", productRouter);

  app.listen(3002, () => {
    console.log("listening on 3002");
});

function _fillUpDB() {
  const products = [];
  products.push(
    new Product({ name: "test", description: "test", id: 1 })
  );

  for (const p of products) {
    p.save();
  }
}
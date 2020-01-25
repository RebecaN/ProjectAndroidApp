console.log("---- Starting the backend -----")

 const cors = require("cors");
 const express = require("express");
 const app = express();
 const productRouter = require("./route/product.route");

 //const Product = require("./db-model/Product");
 const Product = require("./model/Product");

 const mongoose = require("mongoose");
//se creaza in mongo DB Legume
 const url = "mongodb://localhost:27017/Ingrediente";
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
    new Product({ name: "Ardei iute", description: "legume", id: 1 })
  );
  products.push(
    new Product({ name: "Ardei portocaliu", description: "legume", id: 2 })
  );
  products.push(
    new Product({ name: "Ardei rosu", description: "legume", id: 3 })
  );
  products.push(
    new Product({ name: "Ardei verde", description: "legume", id: 4 })
  );
  products.push(
    new Product({ name: "Afine", description: "fructe", id: 5 })
  );
  products.push(
    new Product({ name: "Ananas", description: "fructe", id: 6 })
  );
  products.push(
    new Product({ name: "Avocado", description: "fructe", id: 7 })
  );
  products.push(
    new Product({ name: "Banane", description: "fructe", id: 8 })
  );

  for (const p of products) {
    p.save();
  }
}
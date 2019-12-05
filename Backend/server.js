console.log("---- Starting the backend -----")

 const express = require("express");
 const app = express();
 
  app.get('/', function (request, response) {
    // do something here
    response.send('is working')
  })

  const productRouter = require("./route/product.route");

  app.use("/", productRouter);

  app.listen(3002, () => {
    console.log("listening on 3000");
});
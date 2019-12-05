const express = require("express");
const productCtrl = require("../controller/product.controller");

const router = express.Router();
router.get("/product", productCtrl.product);
router.get("/product/:id", productCtrl.productById);

module.exports = router;
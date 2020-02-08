const express = require("express");
const productCtrl = require("../controller/product.controller");

const router = express.Router();
router.get("/product", productCtrl.product);
router.get("/product/:id", productCtrl.productById);

module.exports = router;

// const express = require('express');
// const router = express.Router();
// const mongoose = require('mongoose');

// const product = require('../model/product');

// const db =""
// mongoose.Promise = global.Promise;
// mongoose.connect(db, function(err){
//     if(err){
//         console.error("Error! "+err);
//     }
// });

// router.get('/',function(req,res){
//     res.send('Get request for all products');
//     product.find({})
//     .exec(function(err,product){
//         if(err){
//             console.log()
//         }
//     });
// });

// module.exports = router;
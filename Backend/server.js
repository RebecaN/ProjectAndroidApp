console.log("---- Starting the backend -----")

 const cors = require("cors");
 const express = require("express");
 const app = express();
 const productRouter = require("./route/product.route");

 //const Product = require("./db-model/Product");
 const Product = require("./model/Product");

 const mongoose = require("mongoose");
//se creaza in mongo DB 
  const url = "mongodb://localhost:27017/Pam";
  mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
  });

  //_fillUpDB();
  app.use(cors());
  app.use("/", productRouter);

  app.listen(3002, () => {
    console.log("listening on 3002");
});

// function _fillUpDB() {
//   const products = [];
//   products.push(
//     new Product({ name: "Biscuiti", description: "carbo", id: 1 })
//   );
//   products.push(
//     new Product({ name: "Cuscus", description: "carbo", id: 2 })
//   );
//   products.push(
//     new Product({ name: "Faina", description: "carbo", id: 3 })
//   );
//   products.push(
//     new Product({ name: "Gris", description: "carbo", id: 4 })
//   );
//   products.push(
//     new Product({ name: "Malai", description: "carbo", id: 5 })
//   );
//   products.push(
//     new Product({ name: "Orez", description: "carbo", id: 6 })
//   );
//   products.push(
//     new Product({ name: "Paine", description: "carbo", id: 7 })
//   );
//   products.push(
//     new Product({ name: "Paste", description: "carbo", id: 8 })
//   );
//   products.push(
//     new Product({ name: "Pesmet", description: "carbo", id: 9 })
//   );
//   products.push(
//     new Product({ name: "Piscoturi", description: "carbo", id: 10 })
//   );
//   products.push(
//     new Product({ name: "Tarta", description: "carbo", id: 11 })
//   );
//   products.push(
//     new Product({ name: "Lipie", description: "carbo", id: 12 })
//   );
// products.push(
//     new Product({ name: "Boia", description: "condimente", id: 13 })
//   );
//   products.push(
//     new Product({ name: "Bors", description: "condimente", id: 14 })
//   );
//   products.push(
//     new Product({ name: "Busuioc", description: "condimente", id: 15 })
//   );
//   products.push(
//     new Product({ name: "Cacao", description: "condimente", id: 16 })
//   );
//   products.push(
//     new Product({ name: "Cafea", description: "condimente", id: 17 })
//   );
//   products.push(
//     new Product({ name: "Capere", description: "condimente", id: 18 })
//   );
//   products.push(
//     new Product({ name: "Chili", description: "condimente", id: 19 })
//   );
//   products.push(
//     new Product({ name: "Chimen", description: "condimente", id: 20 })
//   );
//   products.push(
//     new Product({ name: "Chimion", description: "condimente", id: 21 })
//   );
//   products.push(
//     new Product({ name: "Cimbru", description: "condimente", id: 22 })
//   );
//   products.push(
//     new Product({ name: "Ciocolata", description: "condimente", id: 23 })
//   );
//   products.push(
//     new Product({ name: "Coriandru", description: "condimente", id: 24 })
//   );
//   products.push(
//     new Product({ name: "Curry", description: "condimente", id: 25 })
//   );
//   products.push(
//     new Product({ name: "Dafin", description: "condimente", id: 26 })
//   );
//   products.push(
//     new Product({ name: "Rom", description: "condimente", id: 27 })
//   );
//   products.push(
//     new Product({ name: "Vanilie", description: "condimente", id: 28 })
//   );
//   products.push(
//     new Product({ name: "Maioneza", description: "condimente", id: 29 })
//   );
//   products.push(
//     new Product({ name: "Menta", description: "condimente", id: 30 })
//   );
//   products.push(
//     new Product({ name: "Miere", description: "condimente", id: 31 })
//   );
//   products.push(
//     new Product({ name: "Mustar", description: "condimente", id: 32 })
//   );
//   products.push(
//     new Product({ name: "Nucsoara", description: "condimente", id: 33 })
//   );
//   products.push(
//     new Product({ name: "Oregano", description: "condimente", id: 34 })
//   );
//   products.push(
//     new Product({ name: "Otet", description: "condimente", id: 35 })
//   );
//   products.push(
//     new Product({ name: "Piper", description: "condimente", id: 36 })
//   );
//   products.push(
//     new Product({ name: "Rozmarin", description: "condimente", id: 37 })
//   );
//   products.push(
//     new Product({ name: "Sare", description: "condimente", id: 38 })
//   );
//   products.push(
//     new Product({ name: "Scortisoara", description: "condimente", id: 39 })
//   );
//   products.push(
//     new Product({ name: "Sofran", description: "condimente", id: 40 })
//   );
//   products.push(
//     new Product({ name: "Pesto", description: "condimente", id: 41 })
//   );
//   products.push(
//     new Product({ name: "Tarhon", description: "condimente", id: 42 })
//   );
//   products.push(
//     new Product({ name: "Ulei FS", description: "condimente", id: 43 })
//   );
//   products.push(
//     new Product({ name: "Ulei M", description: "condimente", id: 44 })
//   );
//   products.push(
//     new Product({ name: "Vin", description: "condimente", id: 45 })
//   );
//   products.push(
//     new Product({ name: "Wasabi", description: "condimente", id: 46 })
//   );
// products.push(
//     new Product({ name: "Zahar", description: "condimente", id: 47 })
//   );
// products.push(
//     new Product({ name: "Afine", description: "fructe", id: 48 })
//   );
//   products.push(
//     new Product({ name: "Ananas", description: "fructe", id: 49 })
//   );
//   products.push(
//     new Product({ name: "Avocado", description: "fructe", id: 50 })
//   );
//   products.push(
//     new Product({ name: "Banane", description: "fructe", id: 51 })
//   );
//   products.push(
//     new Product({ name: "Caise", description: "fructe", id: 52 })
//   );
//   products.push(
//     new Product({ name: "Capsuni", description: "fructe", id: 53 })
//   );
//   products.push(
//     new Product({ name: "Clementine", description: "fructe", id: 54 })
//   );
//   products.push(
//     new Product({ name: "Cirese", description: "fructe", id: 55 })
//   );
//   products.push(
//     new Product({ name: "Coacaze", description: "fructe", id: 56 })
//   );
//   products.push(
//     new Product({ name: "Cocos", description: "fructe", id: 57 })
//   );
//   products.push(
//     new Product({ name: "Corcoduse", description: "fructe", id: 58 })
//   );
//   products.push(
//     new Product({ name: "Dude", description: "fructe", id: 59 })
//   );
//   products.push(
//     new Product({ name: "Grepfrut", description: "fructe", id: 60 })
//   );
//   products.push(
//     new Product({ name: "Gutuie", description: "fructe", id: 61 })
//   );
//   products.push(
//     new Product({ name: "Kiwi", description: "fructe", id: 62 })
//   );
//   products.push(
//     new Product({ name: "Lamaie", description: "fructe", id: 63 })
//   );
//   products.push(
//     new Product({ name: "Lime", description: "fructe", id: 64 })
//   );
//   products.push(
//     new Product({ name: "Mango", description: "fructe", id: 65 })
//   );
//   products.push(
//     new Product({ name: "Mandarina", description: "fructe", id: 66 })
//   );
//   products.push(
//     new Product({ name: "Mar", description: "fructe", id: 67 })
//   );
//   products.push(
//     new Product({ name: "Masline", description: "fructe", id: 68 })
//   );
//   products.push(
//     new Product({ name: "Mure", description: "fructe", id: 69 })
//   );
//   products.push(
//     new Product({ name: "Papaya", description: "fructe", id: 70 })
//   );
//   products.push(
//     new Product({ name: "Para", description: "fructe", id: 71 })
//   );
//   products.push(
//     new Product({ name: "Pepene galben", description: "fructe", id: 72 })
//   );
//   products.push(
//     new Product({ name: "Pepene", description: "fructe", id: 73 })
//   );
//   products.push(
//     new Product({ name: "Piersica", description: "fructe", id: 74 })
//   );
//   products.push(
//     new Product({ name: "Portocala", description: "fructe", id: 75 })
//   );
//   products.push(
//     new Product({ name: "Pruna", description: "fructe", id: 76 })
//   );
//   products.push(
//     new Product({ name: "Rodie", description: "fructe", id: 77 })
//   );
//   products.push(
//     new Product({ name: "Rosie", description: "fructe", id: 78 })
//   );
//   products.push(
//     new Product({ name: "Smochine", description: "fructe", id: 79 })
//   );
//   products.push(
//     new Product({ name: "Visine", description: "fructe", id: 80 })
//   );
//   products.push(
//     new Product({ name: "Struguri", description: "fructe", id: 81 })
//   );
//   products.push(
//     new Product({ name: "Zmeura", description: "fructe", id: 82 })
//   );
// products.push(
//     new Product({ name: "Branza", description: "lactate", id: 83 })
//   );
//   products.push(
//     new Product({ name: "Branza Brie", description: "lactate", id: 84 })
//   );
//   products.push(
//     new Product({ name: "Cascaval", description: "lactate", id: 85 })
//   );
//   products.push(
//     new Product({ name: "Kefir", description: "lactate", id: 86 })
//   );
//   products.push(
//     new Product({ name: "Frisca", description: "lactate", id: 87 })
//   );
//   products.push(
//     new Product({ name: "Gorgonzola", description: "lactate", id: 88 })
//   );
//   products.push(
//     new Product({ name: "Iaurt", description: "lactate", id: 89 })
//   );
//   products.push(
//     new Product({ name: "Lapte", description: "lactate", id: 90 })
//   );
//   products.push(
//     new Product({ name: "Mascarpone", description: "lactate", id: 91 })
//   );
//   products.push(
//     new Product({ name: "Mozzarella", description: "lactate", id: 92 })
//   );
//   products.push(
//     new Product({ name: "Parmezan", description: "lactate", id: 93 })
//   );
//   products.push(
//     new Product({ name: "Smantana", description: "lactate", id: 94 })
//   );
//   products.push(
//     new Product({ name: "Telemea", description: "lactate", id: 95 })
//   );
//   products.push(
//     new Product({ name: "Unt", description: "lactate", id: 96 })
//   );
//   products.push(
//     new Product({ name: "Urda", description: "lactate", id: 97 })
//   );
// products.push(
//     new Product({ name: "Ardei iute", description: "legume", id: 98 })
//   );
//   products.push(
//     new Product({ name: "Ardei portocaliu", description: "legume", id: 99 })
//   );
//   products.push(
//     new Product({ name: "Ardei rosu", description: "legume", id: 100 })
//   );
//   products.push(
//     new Product({ name: "Ardei verde", description: "legume", id: 101 })
//   );
//   products.push(
//     new Product({ name: "Ardei kapia", description: "legume", id: 102 })
//   );
//   products.push(
//     new Product({ name: "Broccoli", description: "legume", id: 103 })
//   );
//   products.push(
//     new Product({ name: "Cartofi", description: "legume", id: 104 })
//   );
//   products.push(
//     new Product({ name: "Cartof dulce", description: "legume", id: 105 })
//   );
//   products.push(
//     new Product({ name: "Castravete", description: "legume", id: 106 })
//   );
//   products.push(
//     new Product({ name: "Ceapa", description: "legume", id: 107 })
//   );
//   products.push(
//     new Product({ name: "Conopida", description: "legume", id: 108 })
//   );
//   products.push(
//     new Product({ name: "Dovleac", description: "legume", id: 109 })
//   );
//   products.push(
//     new Product({ name: "Dovlecel", description: "legume", id: 110 })
//   );
//   products.push(
//     new Product({ name: "Fasole", description: "legume", id: 111 })
//   );
//   products.push(
//     new Product({ name: "Ghimbir", description: "legume", id: 112 })
//   );
//   products.push(
//     new Product({ name: "Gulie", description: "legume", id: 113 })
//   );
//   products.push(
//     new Product({ name: "Hrean", description: "legume", id: 114 })
//   );
//   products.push(
//     new Product({ name: "Leusteam", description: "legume", id: 115 })
//   );
//   products.push(
//     new Product({ name: "Linte", description: "legume", id: 116 })
//   );
//   products.push(
//     new Product({ name: "Loboda", description: "legume", id: 117 })
//   );
//   products.push(
//     new Product({ name: "Marar", description: "legume", id: 118 })
//   );
//   products.push(
//     new Product({ name: "Mazare", description: "legume", id: 119 })
//   );
//   products.push(
//     new Product({ name: "Morcov", description: "legume", id: 120 })
//   );
//   products.push(
//     new Product({ name: "Naut", description: "legume", id: 121 })
//   );
//   products.push(
//     new Product({ name: "Pastarnac", description: "legume", id: 122 })
//   );
//   products.push(
//     new Product({ name: "Patrunjel", description: "legume", id: 123 })
//   );
//   products.push(
//     new Product({ name: "Praz", description: "legume", id: 124 })
//   );
//   products.push(
//     new Product({ name: "Ridiche", description: "legume", id: 125 })
//   );
//   products.push(
//     new Product({ name: "Salata", description: "legume", id: 126 })
//   );
//   products.push(
//     new Product({ name: "Sfecla", description: "legume", id: 127 })
//   );
//   products.push(
//     new Product({ name: "Soia", description: "legume", id: 128 })
//   );
//   products.push(
//     new Product({ name: "Spanac", description: "legume", id: 129 })
//   );
//   products.push(
//     new Product({ name: "Sparanghel", description: "legume", id: 130 })
//   );
//   products.push(
//     new Product({ name: "Stevie", description: "legume", id: 131 })
//   );
//   products.push(
//     new Product({ name: "Telina", description: "legume", id: 132 })
//   );
//   products.push(
//     new Product({ name: "Usturoi", description: "legume", id: 133 })
//   );
//   products.push(
//     new Product({ name: "Vanata", description: "legume", id: 134 })
//   );
//   products.push(
//     new Product({ name: "Varza", description: "legume", id: 135 })
//   );
// products.push(
//     new Product({ name: "Bacon", description: "prod_animale", id: 136 })
//   );
//   products.push(
//     new Product({ name: "Caras", description: "prod_animale", id: 137 })
//   );
//   products.push(
//     new Product({ name: "Carnat", description: "prod_animale", id: 138 })
//   );
//   products.push(
//     new Product({ name: "Crap", description: "prod_animale", id: 139 })
//   );
//   products.push(
//     new Product({ name: "Crenvursti", description: "prod_animale", id: 140 })
//   );
//   products.push(
//     new Product({ name: "Curcan", description: "prod_animale", id: 141 })
//   );
//   products.push(
//     new Product({ name: "Fructe de mare", description: "prod_animale", id: 142 })
//   );
//   products.push(
//     new Product({ name: "Jambon", description: "prod_animale", id: 143 })
//   );
//   products.push(
//     new Product({ name: "Macrou", description: "prod_animale", id: 144 })
//   );
//   products.push(
//     new Product({ name: "Ou", description: "prod_animale", id: 145 })
//   );
//   products.push(
//     new Product({ name: "Pastrav", description: "prod_animale", id: 146 })
//   );
//   products.push(
//     new Product({ name: "Platica", description: "prod_animale", id: 147 })
//   );
//   products.push(
//     new Product({ name: "Porc", description: "prod_animale", id: 148 })
//   );
//   products.push(
//     new Product({ name: "Prosciutto", description: "prod_animale", id: 149 })
//   );
//   products.push(
//     new Product({ name: "Pui", description: "prod_animale", id: 150 })
//   );
//   products.push(
//     new Product({ name: "Salam", description: "prod_animale", id: 151 })
//   );
//   products.push(
//     new Product({ name: "Slanina", description: "prod_animale", id: 152 })
//   );
//   products.push(
//     new Product({ name: "Somn", description: "prod_animale", id: 153 })
//   );
//   products.push(
//     new Product({ name: "Somon", description: "prod_animale", id: 154 })
//   );
//   products.push(
//     new Product({ name: "Sunca", description: "prod_animale", id: 155 })
//   );
//   products.push(
//     new Product({ name: "Vita", description: "prod_animale", id: 156 })
//   );
// products.push(
//     new Product({ name: "Oaie", description: "prod_animale", id: 157 })
//   );

//   for (const p of products) {
//     p.save();
//   }
// }
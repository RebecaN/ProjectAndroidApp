import { Component, OnInit } from '@angular/core';
import { ApiService } from "src/app/api/api.service";
import { Product } from "src/app/model/product.model";

@Component({
  selector: 'app-food',
  templateUrl: './food.page.html',
  styleUrls: ['./food.page.scss'],
})
export class FoodPage implements OnInit {

  public products: Array<Product> = [];
  constructor(private apiService: ApiService) { }
//URL Legume
  ardei_I = "assets/legume/ardei_iuti.jpg";
  ardeiIURL = `url(${this.ardei_I})`;
  ardei_P = "assets/legume/ardei_porto.jpg";
  ardeiPURL = `url(${this.ardei_P})`;
  ardei_R = "assets/legume/ardei_rosii.jpg";
  ardeiRURL = `url(${this.ardei_R})`;
  ardei_V = "assets/legume/ardei_verzi.jpg";
  ardeiVURL = `url(${this.ardei_V})`;
  //URL Carbo
  biscuiti = "assets/carbo/biscuiti.jpg";
  biscuitiURL = `url(${this.biscuiti})`;
  cuscus = "assets/carbo/cuscus.jpg";
  cuscusURL = `url(${this.cuscus})`;
  faina = "assets/carbo/faina.jpg";
  fainaURL = `url(${this.faina})`;
  gris = "assets/carbo/gris.jpg";
  grisURL = `url(${this.gris})`;
  //URL condimente
  boia = "assets/condimente/boia.jpg";
  boiaURL = `url(${this.boia})`;
  bors = "assets/condimente/bors.jpg";
  borsURL = `url(${this.bors})`;
  busuioc = "assets/condimente/busuioc.jpg";
  busuiocURL = `url(${this.busuioc})`;
  cacao = "assets/condimente/cacao.jpg";
  cacaoURL = `url(${this.cacao})`;
   //URL fructe
   afine = "assets/fructe/afine.png";
   afineURL = `url(${this.afine})`;
   ananas = "assets/fructe/ananas.jpg";
   ananasURL = `url(${this.ananas})`;
   avocado = "assets/fructe/avocado.jpg";
   avocadoURL = `url(${this.avocado})`;
   banane = "assets/fructe/banane.jpg";
   bananeURL = `url(${this.banane})`;
   //URL lactate
   branza_brie = "assets/lactate/branza_brie.jpg";
   branza_brieURL = `url(${this.branza_brie})`;
   branza = "assets/lactate/branza.jpg";
   branzaURL = `url(${this.branza})`;
   cascaval = "assets/lactate/cascaval.jpg";
   cascavalURL = `url(${this.cascaval})`;
   kefir = "assets/lactate/kefir.jpg";
   kefirURL = `url(${this.kefir})`;
   //URL produse animale
   bacon = "assets/prod_animal/bacon.jpg";
   baconURL = `url(${this.bacon})`;
   caras = "assets/prod_animal/caras.jpg";
   carasURL = `url(${this.caras})`;
   carnat = "assets/prod_animal/carnat.jpg";
   carnatURL = `url(${this.carnat})`;
   crap = "assets/prod_animal/crap.jpg";
   crapURL = `url(${this.crap})`;
  
   ngOnInit() {
    //this.apiService.getAllProducts().subscribe(res => {
      //console.log(res);
    this.apiService.getAllProducts().subscribe(apiProducts => {
      for (let prod of apiProducts) {
        this.products.push(new Product(prod.name, prod.description, prod.id));
      }
    });
  }

}

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
  // trebuie puse imagini
  ardei_K = "";
  ardeiKURL = `url(${this.ardei_V})`;
  broccoli = "";
  broccoliURL = `url(${this.broccoli})`;
  cartofi = "";
  cartofiURL = `url(${this.cartofi})`;
  cartof_D = "";
  cartofDURL = `url(${this.cartof_D})`;
  castravete = "";
  castraveteURL = `url(${this.castravete})`;
  ceapa = "";
  ceapaURL = `url(${this.ceapa})`;
  conopida = "";
  conopidaURL = `url(${this.conopida})`;
  dovleac = "";
  dovleacURL = `url(${this.dovleac})`;
  dovlecel = "";
  dovlecelURL = `url(${this.dovlecel})`;
  fasole = "";
  fasoleURL = `url(${this.fasole})`;
  ghimbir = "";
  ghimbirURL = `url(${this.ghimbir})`;
  gulie = "";
  gulieURL = `url(${this.gulie})`;
  hrean = "";
  hreanURL = `url(${this.hrean})`;
  leustean = "";
  leusteanURL = `url(${this.leustean})`;
  linte = "";
  linteURL = `url(${this.linte})`;
  loboda = "";
  lobodaURL = `url(${this.loboda})`;
  marar = "";
  mararURL = `url(${this.marar})`;
  mazare = "";
  mazareURL = `url(${this.mazare})`;
  morcov = "";
  morcovURL = `url(${this.morcov})`;
  naut = "";
  nautURL = `url(${this.naut})`;
  pastarnac = "";
  pastarnacURL = `url(${this.pastarnac})`;
  patrunjel = "";
  patrunjelURL = `url(${this.patrunjel})`;
  praz = "";
  prazURL = `url(${this.praz})`;
  ridiche = "";
  ridicheURL = `url(${this.ridiche})`;
  salata = "";
  salataURL = `url(${this.salata})`;
  sfecla = "";
  sfeclaURL = `url(${this.sfecla})`;
  soia = "";
  soiaURL = `url(${this.soia})`;
  spanac = "";
  spanacURL = `url(${this.spanac})`;
  sparanghel = "";
  sparanghelURL = `url(${this.sparanghel})`;
  stevie = "";
  stevieURL = `url(${this.stevie})`;
  telina = "";
  telinaURL = `url(${this.telina})`;
  usturoi = "";
  usturoiURL = `url(${this.usturoi})`;
  vanata = "";
  vanataURL = `url(${this.vanata})`;
  varza = "";
  varzaURL = `url(${this.varza})`;

  //URL carbo
  cuscus = "assets/carbo/cuscus.jpg";
  cuscusURL = `url(${this.cuscus})`;
  faina = "assets/carbo/faina.jpg";
  fainaURL = `url(${this.faina})`;
  // trebuie puse imagini
  malai = "";
  malaiURL = `url(${this.malai})`;
  orez = "";
  orezURL = `url(${this.orez})`;
  paine = "";
  paineURL = `url(${this.paine})`;
  paste = "";
  pasteURL = `url(${this.paste})`;
  pesmet = "";
  pesmetURL = `url(${this.pesmet})`;
  lipie = "";
  lipieURL = `url(${this.lipie})`;

  //URL condimente
  boia = "assets/condimente/boia.jpg";
  boiaURL = `url(${this.boia})`;
  bors = "assets/condimente/bors.jpg";
  borsURL = `url(${this.bors})`;
  busuioc = "assets/condimente/busuioc.jpg";
  busuiocURL = `url(${this.busuioc})`;
  //trebuie puse imagini
  capere = "";
  capereURL = `url(${this.capere})`;
  chili = "";
  chiliURL = `url(${this.chili})`;
  chimen = "";
  chimenURL = `url(${this.chimen})`;
  chimion = "";
  chimionURL = `url(${this.chimion})`;
  cimbru = "";
  cimbruURL = `url(${this.cimbru})`;
  coriandru = "";
  coriandruURL = `url(${this.coriandru})`;
  curry = "";
  curryURL = `url(${this.curry})`;
  dafin = "";
  dafinURL = `url(${this.dafin})`;
  maioneza = "";
  maionezaURL = `url(${this.maioneza})`;
  mirodenii = "";
  mirodeniiURL = `url(${this.mirodenii})`;
  mustar = "";
  mustarURL = `url(${this.mustar})`;
  oregano = "";
  oreganoURL = `url(${this.oregano})`;
  otet = "";
  otetURL = `url(${this.otet})`;
  piper = "";
  piperURL = `url(${this.piper})`;
  rozmarin = "";
  rozmarinURL = `url(${this.rozmarin})`;
  sare = "";
  sareURL = `url(${this.sare})`;
  sofran = "";
  sofranURL = `url(${this.sofran})`;
  pesto = "";
  pestoURL = `url(${this.pesto})`;
  tarhon = "";
  tarhonURL = `url(${this.tarhon})`;
  ulei_FS = "";
  ulei_FSURL = `url(${this.ulei_FS})`;
  ulei_M = "";
  ulei_MURL = `url(${this.ulei_M})`;
  vin = "";
  vinURL = `url(${this.vin})`;
  wasabi = "";
  wasabiURL = `url(${this.wasabi})`;

   //URL fructe
   avocado = "assets/fructe/avocado.jpg";
   avocadoURL = `url(${this.avocado})`;
  //trebuie puse imagini
   corcoduse = "";
   corcoduseURL = `url(${this.corcoduse})`;
   lamaie= "";
   lamaieURL = `url(${this.lamaie})`;
   masline = "";
   maslineURL = `url(${this.masline})`;
   papaya = "";
   papayaURL = `url(${this.papaya})`;
   rodie = "";
   rodieURL = `url(${this.rodie})`;
   rosie = "";
   rosieURL = `url(${this.rosie})`;
   struguri = "";
   struguriURL = `url(${this.struguri})`;

   //URL lactate
   branza = "assets/lactate/branza.jpg";
   branzaURL = `url(${this.branza})`;
   branza_brie = "assets/lactate/branza_brie.jpg";
   branza_brieURL = `url(${this.branza_brie})`;
   cascaval = "assets/lactate/cascaval.jpg";
   cascavalURL = `url(${this.cascaval})`;
   kefir = "assets/lactate/kefir.jpg";
   kefirURL = `url(${this.kefir})`;
  //trebuie puse imagini
   gorgonzola = "";
   gorgonzolaURL = `url(${this.gorgonzola})`;
   iaurt = "";
   iaurtURL = `url(${this.iaurt})`;
   lapte = "";
   lapteURL = `url(${this.lapte})`;
   mozzarella = "";
   mozzarellaURL = `url(${this.mozzarella})`;
   parmezan = "";
   parmezanURL = `url(${this.parmezan})`;
   smantana = "";
   smantanaURL = `url(${this.smantana})`;
   telemea = "";
   telemeaURL = `url(${this.telemea})`;
   unt = "";
   untURL = `url(${this.unt})`;
   urda = "";
   urdaURL = `url(${this.urda})`;

   //URL produse animale
   bacon = "assets/prod_animal/bacon.jpg";
   baconURL = `url(${this.bacon})`;
   caras = "assets/prod_animal/caras.jpg";
   carasURL = `url(${this.caras})`;
   carnat = "assets/prod_animal/carnat.jpg";
   carnatURL = `url(${this.carnat})`;
   crap = "assets/prod_animal/crap.jpg";
   crapURL = `url(${this.crap})`;
  //trenuie puse imagini
  crenvursti = "";
  crenvurstiURL = `url(${this.crenvursti})`;
  curcan = "";
  curcanURL = `url(${this.curcan})`;
   fructe_mare = "";
   fructe_mareURL = `url(${this.fructe_mare})`;
   jambon = "";
   jambonURL = `url(${this.jambon})`;
   macrou = "";
   macrouURL = `url(${this.macrou})`;
   ou = "";
   ouURL = `url(${this.ou})`;
   pastrav = "";
   pastravURL = `url(${this.pastrav})`;
   platica = "";
   platicaURL = `url(${this.platica})`;
   porc = "";
   porcURL = `url(${this.porc})`;
   prosciutto = "";
   prosciuttoURL = `url(${this.prosciutto})`;
   pui = "";
   puiURL = `url(${this.pui})`;
   salam = "";
   salamURL = `url(${this.salam})`;
   slanina = "";
   slaninaURL = `url(${this.slanina})`;
   somn = "";
   somnURL = `url(${this.somn})`;
   somon = "";
   somonURL = `url(${this.somon})`;
   sunca = "";
   suncaURL = `url(${this.sunca})`;
   vita = "";
   vitaURL = `url(${this.vita})`;

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

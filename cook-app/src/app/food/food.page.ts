import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/api/api.service";
import { Product } from "src/app/model/product.model";

@Component({
  selector: "app-food",
  templateUrl: "./food.page.html",
  styleUrls: ["./food.page.scss"]
})
export class FoodPage implements OnInit {
  public products: Array<Product> = [];
  constructor(private apiService: ApiService) {}
  //URL Legume
  ardei_I = "assets/legume/ardei_iuti.jpg";
  ardeiIURL = `url(${this.ardei_I})`;
  ardei_P = "assets/legume/ardei_porto.jpg";
  ardeiPURL = `url(${this.ardei_P})`;
  ardei_R = "assets/legume/ardei_rosii.jpg";
  ardeiRURL = `url(${this.ardei_R})`;
  ardei_V = "assets/legume/ardei_verzi.jpg";
  ardeiVURL = `url(${this.ardei_V})`;
  ardei_K = "assets/legume/ardei_kapia.jpg";
  ardeiKURL = `url(${this.ardei_K})`;
  broccoli = "assets/legume/broccoli.jpg";
  broccoliURL = `url(${this.broccoli})`;
  cartofi = "assets/legume/cartofi.jpg";
  cartofiURL = `url(${this.cartofi})`;
  cartof_D = "assets/legume/cartofi_dulci.jpg";
  cartofDURL = `url(${this.cartof_D})`;
  castravete = "assets/legume/castravete.jpg";
  castraveteURL = `url(${this.castravete})`;
  ceapa = "assets/legume/ceapa.jpg";
  ceapaURL = `url(${this.ceapa})`;
  conopida = "assets/legume/conopida.jpg";
  conopidaURL = `url(${this.conopida})`;
  dovleac = "assets/legume/dovleac.jpg";
  dovleacURL = `url(${this.dovleac})`;
  dovlecel = "assets/legume/dovlecel.jpg";
  dovlecelURL = `url(${this.dovlecel})`;
  fasole = "assets/legume/fasole.jpg";
  fasoleURL = `url(${this.fasole})`;
  ghimbir = "assets/legume/ghimbir.jpg";
  ghimbirURL = `url(${this.ghimbir})`;
  gulie = "assets/legume/gulie.jpg";
  gulieURL = `url(${this.gulie})`;
  hrean = "assets/legume/hrean.jpg";
  hreanURL = `url(${this.hrean})`;
  leustean = "assets/legume/leustean.jpg";
  leusteanURL = `url(${this.leustean})`;
  linte = "assets/legume/linte.jpg";
  linteURL = `url(${this.linte})`;
  loboda = "assets/legume/loboda.jpg";
  lobodaURL = `url(${this.loboda})`;
  marar = "assets/legume/marar.jpg";
  mararURL = `url(${this.marar})`;
  mazare = "assets/legume/mazare.jpg";
  mazareURL = `url(${this.mazare})`;
  morcov = "assets/legume/morcov.jpg";
  morcovURL = `url(${this.morcov})`;
  naut = "assets/legume/naut.jpg";
  nautURL = `url(${this.naut})`;
  pastarnac = "assets/legume/pastarnac.jpg";
  pastarnacURL = `url(${this.pastarnac})`;
  patrunjel = "assets/legume/patrunjel.jpg";
  patrunjelURL = `url(${this.patrunjel})`;
  praz = "assets/legume/praz.jpg";
  prazURL = `url(${this.praz})`;
  ridiche = "assets/legume/ridiche.jpg";
  ridicheURL = `url(${this.ridiche})`;
  salata = "assets/legume/salata.jpg";
  salataURL = `url(${this.salata})`;
  sfecla = "assets/legume/sfecla.jpg";
  sfeclaURL = `url(${this.sfecla})`;
  soia = "assets/legume/soia.jpg";
  soiaURL = `url(${this.soia})`;
  spanac = "assets/legume/spanac.jpg";
  spanacURL = `url(${this.spanac})`;
  sparanghel = "assets/legume/sparanghel.png";
  sparanghelURL = `url(${this.sparanghel})`;
  stevie = "assets/legume/stevie.jpg";
  stevieURL = `url(${this.stevie})`;
  telina = "assets/legume/telina.jpg";
  telinaURL = `url(${this.telina})`;
  usturoi = "assets/legume/usturoi.jpg";
  usturoiURL = `url(${this.usturoi})`;
  vanata = "assets/legume/vanata.jpg";
  vanataURL = `url(${this.vanata})`;
  varza = "assets/legume/varza.jpg";
  varzaURL = `url(${this.varza})`;

  //URL fructe
  avocado = "assets/fructe/avocado.jpg";
  avocadoURL = `url(${this.avocado})`;
  corcoduse = "assets/fructe/corcoduse.jpg";
  corcoduseURL = `url(${this.corcoduse})`;
  lamaie = "assets/fructe/lamaie.png";
  lamaieURL = `url(${this.lamaie})`;
  masline = "assets/fructe/masline.jpg";
  maslineURL = `url(${this.masline})`;
  papaya = "assets/fructe/papaya.jpg";
  papayaURL = `url(${this.papaya})`;
  rodie = "assets/fructe/rodie.jpg";
  rodieURL = `url(${this.rodie})`;
  rosie = "assets/fructe/rosie.jpg";
  rosieURL = `url(${this.rosie})`;
  struguri = "assets/fructe/struguri.jpg";
  struguriURL = `url(${this.struguri})`;

  //URL produse animale
  bacon = "assets/prod_animal/bacon.jpg";
  baconURL = `url(${this.bacon})`;
  caras = "assets/prod_animal/caras.jpg";
  carasURL = `url(${this.caras})`;
  carnat = "assets/prod_animal/carnat.jpg";
  carnatURL = `url(${this.carnat})`;
  crap = "assets/prod_animal/crap.jpg";
  crapURL = `url(${this.crap})`;
  crenvursti = "assets/prod_animal/crenvursti.jpg";
  crenvurstiURL = `url(${this.crenvursti})`;
  curcan = "assets/prod_animal/curcan.jpg";
  curcanURL = `url(${this.curcan})`;
  fructe_mare = "assets/prod_animal/fructe_mare.jpg";
  fructe_mareURL = `url(${this.fructe_mare})`;
  jambon = "assets/prod_animal/jambon.jpg";
  jambonURL = `url(${this.jambon})`;
  macrou = "assets/prod_animal/macrou.jpg";
  macrouURL = `url(${this.macrou})`;
  oaie = "assets/prod_animal/oaie.jpg";
  oaieURL = `url(${this.oaie})`;
  ou = "assets/prod_animal/ou.jpg";
  ouURL = `url(${this.ou})`;
  pastrav = "assets/prod_animal/pastrav.jpg";
  pastravURL = `url(${this.pastrav})`;
  platica = "assets/prod_animal/platica.jpg";
  platicaURL = `url(${this.platica})`;
  porc = "assets/prod_animal/porc.jpg";
  porcURL = `url(${this.porc})`;
  prosciutto = "assets/prod_animal/prosciutto.jpg";
  prosciuttoURL = `url(${this.prosciutto})`;
  pui = "assets/prod_animal/pui.jpg";
  puiURL = `url(${this.pui})`;
  salam = "assets/prod_animal/salam.jpg";
  salamURL = `url(${this.salam})`;
  slanina = "assets/prod_animal/slanina.jpg";
  slaninaURL = `url(${this.slanina})`;
  somn = "assets/prod_animal/somn.jpg";
  somnURL = `url(${this.somn})`;
  somon = "assets/prod_animal/somon.jpg";
  somonURL = `url(${this.somon})`;
  sunca = "assets/prod_animal/sunca.jpg";
  suncaURL = `url(${this.sunca})`;
  vita = "assets/prod_animal/vita.jpg";
  vitaURL = `url(${this.vita})`;

  //URL lactate
  branza = "assets/lactate/branza.jpg";
  branzaURL = `url(${this.branza})`;
  branza_brie = "assets/lactate/branza_brie.jpg";
  branza_brieURL = `url(${this.branza_brie})`;
  cascaval = "assets/lactate/cascaval.jpg";
  cascavalURL = `url(${this.cascaval})`;
  kefir = "assets/lactate/kefir.jpg";
  kefirURL = `url(${this.kefir})`;
  gorgonzola = "assets/lactate/gorgonzola.jpg";
  gorgonzolaURL = `url(${this.gorgonzola})`;
  iaurt = "assets/lactate/iaurt.jpg";
  iaurtURL = `url(${this.iaurt})`;
  lapte = "assets/lactate/lapte.jpg";
  lapteURL = `url(${this.lapte})`;
  mozzarella = "assets/lactate/mozzarella.jpg";
  mozzarellaURL = `url(${this.mozzarella})`;
  parmezan = "assets/lactate/parmezan.jpg";
  parmezanURL = `url(${this.parmezan})`;
  smantana = "assets/lactate/smantana.jpg";
  smantanaURL = `url(${this.smantana})`;
  telemea = "assets/lactate/telemea.jpg";
  telemeaURL = `url(${this.telemea})`;
  unt = "assets/lactate/unt.jpg";
  untURL = `url(${this.unt})`;
  urda = "assets/lactate/urda.jpg";
  urdaURL = `url(${this.urda})`;

  //URL carbo
  cuscus = "assets/carbo/cuscus.jpg";
  cuscusURL = `url(${this.cuscus})`;
  faina = "assets/carbo/faina.jpg";
  fainaURL = `url(${this.faina})`;
  malai = "assets/carbo/malai.jpg";
  malaiURL = `url(${this.malai})`;
  orez = "assets/carbo/orez.jpg";
  orezURL = `url(${this.orez})`;
  paine = "assets/carbo/paine.jpg";
  paineURL = `url(${this.paine})`;
  paste = "assets/carbo/paste.jpg";
  pasteURL = `url(${this.paste})`;
  pesmet = "assets/carbo/pesmet.jpg";
  pesmetURL = `url(${this.pesmet})`;
  lipie = "assets/carbo/lipie.jpg";
  lipieURL = `url(${this.lipie})`;
  tarta = "assets/carbo/tarta.jpg";
  tartaURL = `url(${this.tarta})`;

  //URL condimente
  boia = "assets/condimente/boia.jpg";
  boiaURL = `url(${this.boia})`;
  bors = "assets/condimente/bors.jpg";
  borsURL = `url(${this.bors})`;
  busuioc = "assets/condimente/busuioc.jpg";
  busuiocURL = `url(${this.busuioc})`;
  capere = "assets/condimente/capere.jpg";
  capereURL = `url(${this.capere})`;
  chili = "assets/condimente/chili.jpg";
  chiliURL = `url(${this.chili})`;
  chimen = "assets/condimente/chimen.jpg";
  chimenURL = `url(${this.chimen})`;
  chimion = "assets/condimente/chimion.jpg";
  chimionURL = `url(${this.chimion})`;
  cimbru = "assets/condimente/cimbru.png";
  cimbruURL = `url(${this.cimbru})`;
  coriandru = "assets/condimente/coriandru.jpg";
  coriandruURL = `url(${this.coriandru})`;
  curry = "assets/condimente/curry.jpg";
  curryURL = `url(${this.curry})`;
  dafin = "assets/condimente/dafin.jpg";
  dafinURL = `url(${this.dafin})`;
  maioneza = "assets/condimente/maioneza.jpg";
  maionezaURL = `url(${this.maioneza})`;
  mustar = "assets/condimente/mustar.jpg";
  mustarURL = `url(${this.mustar})`;
  oregano = "assets/condimente/oregano.jpg";
  oreganoURL = `url(${this.oregano})`;
  otet = "assets/condimente/otet.jpg";
  otetURL = `url(${this.otet})`;
  piper = "assets/condimente/piper.jpg";
  piperURL = `url(${this.piper})`;
  rozmarin = "assets/condimente/rozmarin.jpg";
  rozmarinURL = `url(${this.rozmarin})`;
  sare = "assets/condimente/sare.jpg";
  sareURL = `url(${this.sare})`;
  sofran = "assets/condimente/sofran.jpg";
  sofranURL = `url(${this.sofran})`;
  pesto = "assets/condimente/pesto.jpg";
  pestoURL = `url(${this.pesto})`;
  tarhon = "assets/condimente/tarhon.jpg";
  tarhonURL = `url(${this.tarhon})`;
  ulei_FS = "assets/condimente/ulei_fs.jpg";
  ulei_FSURL = `url(${this.ulei_FS})`;
  ulei_M = "assets/condimente/ulei_m.jpg";
  ulei_MURL = `url(${this.ulei_M})`;
  vin = "assets/condimente/vin.jpg";
  vinURL = `url(${this.vin})`;
  wasabi = "assets/condimente/wasabi.jpg";
  wasabiURL = `url(${this.wasabi})`;

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

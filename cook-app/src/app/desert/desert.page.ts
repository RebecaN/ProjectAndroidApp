import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/api/api.service";
import { Product } from "src/app/model/product.model";

@Component({
  selector: "app-desert",
  templateUrl: "./desert.page.html",
  styleUrls: ["./desert.page.scss"]
})
export class DesertPage implements OnInit {
  public products: Array<Product> = [];
  constructor(private apiService: ApiService) {}
  //URL Legume
  cartofi = "assets/legume/cartofi.jpg";
  cartofiURL = `url(${this.cartofi})`;
  dovleac = "assets/legume/dovleac.jpg";
  dovleacURL = `url(${this.dovleac})`;
  ghimbir = "assets/legume/ghimbir.jpg";
  ghimbirURL = `url(${this.ghimbir})`;
  morcov = "assets/legume/morcov.jpg";
  morcovURL = `url(${this.morcov})`;

  //URL fructe
  afine = "assets/fructe/afine.png";
  afineURL = `url(${this.afine})`;
  ananas = "assets/fructe/ananas.jpg";
  ananasURL = `url(${this.ananas})`;
  avocado = "assets/fructe/avocado.jpg";
  avocadoURL = `url(${this.avocado})`;
  banane = "assets/fructe/banane.jpg";
  bananeURL = `url(${this.banane})`;
  caise = "assets/fructe/caise.png";
  caiseURL = `url(${this.caise})`;
  capsuni = "assets/fructe/capsuni.jpg";
  capsuniURL = `url(${this.capsuni})`;
  clementine = "assets/fructe/clementine.jpg";
  clementineURL = `url(${this.clementine})`;
  cirese = "assets/fructe/cirese.jpg";
  cireseURL = `url(${this.cirese})`;
  coacaze = "assets/fructe/coacaze.jpg";
  coacazeURL = `url(${this.coacaze})`;
  cocos = "assets/fructe/cocos.jpg";
  cocosURL = `url(${this.cocos})`;
  dude = "assets/fructe/dude.jpg";
  dudeURL = `url(${this.dude})`;
  grepfrut = "assets/fructe/grepfruit.jpg";
  grepfrutURL = `url(${this.grepfrut})`;
  gutuie = "assets/fructe/gutuie.jpg";
  gutuieURL = `url(${this.gutuie})`;
  kiwi = "assets/fructe/kiwi.jpg";
  kiwiURL = `url(${this.kiwi})`;
  lamaie = "assets/fructe/lamaie.png";
  lamaieURL = `url(${this.lamaie})`;
  lime = "assets/fructe/lime.jpg";
  limeURL = `url(${this.lime})`;
  mango = "assets/fructe/mango.jpg";
  mangoURL = `url(${this.mango})`;
  mandarina = "assets/fructe/mandarina.jpg";
  mandarinaURL = `url(${this.mandarina})`;
  mar = "assets/fructe/mar.jpg";
  marURL = `url(${this.mar})`;
  masline = "assets/fructe/masline.jpg";
  maslineURL = `url(${this.masline})`;
  mure = "assets/fructe/mure.jpg";
  mureURL = `url(${this.mure})`;
  papaya = "assets/fructe/papaya.jpg";
  papayaURL = `url(${this.papaya})`;
  para = "assets/fructe/para.jpg";
  paraURL = `url(${this.para})`;
  pepene_G = "assets/fructe/pepene_galben.jpg";
  pepene_GURL = `url(${this.pepene_G})`;
  pepene = "assets/fructe/pepene.jpg";
  pepeneURL = `url(${this.pepene})`;
  piersica = "assets/fructe/piersica.jpg";
  piersicaURL = `url(${this.piersica})`;
  portocala = "assets/fructe/portocala.jpg";
  portocalaURL = `url(${this.portocala})`;
  pruna = "assets/fructe/pruna.jpg";
  prunaURL = `url(${this.pruna})`;
  rodie = "assets/fructe/rodie.jpg";
  rodieURL = `url(${this.rodie})`;
  smochine = "assets/fructe/smochine.jpg";
  smochineURL = `url(${this.smochine})`;
  struguri = "assets/fructe/struguri.jpg";
  struguriURL = `url(${this.struguri})`;
  visine = "assets/fructe/visine.jpg";
  visineURL = `url(${this.visine})`;
  zmeura = "assets/fructe/zmeura.jpg";
  zmeuraURL = `url(${this.zmeura})`;

  //URL produse animale
  ou = "assets/prod_animal/ou.jpg";
  ouURL = `url(${this.ou})`;

  //URL lactate
  branza = "assets/lactate/branza.jpg";
  branzaURL = `url(${this.branza})`;
  cascaval = "assets/lactate/cascaval.jpg";
  cascavalURL = `url(${this.cascaval})`;
  frisca = "assets/lactate/frisca.jpg";
  friscaURL = `url(${this.frisca})`;
  iaurt = "assets/lactate/iaurt.jpg";
  iaurtURL = `url(${this.iaurt})`;
  lapte = "assets/lactate/lapte.jpg";
  lapteURL = `url(${this.lapte})`;
  mascarpone = "assets/lactate/mascarpone.jpg";
  mascarponeURL = `url(${this.mascarpone})`;
  smantana = "assets/lactate/smantana.jpg";
  smantanaURL = `url(${this.smantana})`;
  telemea = "assets/lactate/telemea.jpg";
  telemeaURL = `url(${this.telemea})`;
  unt = "assets/lactate/unt.jpg";
  untURL = `url(${this.unt})`;
  urda = "assets/lactate/urda.jpg";
  urdaURL = `url(${this.urda})`;

  //URL carbo
  biscuiti = "assets/carbo/biscuiti.jpg";
  biscuitiURL = `url(${this.biscuiti})`;
  faina = "assets/carbo/faina.jpg";
  fainaURL = `url(${this.faina})`;
  gris = "assets/carbo/gris.jpg";
  grisURL = `url(${this.gris})`;
  orez = "assets/carbo/orez.jpg";
  orezURL = `url(${this.orez})`;
  paine = "assets/carbo/paine.jpg";
  paineURL = `url(${this.paine})`;
  paste = "assets/carbo/paste.jpg";
  pasteURL = `url(${this.paste})`;
  pesmet = "assets/carbo/pesmet.jpg";
  pesmetURL = `url(${this.pesmet})`;
  piscoturi = "assets/carbo/piscoturi.jpg";
  piscoturiURL = `url(${this.piscoturi})`;
  tarta = "assets/carbo/tarta.jpg";
  tartaURL = `url(${this.tarta})`;
  lipie = "assets/carbo/lipie.jpg";
  lipieURL = `url(${this.lipie})`;

  //URL condimente
  cacao = "assets/condimente/cacao.jpg";
  cacaoURL = `url(${this.cacao})`;
  //trebuie puse imagini
  cafea = "assets/condimente/cafea.jpg";
  cafeaURL = `url(${this.cafea})`;
  ciocolata = "assets/condimente/ciocolata.jpg";
  ciocolataURL = `url(${this.ciocolata})`;
  rom = "assets/condimente/rom.jpg";
  romURL = `url(${this.rom})`;
  vanilie = "assets/condimente/vanilie.jpg";
  vanilieURL = `url(${this.vanilie})`;
  menta = "assets/condimente/menta.jpg";
  mentaURL = `url(${this.menta})`;
  miere = "assets/condimente/miere.jpg";
  miereURL = `url(${this.miere})`;
  nucsoara = "assets/condimente/nucsoara.jpg";
  nucsoaraURL = `url(${this.nucsoara})`;
  sare = "assets/condimente/sare.jpg";
  sareURL = `url(${this.sare})`;
  scortisoara = "assets/condimente/scortisoara.jpg";
  scortisoaraURL = `url(${this.scortisoara})`;
  ulei_FS = "assets/condimente/ulei_fs.jpg";
  ulei_FSURL = `url(${this.ulei_FS})`;
  ulei_M = "assets/condimente/ulei_m.jpg";
  ulei_MURL = `url(${this.ulei_M})`;
  zahar = "assets/condimente/zahar.jpg";
  zaharURL = `url(${this.zahar})`;

  ngOnInit() {
    this.apiService.getAllProducts().subscribe(apiProducts => {
      for (let prod of apiProducts) {
        this.products.push(new Product(prod.name, prod.description, prod.id));
      }
    });
  }
}

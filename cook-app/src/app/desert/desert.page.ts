import { Component, OnInit } from '@angular/core';
import { ApiService } from "src/app/api/api.service";
import { Product } from "src/app/model/product.model";

@Component({
  selector: 'app-desert',
  templateUrl: './desert.page.html',
  styleUrls: ['./desert.page.scss'],
})
export class DesertPage implements OnInit {

  public products: Array<Product> = [];
  constructor(private apiService: ApiService) { }
//URL Legume
// trebuie puse imagini
cartofi = "";
cartofiURL = `url(${this.cartofi})`;
dovleac = "";
dovleacURL = `url(${this.dovleac})`;
ghimbir = "";
ghimbirURL = `url(${this.ghimbir})`;
morcov = "";
morcovURL = `url(${this.morcov})`;

//URL carbo
biscuiti = "assets/carbo/biscuiti.jpg";
biscuitiURL = `url(${this.biscuiti})`;
faina = "assets/carbo/faina.jpg";
fainaURL = `url(${this.faina})`;
gris = "assets/carbo/gris.jpg";
grisURL = `url(${this.gris})`;
// trebuie puse imagini
orez = "";
orezURL = `url(${this.orez})`;
paine = "";
paineURL = `url(${this.paine})`;
paste = "";
pasteURL = `url(${this.paste})`;
pesmet = "";
pesmetURL = `url(${this.pesmet})`;
piscoturi = "";
piscoturiURL = `url(${this.piscoturi})`;
tarta = "";
tartaURL = `url(${this.tarta})`;
lipie = "";
lipieURL = `url(${this.lipie})`;

//URL condimente
boia = "assets/condimente/boia.jpg";
boiaURL = `url(${this.boia})`;
busuioc = "assets/condimente/busuioc.jpg";
busuiocURL = `url(${this.busuioc})`;
cacao = "assets/condimente/cacao.jpg";
cacaoURL = `url(${this.cacao})`;
//trebuie puse imagini
cafea = "";
cafeaURL = `url(${this.cafea})`;
chimen = "";
chimenURL = `url(${this.chimen})`;
ciocolata = "";
ciocolataURL = `url(${this.ciocolata})`;
dafin = "";
dafinURL = `url(${this.dafin})`;
rom = "";
romURL = `url(${this.rom})`;
vanilie = "";
vanilieURL = `url(${this.vanilie})`;
menta = "";
mentaURL = `url(${this.menta})`;
mirodenii = "";
mirodeniiURL = `url(${this.mirodenii})`;
nucsoara = "";
nucsoaraURL = `url(${this.nucsoara})`;
oregano = "";
oreganoURL = `url(${this.oregano})`;
piper = "";
piperURL = `url(${this.piper})`;
rozmarin = "";
rozmarinURL = `url(${this.rozmarin})`;
sare = "";
sareURL = `url(${this.sare})`;
scortisoara = "";
scortisoaraURL = `url(${this.scortisoara})`;
ulei_FS = "";
ulei_FSURL = `url(${this.ulei_FS})`;
ulei_M = "";
ulei_MURL = `url(${this.ulei_M})`;
vin = "";
vinURL = `url(${this.vin})`;
zahar = "";
zaharURL = `url(${this.zahar})`;
 //URL fructe
 afine = "assets/fructe/afine.png";
 afineURL = `url(${this.afine})`;
 ananas = "assets/fructe/ananas.jpg";
 ananasURL = `url(${this.ananas})`;
 avocado = "assets/fructe/avocado.jpg";
 avocadoURL = `url(${this.avocado})`;
 banane = "assets/fructe/banane.jpg";
 bananeURL = `url(${this.banane})`;
//trebuie puse imagini
 caise = "";
 caiseURL = `url(${this.caise})`;
 capsuni = "";
 capsuniURL = `url(${this.capsuni})`;
 clementine = "";
 clementineURL = `url(${this.clementine})`;
 cirese = "";
 cireseURL = `url(${this.cirese})`;
 coacaze = "";
 coacazeURL = `url(${this.coacaze})`;
 cocos = "";
 cocosURL = `url(${this.cocos})`;
 dude = "";
 dudeURL = `url(${this.dude})`;
 grepfrut = "";
 grepfrutURL = `url(${this.grepfrut})`;
 gutuie = "";
 gutuieURL = `url(${this.gutuie})`;
 kiwi = "";
 kiwiURL = `url(${this.kiwi})`;
 lamaie= "";
 lamaieURL = `url(${this.lamaie})`;
 lime = "";
 limeURL = `url(${this.lime})`;
 mango = "";
 mangoURL = `url(${this.mango})`;
 mandarina = "";
 mandarinaURL = `url(${this.mandarina})`;
 mar = "";
 marURL = `url(${this.mar})`;
 masline = "";
 maslineURL = `url(${this.masline})`;
 mure = "";
 mureURL = `url(${this.mure})`;
 papaya = "";
 papayaURL = `url(${this.papaya})`;
 para = "";
 paraURL = `url(${this.para})`;
 pepene_G = "";
 pepene_GURL = `url(${this.pepene_G})`;
 pepene = "";
 pepeneURL = `url(${this.pepene})`;
 piersica = "";
 piersicaURL = `url(${this.piersica})`;
 portocala = "";
 portocalaURL = `url(${this.portocala})`;
 pruna = "";
 prunaURL = `url(${this.pruna})`;
 rodie = "";
 rodieURL = `url(${this.rodie})`;
 rosie = "";
 rosieURL = `url(${this.rosie})`;
 smochine = "";
 smochineURL = `url(${this.smochine})`;
 struguri = "";
 struguriURL = `url(${this.struguri})`;
 visine = "";
 visineURL = `url(${this.visine})`;
 zmeura = "";
 zmeuraURL = `url(${this.zmeura})`;

 //URL lactate
 branza = "assets/lactate/branza.jpg";
 branzaURL = `url(${this.branza})`;
 cascaval = "assets/lactate/cascaval.jpg";
 cascavalURL = `url(${this.cascaval})`;
//trebuie puse imagini
 frisca = "";
 friscaURL = `url(${this.frisca})`;
 iaurt = "";
 iaurtURL = `url(${this.iaurt})`;
 lapte = "";
 lapteURL = `url(${this.lapte})`;
 mascarpone = "";
 mascarponeURL = `url(${this.mascarpone})`;
 smantana = "";
 smantanaURL = `url(${this.smantana})`;
 telemea = "";
 telemeaURL = `url(${this.telemea})`;
 unt = "";
 untURL = `url(${this.unt})`;
 urda = "";
 urdaURL = `url(${this.urda})`;

 //URL produse animale
//trenuie puse imagini
 ou = "";
 ouURL = `url(${this.ou})`;

   ngOnInit() {
    this.apiService.getAllProducts().subscribe(apiProducts => {
      for (let prod of apiProducts) {
        this.products.push(new Product(prod.name, prod.description, prod.id));
      }
    });
  }

}


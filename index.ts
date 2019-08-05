import "./scr/scss/index.scss";
import bigData from "./scr/mvc/interface/bigData";
import smallData from "./src/mvc/interface/smallData";
import { load, loadBasket } from "./scr/mvc/helpers";
// ----------- РАЗБИЛИ HTML КОНЕЦ ---------------

import Controller from "./scr/mvc/Controller";
import Model from "./scr/mvc/Model";
import View from "./scr/mvc/View";

// ----------- РАЗБИЛИ HTML ------------------
import * as index  from "./scr/templates/index.hbs";
document.getElementById("body").innerHTML = index();
// ----------- РАЗБИЛИ HTML КОНЕЦ ------------------

(async function functionName() {
  // Стартовая загрузка
  const offers:Array<bigData> = await load();
  // Загрузили все что лежит в карзине
  const offersBasket:Array<smallData> = loadBasket();

  const model = new Model(offers, offersBasket);
  const view = new View();
  const controller = new Controller(model, view);
})();

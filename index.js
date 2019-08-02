import "./scr/scss/index.scss";

import { load, loadBasket } from "./scr/mvc/helpers";
// ----------- РАЗБИЛИ HTML КОНЕЦ ---------------

import Controller from "./scr/mvc/Controller";
import Model from "./scr/mvc/Model";
import View from "./scr/mvc/View";

// ----------- РАЗБИЛИ HTML ------------------
const index = require("./scr/templates/index.hbs");
document.getElementById("body").innerHTML = index();

// Стартовая загрузка
const offers = load();
// Загрузили все что лежит в карзине
const offersBasket = loadBasket();

const model = new Model(offers, offersBasket);
const view = new View();
const controller = new Controller(model, view);

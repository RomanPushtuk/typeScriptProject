import "./scr/scss/index.scss";

import { load } from "./scr/mvc/helpers";
// ----------- РАЗБИЛИ HTML КОНЕЦ ---------------

import Controller from "./scr/mvc/Controller";
import Model from "./scr/mvc/Model";
import View from "./scr/mvc/View";

// ----------- РАЗБИЛИ HTML ------------------
const index = require("./scr/templates/index.hbs");
const header = require("./scr/templates/header.hbs");
const filters = require("./scr/templates/filters.hbs");
const real = require("./scr/templates/real.hbs");
const footer = require("./scr/templates/footer.hbs");
const modalBasket = require("./scr/templates/modalBasket.hbs");
const modalInfo = require("./scr/templates/modalInfo.hbs");

document.getElementById("body").innerHTML = index({
  header: header(),
  filters: filters(),
  real: real(),
  footer: footer(),
  modalBasket: modalBasket(),
  modalInfo: modalInfo()
});

// Стартовая загрузка
const offers = load(
  "https://api.nestoria.co.uk/api?encoding=json&pretty=1&page=2&action=search_listings&country=uk&listing_type=buy&place_name=london"
);

const model = new Model(offers);
const view = new View();
const controller = new Controller(model, view);

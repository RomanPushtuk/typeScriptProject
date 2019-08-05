import bigData from "./interface/bigData";
import smallData from "./interface/smallData";
import query from "./interface/query";

import Model from "./Model";
import View from "./View";

class Controller {
  model:Model;
  view:View;

  constructor(model:Model, view:View) {
    console.log("Controller");
    this.model = model;
    this.view = view;

    this.view.on("new-page", this.handlerGetPage.bind(this));
    this.view.on("search", this.handlerSearch.bind(this));
    this.view.offers.on("overview", this.handlerOverview.bind(this));
    this.view.on("add-to-basket", this.handlerAddToBasket.bind(this));
    this.view.basket.on("delete-from-basket", this.handlerDelete.bind(this));

    view.showOffers(model.data);
    view.createBasket(model.basket);
    // Кнопка - показать больше
  }

  async handlerGetPage(num:number) {
    const obj:Array<bigData> = await this.model.getPage(num);
    this.view.showOffers(obj);
  }

  async handlerSearch(query:query) {
    const obj:Array<bigData> = await this.model.searchOffers(query);
    this.view.showOffers(obj);
  }

  handlerOverview(obj:bigData) {
    this.view.openModalInfo(obj);
  }

  handlerAddToBasket(obj:smallData) {
    const myOffers:Array<smallData> = this.model.addToBasket(obj); // Вернули все товары в корзине
    this.view.createBasket(myOffers);
  }

  handlerDelete(url:string) {
    console.log(url);
    const myOffers:Array<smallData> = this.model.deleteFromBasket(url);
    this.view.createBasket(myOffers);
  }
}

export default Controller;

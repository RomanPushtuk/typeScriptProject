class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.on("new-page", this.handlerGetPage.bind(this));
    this.view.on("search", this.handlerSearch.bind(this));
    this.view.on("overview", this.handlerOverview.bind(this));
    this.view.on("add-to-basket", this.handlerAddToBasket.bind(this));
    this.view.on("delete-from-basket", this.handlerDelete.bind(this));

    view.showOffers(model.data);
    view.createBasket(model.basket);
    view.pagination.paginated.classList.add("disabled");
  }

  async handlerGetPage(num) {
    const obj = await this.model.getPage(num);
    this.view.showOffers(obj);
  }

  async handlerSearch(query){
    const obj = await this.model.searchOffers(query);
    this.view.showOffers(obj);
  }

  handlerOverview(obj){
    this.view.handlerOpenModalInfo(obj);
  }

  handlerAddToBasket(obj){
    const myOffers = this.model.addToBasket(obj); // Вернули все товары в корзине
    this.view.createBasket(myOffers);
  }

  handlerDelete(url) {
    const myOffers = this.model.deleteFromBasket(url);
    this.view.createBasket(myOffers);
  }
}
export default Controller;

import EventEmitter from "./EventEmitter";
import Modal from "./components/Modal";
import Filters from "./components/Filters";
import Pagination from "./components/Pagination";
import Basket from "./components/Basket";
import Offers from "./components/Offers";

import bigData from "./interface/bigData";
import smallData from "./interface/smallData";

class View extends EventEmitter {
  modal:Modal;
  filters:Filters;
  pagination:Pagination;
  basket:Basket;
  offers:Offers;

  constructor() {
    super();
    console.log("View");
    // ------------ index.hbs ------------
    // this.container = document.getElementById("container");
    // ---------------real.hbs-------------------------

    this.modal = new Modal();
    this.filters = new Filters();
    this.pagination = new Pagination();
    this.basket = new Basket();
    this.offers = new Offers();

    this.pagination.nextPage.addEventListener("click", this.handlerNextPage.bind(this));
    this.pagination.previousPage.addEventListener("click", this.handlerPreviousPage.bind(this));
    this.pagination.showMoreEl.addEventListener("click", this.handlerShowMore.bind(this));
    this.filters.searchReal.addEventListener("click", this.handlerSearch.bind(this));
    this.modal.closeModalInfo.addEventListener("click", this.handlerCloseModalInfo.bind(this));
    this.modal.inBasket.addEventListener("click", this.handlerAddToBasket.bind(this));
    this.basket.openBasket.addEventListener("click", this.handlerOpenBasket.bind(this));
    this.basket.closeModalBasket.addEventListener("click", this.handlerCloseBasket.bind(this));
  }

  // Поиск по введенным фильтрам
  handlerSearch() {
    this.emit("search", this.filters.getData());
  }

  // Загрузить слtдующую страницу
  handlerNextPage() {
    this.emit("new-page", this.pagination.getNextPage());
  }

  // Загрузить предыдущую страницу
  handlerPreviousPage() {
    this.emit("new-page", this.pagination.getPreviousPage());
  }

  // Открыть карзину
  handlerOpenBasket() {
    this.basket.openModalBasket();
  }

  // Добавить в карзину
  handlerAddToBasket() {
    this.emit("add-to-basket", this.modal.dataForBasket);
  }

  // Загрузить данные в карзину
  createBasket(myOffers:Array<smallData>) {
    this.basket.createBasket(myOffers);
  }

  // Закрыть карзину
  handlerCloseBasket() {
    this.basket.closeBasket();
  }

  // Открыть модальное окно
  openModalInfo(obj:bigData) {
    this.modal.openModal(obj);
  }

  // Закрыть модальное окно
  handlerCloseModalInfo() {
    this.modal.closeModal();
  }

  handlerShowMore() {
    console.log("clik");
    this.offers.offers.classList.remove("show-more");
    this.pagination.showMore();
  }

  showOffers(obj:Array<bigData>) {
    this.offers.showOffers(obj);
  }
}
export default View;

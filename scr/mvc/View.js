import EventEmitter from "./EventEmitter";
import Modal from "./components/Modal.ts";
import Filters from "./components/Filters";
import Pagination from "./components/Pagination";
import Basket from "./components/Basket";
import { createRecord, createBasket } from "./helpers";

class View extends EventEmitter {
  constructor() {
    super();
    // ------------ index.hbs ------------
    // this.container = document.getElementById("container");
    // ---------------real.hbs-------------------------
    this.offers = document.getElementById("offers");

    this.modal = new Modal();
    this.filters = new Filters();
    this.pagination = new Pagination();
    this.basket = new Basket();

    this.pagination.nextPage.addEventListener("click", this.handlerNextPage.bind(this));
    this.pagination.previousPage.addEventListener("click", this.handlerPreviousPage.bind(this));
    this.pagination.showMore.addEventListener("click", this.handlerShowMore.bind(this));
    this.filters.searchReal.addEventListener("click", this.handlerSearch.bind(this));
    this.modal.closeModalInfo.addEventListener("click", this.handlerCloseModalInfo.bind(this));
    this.modal.inBasket.addEventListener("click", this.handlerAddToBasket.bind(this));
    this.basket.openBasket.addEventListener("click", this.handlerOpenBasket.bind(this));
    this.basket.closeModalBasket.addEventListener("click", this.handlerCloseBasket.bind(this));
  }

  // Поиск по введенным фильтрам
  handlerSearch(){
    this.emit("search", this.filters.getData());
  }

  // Загрузить слtдующую страницу
  handlerNextPage(){
    this.emit("new-page", this.pagination.getNextPage());
  }

  // Загрузить предыдущую страницу
  handlerPreviousPage(){
    this.emit("new-page", this.pagination.getPreviousPage());
  }

  // Открыть карзину
  handlerOpenBasket(){
    this.basket.openModalBasket();
  }

  // Добавить в карзину
  handlerAddToBasket() {
    this.emit("add-to-basket", this.modal.data);
  }

  // Загрузить данные в карзину
  createBasket(myOffers){
    this.basket.createBasket(myOffers);
  }

  // Закрыть карзину
  handlerCloseBasket(){
    this.basket.closeBasket();
  }

  // Открыть модальное окно
  handlerOpenModalInfo(obj){
    this.modal.openModal(obj);
  }

  // Закрыть модальное окно
  handlerCloseModalInfo(){
    this.modal.closeModal();
  }

  handlerShowMore(){
    this.offers.classList.remove("show-more");
    this.pagination.showMore();
  }

  async showOffers(data) {
    const obj = await data;
    this.offers.innerHTML = "";
    obj.forEach(item => {
      this.offers.appendChild(createRecord.call(this, item));
    });
  }
}
export default View;

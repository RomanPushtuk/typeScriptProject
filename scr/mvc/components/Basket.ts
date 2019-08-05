import { createBasket } from "../helpers";
import smallData from "../interface/smallData";
import EventEmitter from "../EventEmitter";

class Basket extends EventEmitter {
  modalBasket;
  basket:HTMLElement;
  openBasket:HTMLElement;
  closeModalBasket:HTMLElement;

  constructor(){
    super();
    this.modalBasket = document.getElementById("modal-basket");
    this.basket = document.getElementById("basket");
    this.openBasket = document.getElementById("open-basket");
    this.closeModalBasket = document.getElementById("close-modal-basket");
  }

  createBasket(myOffers:Array<smallData>) {
    if(myOffers){
      this.basket.innerHTML = "";
      myOffers.forEach(item => {
        this.basket.appendChild(createBasket.call(this, item));
      })
    }
  }

  closeBasket() {
    document.getElementById("container").classList.remove("disabled");
    this.modalBasket.classList.remove("modal-active");
  }

  openModalBasket() {
    document.getElementById("container").classList.add("disabled");
    this.modalBasket.classList.add("modal-active");
  }
}

export default Basket;

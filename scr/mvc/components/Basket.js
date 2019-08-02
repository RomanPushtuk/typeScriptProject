import { createBasket } from "../helpers";

class Basket {
  constructor(){
    this.modalBasket = document.getElementById("modal-basket");
    this.basket = document.getElementById("basket");
    this.openBasket = document.getElementById("open-basket");
    this.closeModalBasket = document.getElementById("close-modal-basket");
  }

  loadBasket() {
    if (localStorage.getItem("basket")) {
      this.offers = JSON.parse(localStorage.getItem("basket"));
    }
    return this.offers;
  }

  addToBasket(data) {
    this.offers.push(data);
    localStorage.setItem("basket", this.offers);
  }

  createBasket(myOffers) {
    this.basket.innerHTML = "";
    myOffers.forEach(item => {
      this.basket.appendChild(createBasket.call(this, item));
    })
  }

  closeBasket(){
    document.getElementById("container").classList.remove("disabled");
    this.modalBasket.classList.remove("modal-active");
  }

  openModalBasket(){
    document.getElementById("container").classList.add("disabled");
    this.modalBasket.classList.add("modal-active");
  }
}

export default Basket;

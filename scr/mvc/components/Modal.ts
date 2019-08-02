import { smallData } from '../interface/smallData'

class Modal {
  modalInfo;
  closeModalInfo;
  modalInfoImg;
  modalInfoDescription;
  modalInfoUrl;
  modalInfoPrice;
  inBasket
  data;

  constructor() {
    // ---------- modalInfo.hbs -----------
    this.modalInfo = document.getElementById("modal-info");
    this.closeModalInfo = document.getElementById("close-modal-info");
    this.modalInfoImg = document.getElementById("modal-info-img");
    this.modalInfoDescription = document.getElementById("modal-info-description");
    this.modalInfoUrl = document.getElementById("modal-info-url");
    this.modalInfoPrice = document.getElementById("modal-info-price");
    this.inBasket = document.getElementById("in-basket");
    this.data = {};
    // ---------- modalInfo.hbs end -----------
  }

  setData(obj:smallData) {
    const { img, url, description, price } = obj;
    this.modalInfoImg.src = img;
    this.modalInfoDescription.innerText = description;
    this.modalInfoUrl.setAttribute("href", url);
    this.modalInfoPrice.innerText = price;
    this.data = { img, url, description, price };
  }

  openModal(obj) {
    document.getElementById("container").classList.add("disabled");
    this.modalInfo.classList.add("modal-active");
    this.setData(obj);
  }

  closeModal() {
    document.getElementById("container").classList.remove("disabled");
    this.modalInfo.classList.remove("modal-active");
  }
}

export default Modal;

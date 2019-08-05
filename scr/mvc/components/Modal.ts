import bigData from '../interface/bigData';
import smallData from '../interface/smallData';

class Modal {
  modalInfo:HTMLElement;
  closeModalInfo:HTMLElement;
  modalInfoImg:HTMLImageElement;
  modalInfoDescription:HTMLElement;
  modalInfoUrl:HTMLElement;
  modalInfoPrice:HTMLElement;
  inBasket:HTMLElement;
  modalInfoTitle:HTMLElement;
  modalInfoKeywords:HTMLElement;
  modalInfoBedroom:HTMLSpanElement;
  modalInfoBathroom:HTMLSpanElement;

  data:bigData;
  dataForBasket:smallData;

  constructor() {
    // ---------- modalInfo.hbs -----------
    this.modalInfo = document.getElementById("modal-info");
    this.closeModalInfo = document.getElementById("close-modal-info");
    this.modalInfoImg = document.getElementById("modal-info-img");
    this.modalInfoTitle = document.getElementById("modal-info-title");
    this.modalInfoDescription = document.getElementById("modal-info-description");
    this.modalInfoUrl = document.getElementById("modal-info-url");
    this.modalInfoPrice = document.getElementById("modal-info-price");
    this.modalInfoKeywords = document.getElementById("modal-info-keywords");
    this.modalInfoBedroom = document.getElementById("modal-info-bedroom");
    this.modalInfoBathroom = document.getElementById("modal-info-bathroom");
    this.inBasket = document.getElementById("in-basket");

    this.data;
    this.dataForBasket;
    // ---------- modalInfo.hbs end -----------
  }

  setData(obj:bigData) {
    const { img_url, lister_url, summary, price_formatted, title, keywords, bathroom_number, bedroom_number } = obj;
    this.modalInfoImg.src = img_url;
    this.modalInfoDescription.innerText = summary;
    this.modalInfoUrl.setAttribute("href", lister_url);
    this.modalInfoUrl.setAttribute("target", "_blank");
    this.modalInfoPrice.innerText = price_formatted;
    this.modalInfoTitle.innerText = title;
    this.modalInfoKeywords.innerText = keywords;
    this.modalInfoBedroom.innerText = String(bedroom_number);
    this.modalInfoBathroom.innerText = String(bathroom_number);
    this.data = obj;
    this.dataForBasket = { img_url, lister_url, summary, price_formatted };
  }

  openModal(obj:bigData) {
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

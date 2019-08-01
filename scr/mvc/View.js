import EventEmitter from "./EventEmitter";
import initElements from "./initElements";
import { createRecord } from "./helpers";

class View extends EventEmitter {
  constructor() {
    super();
    // Инициализируем элементы
    initElements.call(this);
  }

  async showOffers(data) {
    const obj = await data;
    console.log(obj);
    this.offers.innerHTML = "";
    obj.forEach(item => {
      this.offers.appendChild(createRecord.call(this, item));
    });
  }
}
export default View;

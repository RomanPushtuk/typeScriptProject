import EventEmitter from "../EventEmitter";
import bigData from '../interface/bigData';
import { createRecord } from "../helpers";

class Offers extends EventEmitter {
  offers:HTMLElement;

  constructor(){
    super();
    this.offers = document.getElementById("offers");
  }

  showOffers(obj:Array<bigData>){
    this.offers.innerHTML = "";
    obj.forEach(item => {
      this.offers.appendChild(createRecord.call(this, item));
    });
  }
}

export default Offers;

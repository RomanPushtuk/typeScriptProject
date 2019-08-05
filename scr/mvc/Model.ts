import { load, save } from "./helpers";
import bigData from "./interface/bigData";
import smallData from "./interface/smallData";
import query from "./interface/query";
class Model {
  data: Array<bigData>;
  basket: Array<smallData>;
  sity: string;
  country: string;

  constructor(offers:Array<bigData>, offersBasket:Array<smallData>) {
    console.log("Model");
    // ЗАГРУЗИЛИ ДАННЫЕ
    this.data = offers;
    this.basket = offersBasket || [];
    this.sity = "london";
    this.country = "uk";
  }

  async getPage(num:number):Promise<Array<bigData>> {
    const offers = await load(num, this.sity, this.country);
    return offers;
  }

  async searchOffers(query:query):Promise<Array<bigData>> {
    const { sity, country } = query;
    this.sity = sity;
    this.country = country;
    const offers = await load(1, this.sity, this.country);
    return offers;
  }

  addToBasket(data:smallData):Array<smallData> {
    const { lister_url } = data;
    if (this.getIndex(lister_url) >= 0){
      return alert("Такой айтем уже есть в корзине!!!");
    }
    this.basket.push(data);
    save(this.basket);
    return this.basket;
  }

  getIndex(url:string):number {
    return this.basket.map(item => {
      return item.lister_url;
      }).indexOf(url);
  }

  deleteFromBasket(url:string):Array<smallData> {
    const index = this.getIndex(url);
    this.basket.splice(index, 1);
    save(this.basket);
    return this.basket;
  }
};

export default Model;

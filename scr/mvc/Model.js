import { load, save } from "./helpers";

const Model = class {
  constructor(offers, offersBasket) {
    // ЗАГРУЗИЛИ ДАННЫЕ
    this.data = offers;
    this.basket = offersBasket || [];
    this.page = 0;
    this.sity = "london";
    this.country = "uk";
  }

  async showFirstPage() {
    const result = await this.data;
    return result;
  }

  async getPage(num) {
    const offers = await load(num, this.sity, this.country);
    return offers;
  }

  async searchOffers(query) {
    const { sity, country } = query;
    this.sity = sity;
    this.country = country;
    const offers = await load(1, this.sity, this.country);
    return offers;
  }

  addToBasket(data) {
    this.basket.push(data);
    save(this.basket);
    return this.basket;
  }

  deleteFromBasket(url) {
    const index = this.basket.map(item => {
      return item.url;
      })
      .indexOf(url);
    this.basket.splice(index, 1);
    save(this.basket);
    return this.basket;
  }
};

export default Model;

class Model {
  constructor(offers) {
    // ЗАГРУЗИЛИ ДАННЫЕ
    this.data = offers;
    this.page = 0;
  }

  async showFirstPage() {
    const result = await this.data;
    return result;
  }
}

export default Model;

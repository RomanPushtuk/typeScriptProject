class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    view.showOffers(model.data);
  }
}
export default Controller;

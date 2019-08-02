class Filters {
  constructor() {
    // ----------- filters.hbs -------------
    this.filtersCountry = document.getElementById("filters-country");
    this.filtersSity = document.getElementById("filters-sity");
    this.searchReal = document.getElementById("search-real");
    // ----------- filters.hbs end -------------
  }

  getData() {
    return {
      sity: this.filtersSity.value.toLowerCase(),
      country: this.filtersCountry.value
    };
  }
}

export default Filters;

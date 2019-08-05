class Pagination {
  nextPage:HTMLElement;
  presentPage:HTMLElement;
  previousPage:HTMLElement;
  showMoreEl:HTMLElement;
  paginated:HTMLElement;

  constructor() {
    // ----------------pagination.hbs ----------------
    this.nextPage = document.getElementById("next-page");
    this.presentPage = document.getElementById("present-page");
    this.previousPage = document.getElementById("previous-page");
    this.showMoreEl = document.getElementById("show-more");
    this.paginated = document.getElementById("paginated");
    // --------------pagination.nbs end------------
  }

  getNextPage() {
    let page = Number(this.presentPage.innerText);
    page += 1;
    this.presentPage.innerText = String(page);
    return page;
  }

  getPreviousPage() {
    let page = Number(this.presentPage.innerText);
    if (page >= 2){
      page -= 1;
      this.presentPage.innerText = String(page);
      return page;
    }
  }

  showMore() {
    this.showMoreEl.classList.add("disabled");
    this.paginated.classList.remove("disabled");
  }
}

export default Pagination;

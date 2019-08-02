class Pagination {
  constructor() {
    // ----------------pagination.hbs ----------------
    this.nextPage = document.getElementById("next-page");
    this.presentPage = document.getElementById("present-page");
    this.previousPage = document.getElementById("previous-page");
    this.showMore = document.getElementById("show-more");
    this.paginated = document.getElementById("paginated");
    // --------------pagination.nbs end------------
    this.firstEntry = 0;
  }

  getNextPage() {
    let page = Number(this.presentPage.innerText);
    page += 1;
    this.presentPage.innerText = page;
    return page;
  }

  getPreviousPage() {
    let page = Number(this.presentPage.innerText);
    page -= 1;
    this.presentPage.innerText = page;
    return page;
  }

  showMore() {
    this.showMore.classList.add("disabled");
    this.paginated.classList.remove("disabled");
  }
}

export default Pagination;

const fetchJsonp = require("../../node_modules/fetch-jsonp/build/fetch-jsonp.js");

export function createRecord({ img, url, description, price }) {
  // Создаем строку
  const offerElement = document.createElement("div");
  offerElement.classList.add("offer");
  offerElement.addEventListener("click", () => {
    console.log({ img, url, description, price });
    this.emit("choose", { img, url, description, price });
  });

  const imgElement = document.createElement("img");
  imgElement.classList.add("img-thumb");
  imgElement.setAttribute("src", img);

  const descriptionElement = document.createElement("div");
  descriptionElement.innerText = description;

  const priceElement = document.createElement("div");
  priceElement.innerText = price;

  const listerUrl = document.createElement("a");
  listerUrl.innerText = "Перейти";
  listerUrl.setAttribute("href", url);
  const listerUrlDiv = document.createElement("div");
  listerUrlDiv.appendChild(listerUrl);

  offerElement.appendChild(imgElement);
  offerElement.appendChild(descriptionElement);
  offerElement.appendChild(priceElement);
  offerElement.appendChild(listerUrlDiv);
  return offerElement;
}

export async function load(url) {
  const response = await fetchJsonp(url);
  const result = await response.json();
  return result.response.listings.map(item => {
    const { img_url, summary, price_formatted, lister_url } = item;
    return {
      img: img_url,
      description: summary,
      price: price_formatted,
      url: lister_url
    };
  });
}

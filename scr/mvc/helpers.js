const fetchJsonp = require("../../node_modules/fetch-jsonp/build/fetch-jsonp.js");

export function createBasket({ img, url, description, price }) {
  // Создаем строку
  const offerElement = document.createElement("div");
  offerElement.classList.add("offer-basket");

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
  listerUrl.setAttribute("target", "_blank");
  const listerUrlDiv = document.createElement("div");
  listerUrlDiv.appendChild(listerUrl);

  const delateDiv = document.createElement("div");
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "X";
  deleteButton.addEventListener("click", () =>{
    this.emit("delete-from-basket", url);
  });
  delateDiv.appendChild(deleteButton);

  offerElement.appendChild(imgElement);
  offerElement.appendChild(descriptionElement);
  offerElement.appendChild(priceElement);
  offerElement.appendChild(listerUrlDiv);
  offerElement.appendChild(delateDiv);
  return offerElement;
}

export function createRecord({ img, url, description, price }) {
  // Создаем строку
  const offerElement = document.createElement("div");
  offerElement.classList.add("offer");

  const imgElement = document.createElement("img");
  imgElement.classList.add("img-thumb");
  imgElement.setAttribute("src", img);
  imgElement.addEventListener("click", () => {
    this.emit("overview", { img, url, description, price });
  });

  const descriptionElement = document.createElement("div");
  descriptionElement.innerText = description;

  const priceElement = document.createElement("div");
  priceElement.innerText = price;

  const listerUrl = document.createElement("a");
  listerUrl.innerText = "Перейти";
  listerUrl.setAttribute("href", url);
  listerUrl.setAttribute("target", "_blank");
  const listerUrlDiv = document.createElement("div");
  listerUrlDiv.appendChild(listerUrl);

  offerElement.appendChild(imgElement);
  offerElement.appendChild(descriptionElement);
  offerElement.appendChild(priceElement);
  offerElement.appendChild(listerUrlDiv);
  return offerElement;
}
// Созраняем данные
export function save(data) {
  localStorage.setItem("basket", JSON.stringify(data));
}

export function loadBasket() {
  if (localStorage.getItem("basket")) {
    return JSON.parse(localStorage.getItem("basket"));
  }
}

export async function load(page = 1, place_name = "london", country = "uk") {
  let url;
  if (country === "uk") {
    url = `https://api.nestoria.co.uk/api?encoding=json&pretty=1&page=${page}&action=search_listings&country=uk&listing_type=buy&place_name=${place_name}`;
  }
  if (country === "br") {
    url = `https://api.nestoria.com.br/api?encoding=json&pretty=1&page=${page}&action=search_listings&country=br&listing_type=buy&place_name=${place_name}`;
  }
  if (country === "fr") {
    url = `https://api.nestoria.fr/api?encoding=json&pretty=1&page=${page}&action=search_listings&country=fr&listing_type=buy&place_name=${place_name}`;
  }
  if (url) {
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
  console.log("Ошибка запроса к API");
}

const fetchJsonp = require("../../node_modules/fetch-jsonp/build/fetch-jsonp.js");

import bigData from "./interface/bigData";
import smallData from "./interface/smallData";

export function createBasket({ img_url, lister_url, summary, price_formatted }:smallData) {
  // Создаем строку
  const offerElement = document.createElement("div");
  offerElement.classList.add("offer-basket");

  const imgElement = document.createElement("img");
  imgElement.classList.add("img-thumb");
  imgElement.setAttribute("src", img_url);

  const descriptionElement = document.createElement("div");
  descriptionElement.innerText = summary;

  const priceElement = document.createElement("div");
  priceElement.innerText = price_formatted;

  const listerUrl = document.createElement("a");
  listerUrl.innerText = "Перейти";
  listerUrl.setAttribute("href", lister_url);
  listerUrl.setAttribute("target", "_blank");
  const listerUrlDiv = document.createElement("div");
  listerUrlDiv.appendChild(listerUrl);

  const delateDiv = document.createElement("div");
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "X";
  deleteButton.addEventListener("click", () => {
    this.emit("delete-from-basket", lister_url);
  });
  delateDiv.appendChild(deleteButton);

  offerElement.appendChild(imgElement);
  offerElement.appendChild(descriptionElement);
  offerElement.appendChild(priceElement);
  offerElement.appendChild(listerUrlDiv);
  offerElement.appendChild(delateDiv);
  return offerElement;
}

export function createRecord(obj:bigData) {
  const { img_url, lister_url, summary, price_formatted } = obj;
  // Создаем строку
  const offerElement = document.createElement("div");
  offerElement.classList.add("offer");

  const imgElement = document.createElement("img");
  imgElement.classList.add("img-thumb");
  imgElement.setAttribute("src", img_url);
  imgElement.addEventListener("click", () => {
    this.emit("overview", obj);
  });

  const descriptionElement = document.createElement("div");
  descriptionElement.classList.add("summary");
  descriptionElement.innerText = summary;

  const priceElement = document.createElement("div");
  priceElement.innerText = price_formatted;
  priceElement.classList.add("price");

  const listerUrl = document.createElement("a");
  listerUrl.innerText = "Перейти";
  listerUrl.setAttribute("href", lister_url);
  listerUrl.setAttribute("target", "_blank");
  const listerUrlDiv = document.createElement("div");
  listerUrlDiv.appendChild(listerUrl);
  listerUrlDiv.classList.add("goto");

  offerElement.appendChild(imgElement);
  offerElement.appendChild(descriptionElement);
  offerElement.appendChild(priceElement);
  offerElement.appendChild(listerUrlDiv);
  return offerElement;
}
// Созраняем данные
export function save(data:Array<smallData>) {
  localStorage.setItem("basket", JSON.stringify(data));
}

export function loadBasket():Array<smallData> {
  console.log("loadBasket");
  if (!localStorage.getItem("basket")) {
    localStorage.setItem("basket", JSON.stringify(""));
  }
  return JSON.parse(localStorage.getItem("basket"));
}

export async function load(page:number = 1, place_name:string = "london", country:string = "uk"):Promise<Array<bigData>> {
  console.log("load");
  let url:string;
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
      const { img_url, lister_url, summary, price_formatted, title ,keywords ,bathroom_number ,bedroom_number }:bigData = item;
      return {
        img_url,
        lister_url,
        summary,
        price_formatted,
        title,
        keywords,
        bathroom_number,
        bedroom_number,
      };
    });
  }
  console.log("Ошибка запроса к API");
}

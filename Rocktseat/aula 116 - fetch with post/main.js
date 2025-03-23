import * as functions from "../aula 115 - create a example of API/main.js";

const $name = document.querySelector("#product_name");
const $price = document.querySelector("#product_price");
const $form = document.querySelector("form");

addEventListener("submit", async (event) => {
  event.preventDefault();
  fetch("http://localhost:3000/products")
  await functions.fetchProducts();
});

/*
fetch("http://localhost:3333/products")
  .then((response) => response.json())
  .then((data) => console.log(data));
*/

// USANDO O FETCH COM AYSNC E AWAIT

let fetchProducts = async () => {
  const response = await fetch("http://localhost:3000/products");
  const data = await response.json();
  console.log(data);
};

// fetchProducts()

let fetchProductsById = async (id) => {
  const response = await fetch(`http://localhost:3000/products/${id}`);
  const data = await response.json();
  console.log(data);
};

// fetchProductsById(1)

const $productName = document.querySelector("#product_name");
const $productPrice = document.querySelector("#product_price");
const $form = document.querySelector("form");

addEventListener("submit", async (event) => {
  event.preventDefault();
  fetch("http://localhost:3000/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: new Date().getTime().toString(),
      name: $productName.value,
      price: $productPrice.value,
    })
  })

  // requisição
  await fetchProducts();
});

export {fetchProducts, fetchProductsById}
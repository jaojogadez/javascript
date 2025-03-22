/*
fetch("http://localhost:3333/products")
  .then((response) => response.json())
  .then((data) => console.log(data));
*/

// USANDO O FETCH COM AYSNC E AWAIT

let fetchProducts = async () => {
    const response = await fetch("http://localhost:3333/products")
    const data = await response.json()
    console.log(data)
}

// fetchProducts()

let fetchProductsById = async (id) => {
    const response = await fetch(`http://localhost:3333/products/${id}`)
    const data = await response.json()
    console.log(data)
}

fetchProductsById(1)
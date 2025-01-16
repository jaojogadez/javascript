class Product {
  constructor(name, surname){
    this.name = name
    this.surname = surname
  }
}

const product = new Product("Computer", "Teclado")
console.log(product.name)
console.log(product.surname)
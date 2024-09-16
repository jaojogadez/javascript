const product = {
    name: "Teclado",
    quantity: 100,
}

// Acessando a propriedade
console.log(product.name)

// Atualiza o valor de uma 
console.log(product.quantity)
product.quantity = 90
console.log(product.quantity)

console.log(product.name)
product.name = "Mouse"
console.log(product.name)

// Notação de Colchestes
product["quantity"] = 50
console.log(product["quantity"])
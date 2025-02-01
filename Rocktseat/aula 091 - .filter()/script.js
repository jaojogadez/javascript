// O método filter() cria um novo array com todos os elementos que passaram um uma condição

const words = ["JavaScript", "HTML", "CSS", "Web", "Bootstrap", "Git/GitHub"]

const result = words.filter((word) => word.length <= 3 )
console.log(result)

const products = [
  {
    description: "Teclado", price: 150, promotion: false
  },
  {
    description: "Mouse", price: 70, promotion: true
  },
  {
    description: "Monitor", price: 99, promotion: true
  },
]
//Exemplo de um filtro de produtos na promoção
const promotion = products.filter((product) => product.promotion === true)
console.log(promotion)
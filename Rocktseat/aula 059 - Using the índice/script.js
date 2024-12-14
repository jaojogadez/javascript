let fruits = ["Apple", "Watermelon", "Strawberry", "Lemon"]
// console.log(fruits)


// Retorna o índice do elemento no Array
let position = fruits.indexOf("Strawberry")
console.log(position)

fruits.splice(position, 1)
// fruits.splice(1, 2)
console.log(fruits)
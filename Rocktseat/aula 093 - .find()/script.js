// O método find() retorna o valor do primeiro elemento do array que satisfazer a condição. Caso contrátio, undefined é retornado.

const values = [1, 4, 12, 8, 234]

// Retorna o primeiro elemento que o valor é maior que 10.
const found = values.find((value) => value > 10)
console.log(found)

// Exemplo com obejetos.
const fruits = [
    {name: "apples", quantity: 23},
    {name: "banana", quantity: 31},
    {name: "oranges", quantity: 17},
]

// Procurando objeto com nome especifíco.
const result = fruits.find((fruit) => fruit.name == "banana")
console.log(result)
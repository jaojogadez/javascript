// Destructuring assigment (desestruturação) permite extrair dados de um [[Arrays]] ou [[Objects]] em [[Variáveis e Constantes]] distintas.

const data = ["João Pedro", "joao@email.com"]

// Desestruturando array
const [username, email] = data
console.log("Nome: ", username)
console.log("Email: ", email)

const fruits = ["Banana", "Apple", "Orange"]

// Desestruturando somente o index 0
const [banana] = fruits
console.log(banana)

// Ignorando o primeiro na desestruturação
const [, apple] = fruits
console.log(apple)

// Ignorando o primeiro e o segundo na desestruturação
const [, , orange] = fruits
console.log(orange)
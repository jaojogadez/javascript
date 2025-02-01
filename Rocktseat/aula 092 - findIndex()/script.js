// O método findIndex() retorna o índice no array do primeiro elemento que satisfaça uma condição. Caso contrário, retorna -1, se nenhum elementou passar no teste.

const values = [2, 4, 6 , 8 , 12]
// Obtendo o primeiro índice do elemento que o valor é maior do que 4
console.log(values.findIndex((value) => value > 4)) // íncice 2 - 6

console.log(values.findIndex((value) => value < 0)) // -1
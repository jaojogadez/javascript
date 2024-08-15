/*
    -Conversão 
    Feito de maneira consciente, por meio de funções e métodos

    -Coerção
    É feita de maneira automática pelo js
*/


// Conversão de tipo
let value = "9"
console.log(typeof value)
console.log(typeof Number(value))

let age = 12
console.log(typeof age.toString())
console.log(typeof String(age))

let option = 1
console.log(Boolean(option))
console.log(typeof Boolean(option))

// Coerção de tipo (auto)
let valor = "10"
let value2 = 10
console.log(typeof("12" + 15))
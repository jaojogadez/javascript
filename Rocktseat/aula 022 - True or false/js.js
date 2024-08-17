/*
    Falsy quando um valor é considerado false e TRUTHY quando é considerado verdadeiro em contextos onde um boolean é obrigatório (condicionais e loops).
*/

console.log("EXEMPLO DE FALSY")
console.log(false ? "Verdadeiro" : "False")
console.log(0 ? "Verdadeiro" : "False")
console.log(-0 ? "Verdadeiro" : "False")
console.log("" ? "Verdadeiro" : "False")
console.log( null ? "Verdadeiro" : "False")
console.log(undefined ? "Verdadeiro" : "False")
console.log(NaN ? "Verdadeiro" : "False")


console.log("EXEMPLO DE TRUTHY")
console.log(true ? "Verdadeiro" : "False")
console.log({} ? "Verdadeiro" : "False")
console.log( 1 ? "Verdadeiro" : "False")
console.log([] ? "Verdadeiro" : "False")
console.log( 32.3 ? "Verdadeiro" : "False")
console.log("undefined" ? "Verdadeiro" : "False")
console.log("0" ? "Verdadeiro" : "False")
console.log(" " ? "Verdadeiro" : "False")
console.log("false" ? "Verdadeiro" : "False")
console.log(Infinity ? "Verdadeiro" : "False")

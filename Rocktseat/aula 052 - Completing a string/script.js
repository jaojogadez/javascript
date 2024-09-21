const creditCard = "1234567812344928"
// console.log(creditCard.length) // tamanha da string

const lastDigits = creditCard.slice(-4) // pega os 4 últimos digitos
// console.log(lastDigits)


// O padStart preenche a string do início
const maskedNumber = lastDigits.padStart(creditCard.length,"X")
console.log(maskedNumber)

// O padEnd preenche a string do final

const number = "123"
console.log(number.padEnd(10, "#"))

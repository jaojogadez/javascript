// spread (espalhar) permite que um objeto iterável, como um array ou um object para ser usado onde com zero ou mais argumentos

const number = [1, 2, 3]
console.log(number) // array

// spread
console.log(...number) // 1 2 3

const data = [
  {
    name: "Marcos",
    email: "marcos@email.com",
    avatar: "lcp.png",
  },
  {
    name: "Cleliana Cristina",
    email: "crisdiarista@email.com",
    avatar: "faxina.png",
  },
]

console.log(data)
console.log(...data)
// Rest params (...) permite representar um número indefinido de argumentos como um array

let values = (...rest) => {
  console.log(...rest) // 1 2 3 4 5
  console.log(rest) // mostra que é um array
  console.log(rest.length) // 5
}

values(1, 2 ,3 , 4 ,5 )
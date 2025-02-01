// O método map() chama a função callback recebida por parâmetro para cada elemento do Array original, em ordem, e constrói um novo array com base nos retornos de cada iteração. E no final, devolve o array.
"use strict"
// Percorrendo os items do array
const names = ["Marcos", "Cleliana", "Paulo", "João", "Heloise"];
names.map((name) => {
  console.log(name)
});

// Sintaxe reduzida
names.map((name) => console.log(name))  // msm resultado

// Chaves -> Quando precisar fazer manipulação do item
// Chaves -> Quando precisar exibir o item

// Utilizando o novo objeto retornado
const formatted = names.map((name) => {
  // return name.toUpperCase()
  return {
    id: Math.random(),
    name: name
  }
})

console.log(formatted) // novo array formatado
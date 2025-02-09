const address1 = {
    street: "Av. Brasil",
    number: 20,
}

// Isso não é uma cópia, é uma referência
// const address2 = address1
// address2.number = 30
// console.log(address1, address2) // Os dois objetos são alterados


// Aqui criamos um novo objeto utilizando as propriedades e valores de address1
// const address2 = {...address1}
// address2.number = 30
// console.log(address1, address2)  // Agora sim só o objeto 2 mudou

const address2 = {...address1, number: 30}

console.log(address1, address2)

// Exemplo com Array
// const list2 = list1

const list1 = ["Apple", "Banana"]
const list2 = [...list1, "Strawberry"]
list2.push("Watermelon")




console.log(list1, list2) // Os dois arrays são alterados


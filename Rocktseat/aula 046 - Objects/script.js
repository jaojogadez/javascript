/* 
    OBJETO
     - Uma coleção de dados e/ou funcionalidades;
     - Podem ter propriedades e metódos;
*/

// cria um objeto
const obj = {} //obejto vazio
console.log(obj)
console.log(typeof obj)

// cria um objeto com propriedades e métodos(funções)
const user = {
    email: "jaocodadez@gmail.com", 
    age: 50,
    name: {
        firstName: "João",
        surName: "Gonçalves",
        lastName: {
            a: "Oliveira",
            b: "Guedes"
        }
    },
    address: {
        street: "Rua x",
        number: 23,
        city: "Marília",
        postal_code: "12345-123"
    },
    message: () =>{
        console.log("Oi família Te amo")
    },
}

// Acessando propriedades e métodos usando a notação de ponto
console.log(user.name.lastName.b)

// Executa o método do objeto
user.message()

// notação de colchetes
console.log(user["age"])
console.log(user["name"]["lastName"]["a"])
user["message"]()
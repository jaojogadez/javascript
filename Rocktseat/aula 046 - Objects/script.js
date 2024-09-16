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
    email: "joaozito@gmail.com", 
    age: 50,
    name: {
        firstName: "João",
        surName: "Gonçalves",
    },
    address: {
        street: "Rua x",
        number: 23,
        city: "Marília",
        postal_code: "12345-123"
    },
    message: () =>{
        console.log("Oi família Te amo")
    }
}
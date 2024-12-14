let myArray = [
    "String", 
    10, 
    true, 
    function(){
        console.log("Function on Array")
    },
    {
        name: "Rodrigo",
        email: "joao@email.com"
    }
]

console.log(myArray)

// Texto
console.log(myArray[0])
// Number
console.log(myArray[1])
// Boolean
console.log(myArray[2])
// Função
console.log(myArray[3])
// Objeto
console.log(myArray[4].name)
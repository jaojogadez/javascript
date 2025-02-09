// Um objeto alinhado é um dentro do outro, como este:
const book = {
    title: "Objetos imutáveis",
    category: "javascript",
    author: {
        name: "Rodrigo",
        email: "rodrigo@email.com"
    }
}

// O javascript em si não impõe restrições á modificaçõ dos objetos
// book.category = "HTML" // aqui modifica

Object.freeze(book) // congela um objeto de forma superficial
book.category = "CSS" // aqui não modifica

book.author.name = "João" // agora mudou

console.log(book)
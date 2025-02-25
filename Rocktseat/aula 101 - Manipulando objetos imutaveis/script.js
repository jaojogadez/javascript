const book = {
  title: "Objetos Imutáveis",
  category: "javascript",
  author: {
    name: "João",
    email: "joao@email.com",
  },
};

Object.freeze(book);
book.category = "CSS"; // não é alterado
book.author.name = "Marcos"; // É alterado devido ao Shallow Freeze
// console.log(book);

let deepFreeze = (object) => {
  const props = Reflect.ownKeys(object); // Retorna as propriedadades do objeto em forma de array

  // Iterar sobre todas as props do objeto
  for (const prop of props) {
    // Obtém o valor da propriedade atual
    const value = object[prop];

    // Verifica se o valor é um objeto ou função para continuar aplicando o deep freeze em objetos alinhados
    if ((value && typeof value === "object") || typeof value === "function") {
      deepFreeze(value);
    }
  }

  return Object.freeze(object);
};

// Chama o deep freeze
deepFreeze(book);
book.category = "Neto" // Não mudou
book.author.name = "Netinho" // Não mudou

console.log(book)


const updateBook = {
  ...book,
  title: "Criando um front ent moderno com HTML"
}
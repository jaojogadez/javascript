// visualizar o conteudo do document
// console.log(document)

// obter o title da página
console.log(document.title)

let user1 = document.getElementById('guest-1');
console.log(user1)

// mostra as propriedades do objeto
console.dir(user1)

let users = document.getElementsByClassName('guest');
console.log(users)


console.log(users.item(0))
console.log(users[1])

// selecionar pela tag

const guestvytag = document.getElementsByTagName('li')
console.log(guestvytag)
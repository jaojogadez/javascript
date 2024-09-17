function createProject(name, picture, preview, skills){
    const project = {}

    project.name = name
    project.picture = picture
    project.preview = preview
    project.skills = skills
    project.details = function(){
        console.log(`O nome do projeto é ${this.name}`)
    }

    return project
}

console.log(createProject("Landing Page", "picture.png", "preview.gif", "html, css, js, bootstrap"))

// "new" serve para criar uma instância
// cria um novo objeto com a mesma estrutura da função construtora
const project1 = new createProject("Tecnobus")
console.log(project1.name)
project1.details()


const project2 = new createProject("Secking")
console.log(project2.name)
project2.details()

console.log(project1 === project2) // são a mesma função construtora, porém objetos diferentrd


// Exemplos de funções construtoras disponíveis no próprio JavaScript
let myName = new String("João")
console.log(myName)

let price = "40.6".replace(".",",")
console.log(price)

let date = new Date("2024-09-17")
console.log(date)


// Outra forma de criar uma função construtora

function person(name){
    this.name = name
    this.message = function(){
        console.log(`Olá ${this.name}`)
    }
}

const person1 = new person("Rodrigo")
console.log(person1.name)
person1.message()

const person2 = new person("Marcos Cleliana Cristina Netinho Heloise Gabriel de Oliveira")
console.log(person2.name)
person2.message()


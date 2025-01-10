let person = {
    name: "Marcos",
    surname: "Cleliana",
    email: "marcos@email.com"
}

let steps = 1
for(let property in person){
    console.log(steps)
    console.log(property) // exibe a propriedade
    console.log(person[property]) // exibe o conteúdo da propriedade
    steps++
}

let students = ["Neto", "João", "Heloise"]
for(let index in students){
    console.log(`${index} - ${students[index]}`)
}
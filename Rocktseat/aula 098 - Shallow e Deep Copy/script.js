// Shallow Copy (Cópia Superficial): não pega os itens alinhados

const htmlCourse = {
    course: 'HTML',
    student: [{name: "João", email: "joão@gmail.com"}],
}

/* 
const jsCourse = {
    ...htmlCourse,
    course: "JavaScript"
} */


// Vai modificar tbm o htmlCourse students é uma referência e não uma cópia
// jsCourse.student.push({name: "Neto", email: "netinho@email.com"})

// Deep Copy (cópia profunda)
// const jsCourse = {
//     ...htmlCourse,
//     course: "JavaScript",
//     student: [...htmlCourse.student,  {name: "Heloise", email: "heloise@email.com"}],
// } 


// jsCourse.student.push( {name: "Neto", email: "netinho@email.com"})

// console.log(htmlCourse)
// console.log(jsCourse)


const jsCourse = {
    ...htmlCourse,
    course: "JavaScript"
}

jsCourse.student = [
    ...htmlCourse.student,
    {
        name: "Marcos",
        email: "marcos@emai.com",
    },
    {
        name: "Cleliana",
        email: "cris@emai.com",
    },
]

console.log(htmlCourse)
console.log(jsCourse)
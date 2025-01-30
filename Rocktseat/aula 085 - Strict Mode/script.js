// O modo estrito ativado, os erros que eram silenciosos passa a gerar exeções no JS
"use strict"
let showMessage = () => {
  let personName = "João Pedro"
  console.table("Olá " + personName)
};
showMessage()

class Student {
  get point(){
    return 7
  }
}

let student = new Student()
// Tenta mudar uma propriedade de leitura
//student.point = 10
console.log(student.point)

// Tentando deletar um object que não posso deletar
delete window.document

// Quando passamos os parametros duplicados
let sum = (a, a, c) => {
  return a + a + c
}

// retorna 8, pois o primeiro a assume o valor de 3 também.
const result = sum(1, 3, 2)
console.log("Resultado: ", result)
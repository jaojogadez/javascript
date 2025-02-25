// default export - é a padrão fornecida pelo módulo
export default function sum(a, b){
    return a + b
}

// named export - cada método é importado pelo seu próprio nome de export
export let multiply = (a, b) => {
    return a * b
}

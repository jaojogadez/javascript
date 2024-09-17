/*
    Operador de coalescencia nula ??
    Operador lógico que retorna o seu operando do lado direito quando o seu operador do lado esquerdo é null ou undefined. Caso contrário, ele retorna o seu operando do lado esquerdo.
*/

let content = "Olá Heloise Neto Marcos Cleliana" 
console.log(content ?? "Conteúdo Padrão!")

// ele exibe o content, se o content estiver vazio ele exibe o conteúdo padrão, somente quando content for null ou undefined.


// Exemplo de aplicação: :)
const user = {
    name: "Thiago",
    picture: undefined
}

console.log(user.picture ?? "default.png")
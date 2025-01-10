// Break encerra a execução da repetição ou de um switch para seguir o algoritmo
let option = 2
switch(option){
    case 1:
        console.log("Cadastrar")
        break
    case 2:
        console.log("Atualizar")
        break
    case 3:
        console.log("Remover")
        break
    default:
        console.log("Opção inválida")
}

for(let i = 0; i <= 10; i++){
    if(i === 5)
        break
    console.log(i)
}
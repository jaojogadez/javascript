// CALLBACK FUNCTION: é uma função passada para outra função como parâmetro

function execute(taskName, callback){
    console.log("Executando a tarefa: ", taskName)
    callback()
}

function callback(){
    console.log("Tarefa finalizada")
}

// passando para a função
execute("Download do arquivo..... ", callback) 

// Criando a função no próprio parâmetro (anônimo)

execute("Upload do arquivo...", function(){
    console.log("Função de Callbak com uma função anônim,")
})

// utilizando arrow function
execute("Excluindo arquivo...", () => {
    console.log("Arquivo excluido")
})


// forma encurtada

execute("Salvando arquivo...", () => console.log("Arquivo Salvo!"))


function teste(){
    var shampoo = 7
}

console.log(shampoo)
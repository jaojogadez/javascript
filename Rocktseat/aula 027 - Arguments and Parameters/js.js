/*
    Parâmetros: é o que fica no () irá receber um valor no escopo da função
    Argumentos: é o valor passado para a função]

    exemplo abaixo:
*/


// o username é o parâmetro
function message (username){
    console.log("olá ", username)
}

// os nomes são os argumentos
message("João")
message("Neto")
message("Heloise")


function sum (a, b){
    console.log(a + b)
}
sum(12, 17)
sum(17, 22)

// Definindo um valor fixo
function joinText( text1, text2 = "Cleliana", text3 = "Netinho"){
    console.log(text1, text2, text3)
}
joinText("Heloise", "é minha", "Butequinha")

joinText("Zoro", "João", "Proplayer")

joinText("Marcos")
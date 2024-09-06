const input = document.querySelector('input')
const form = document.querySelector("form")


// input.addEventListener("input", () => {
//     const value= input.value

//     const regex = /\D+/g // Regex = padrão

//     // Retorna o padrão encontrado na string
//     // console.log(value.match(regex))

//     // Testa se atende
//     // const isValid = regex.test(value)
//     // console.log(isValid)
// })


form.addEventListener("submit",(e) =>{
    e.preventDefault()
    const value = input.value
    const regex = /\D+/g // Regex = padrão
    if(regex.test(value)){
        console.log(value)
        alert("Padrão Encontrado")
    }
    else{
        alert("Valor Inválido. Digite corretamente")
    }

    // const value = input.value.replace(regex, "")
    // console.log(value)
})






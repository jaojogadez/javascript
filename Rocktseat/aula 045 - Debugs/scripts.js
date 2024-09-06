const input = document.querySelector("input")
const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const value = input.value
    const hasNumberRegex = /\d+/g // d - numbers  D - text

    if(hasNumberRegex.test(value)){
        alert("Texto Inválido. Digite novamente.")
    }
    else{
        alert("Cadastro enviado!")
        console.log(value)
    }
})
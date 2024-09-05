const input = document.querySelector("input")

// keydown - pressionar tecla (qualquer uma )
// input.addEventListener("keydown", (event) => {
//     event.preventDefault()
//     console.log(event.key)
// })

// keypress - do tipo caracter somente
input.addEventListener("keypress", (event) => {
    console.log(event.key)
})

input.onchange = () =>{
    inputChange()
}

function inputChange(){
    console.log('O input mudou')
}
const form = document.querySelector('form')

form.onsubmit = (event) => {
    event.preventDefault()
    console.log("Você fez submite")
}
form.onsubmit = (event) => {
    event.preventDefault()
    console.log("Você fez submite 2")
}


form.addEventListener("submit", (e) => {
    e.preventDefault()

    console.log("Hello word 3")
})
form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("Hello word 4")
})
window.addEventListener('load', () => {
    console.log("A página foi carregada")
})

addEventListener("click", (event) =>{
    event.preventDefault()

    // All informations of event
    console.log(event)
    console.log(event.target)
    console.log(event.target.textContent)
})
const ul = document.querySelector('ul')
// addicioando evento a elemneto específico
ul.addEventListener("scroll", (event) => {
    if(ul.scrollTop > 300){
        // console.log("Fim da lista")

        ul.scrollTo({
            top:0,
            behavior: "smooth"
        })
    }
})

const btn = document.querySelector("button")
btn.addEventListener("click", (e) =>{
    e.preventDefault()
    console.log("Clicou eeeee")
})
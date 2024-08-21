showMsg("Olá Neto e Heloise")


function showMsg(message){
    console.log(message)
    endline()
    function endline(){
        console.log("----------------------------------")
    }
}

showMsg("Olá tudo bem")
// não exite nesse scope ai da erro
// endline() 
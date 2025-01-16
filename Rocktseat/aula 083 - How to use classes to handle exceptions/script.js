let object = []
let index = 12

try {
  // object.execute()
  if(!object.includes(17)){
    throw new Error("O número 17 não está disponível.")
  }

  if(index > 99){
    throw new RangeError("Número fora do intervalo, escolha um número de 0 a 99")
  }

} catch (error) {
  
  if(error instanceof TypeError){
    console.log("Método indisponível.")
  } else if (error instanceof RangeError){
    console.log(error.message)
  } else {
    console.log("Não foi possível realizar a ação")
  }

  console.log(error)
}
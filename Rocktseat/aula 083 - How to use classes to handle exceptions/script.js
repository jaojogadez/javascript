let object = []

try {
  // object.execute()
  if(!object.includes(17))
    throw new Error("O número 17 não está disponível.")
} catch (error) {
  if(error instanceof TypeError){
    console.log("Método indisponível.")
  }
  console.log(error)
}
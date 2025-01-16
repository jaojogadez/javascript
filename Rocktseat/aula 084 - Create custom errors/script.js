class MyCustomError{
  constructor(message){
    this.message = "CLASSE DE ERRO CUSTOMIZADA:" + message
  }
}

try {
  throw new Error("Erro genérico")
  throw new MyCustomError("Erro personalizado lançado!")
} catch (error) {
  if(error instanceof MyCustomError){
    console.log(error.message)
  }else{
    console.log("Não foi possível executar.")
  }
}
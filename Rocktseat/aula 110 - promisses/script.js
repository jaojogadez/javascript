// função que retorna uma promise
function asyncFunction(params) {
  return new Promise((resolve, reject) => {
    // simula um operação assíncrona
    setTimeout(() => {
      const isSuccess = true;
      if (isSuccess) {
        resolve("A operação deu certo!");
      } else {
        reject("Deu errado ;-;");
      }
    }, 3000);
  });
}

console.log("Executando uma função assíncrona")

// Visualizando que o retorno é uma promise
console.log(
  asyncFunction()
    .then((response) => {
      console.log("Sucesso: ", response);
    })
    .catch((error) => {
      console.log("Error: ", error);
    })
    .finally(() => {
      console.log("Fim da execução");
    })
);

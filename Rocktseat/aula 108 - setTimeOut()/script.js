// setTimeOut() executa uma função após um intervalo de tempo específico

setTimeout(() => {
  console.log("Olá tudo bem? ")
}, 5000);

let message = (message) => {
  console.log(message)
}

setTimeout(() => message('Olá João'), 7000)
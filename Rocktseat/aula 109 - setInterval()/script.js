// setInterval() executa uma função após um intervalo de tempo específico, fica executando 

let value = 10
const interval = setInterval(() => {
  console.log(value--)

  if(value === 0){
    clearInterval(interval) // interrompe o intervalo de exuecução
  }
}, 100);
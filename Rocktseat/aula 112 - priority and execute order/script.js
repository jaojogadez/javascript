// (1) Executa o código de formaa síncrona e o valor 1 é impresso imediatamente no console
console.log(1)

// (3) Microtasks são executadas antes de temporizadoress e promessas
queueMicrotask(() => {
  console.log(2)
})

// (5) Macrotaskt que aguarda o temporizador 
setTimeout(() => {
  console.log(3)
}, 1000);

// (2) Execução síncrona
console.log(4)

// (4) Foi adicionada como microtaskt
Promise.resolve(true).then(() => {
  console.log(5)
})
// O método some() testa se ao menos um dos elementos no array passa na condição e retorna um valor Boolean

const ages = [13, 16, 18, 36]

const result = ages.some((age) => age >= 18)
console.log(result)
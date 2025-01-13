// INTL é a API de Internacionalização do ECMAScript

// obtém informações da localidade
const currentLocale = Intl.DateTimeFormat().resolvedOptions();
console.log(currentLocale);
// formata de acordo com a localidade
console.log(new Intl.DateTimeFormat("pt-br").format(new Date()));
console.log(new Intl.DateTimeFormat("en-us").format(new Date()));
const date = new Date()
// obtém a diferença do timezone
console.log(date.getTimezoneOffset())
console.log(date.getTimezoneOffset() / 60)

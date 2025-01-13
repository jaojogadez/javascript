let date = new Date("July 3, 2025 13:31:00")
//formatamos para o dia sempre ter 2 digitos
let day = date.getDate().toString().padStart(2, "0")
console.log(day)
//formatamos para o mês sempre ter 2 digitos
let mounth = (date.getMonth() + 1).toString().padStart(2, "0")
console.log(mounth)
let year = date.getFullYear()
let hours = date.getHours()
let minute = date.getMinutes()
console.log(`${day}/${mounth}/${year} as ${hours}:${minute}`)
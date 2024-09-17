const user = {
    id : 1,
    name: "João",
    // address: {
    //     street: "Avenidada X",
    //     ciy: "São Paulo",
    //     geo: {
    //         latitude: 48.000,
    //         longitude: 12.5435,
    //     },
    // },
    message: function(){
        console.log(`Olá ${this.name}!`)
    }
}

console.log(user?.address)
console.log(user?.address?.street)

user.message?.()
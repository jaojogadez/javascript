const user = {
    name: "Cristina",
    email: "@email.com",
    message: function(){
       // console.log(`Olá ${user.name}`)
       console.log(`Olá ${this.email}`)

    }
}

user.message()
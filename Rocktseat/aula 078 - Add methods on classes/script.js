class User {
  constructor(name, email){
    this.name = name
    this.email = email
  }
  sendEmail(){
    console.log("Email enviado para", this.name, "para o endereço", this.email)
  }
}
const user = new User("João", "joao@email.com")
user.sendEmail()
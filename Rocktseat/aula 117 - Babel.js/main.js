class User {
  constructor({ email }) {
    this.email = email;
  }

  sendMessage() {
    console.log("Mensagem enviada para:");
  }
}

let user = new User({ email: "joao@email.com" });
user.sendMessage();

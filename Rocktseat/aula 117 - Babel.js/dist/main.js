"use strict";

class User {
  constructor(_ref) {
    let {
      email
    } = _ref;
    this.email = email;
  }
  sendMessage() {
    console.log("Mensagem enviada para:");
  }
}
let user = new User({
  email: "joao@email.com"
});
user.sendMessage();
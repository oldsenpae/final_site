let name = document.querySelector("#name");

let email = document.querySelector("#email");

let message = document.querySelector("#message");

let submit = document.querySelector("#submit");

let users = {};

function user(name, email, message) {
  this.name = name;
  this.email = email;
  this.message = message;
}

function createId(user) {
  return Object.keys(users).length;
}

submit.addEventListener("click", () => {
  const nameUser = name.value;
  const emailUser = email.value;
  const messageUser = message.value;

  const userId = "User" + createId(users);

  users[userId] = user;

  console.log(users);

  alert(`${nameUser}, ваше письмо было отправлено`);
});

const userNameInput = document.querySelector("#userNameInput");
const passwordInput = document.querySelector("#passwordInput");
const signIn = document.querySelector("#signIn");
const form = document.querySelector("form");
const messages = document.querySelectorAll(".message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (
    userNameInput.value.trim().length == 0 &&
    passwordInput.value.trim().length == 0
  ) {
    userNameInput.classList.add("invalid");
    passwordInput.classList.add("invalid");
    messages.forEach((message) => (message.style.display = "block"));
  } else {
    userNameInput.classList.remove("invalid");
    passwordInput.classList.remove("invalid");
    messages.forEach((message) => (message.style.display = "none"));
  }
});

function validation() {
  const form = document.querySelector("#form");
  const emailInput = document.querySelector("#emailInput").value;
  const emailError = document.querySelector("#email-error");
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (emailInput.match(pattern)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    emailError.innerHTML = "Your email address in valid";
    emailError.style.color = "#16632a";
  } else {
    form.classList.remove("valid");
    form.classList.add("invalid");
    emailError.innerHTML = "Please enter valid email address";
    emailError.style.color = "red";
  }
  if (emailInput == "") {
    form.classList.remove("valid");
    form.classList.remove("invalid");
    emailError.innerHTML = "";
    emailError.style.color = "#00ff00";
  }
}
//     /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/
//      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//Show Input Error messages
function showErrow(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

//Check Email is valid or not
function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

//Show success
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
//Event Listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (username.value === "") {
    showErrow(username, "Username is required!");
  } else {
    showSuccess(username);
  }

  if (email.value === "") {
    showErrow(email, "Email is required!");
  } else if (!isValidEmail(email.value)) {
    showErrow(email, "Email is not valid");
  } else {
    showSuccess(email);
  }

  if (password.value === "") {
    showErrow(password, "password is required!");
  } else {
    showSuccess(password);
  }

  if (password2.value === "") {
    showErrow(password2, "password2 is required!");
  } else {
    showSuccess(password2);
  }
});

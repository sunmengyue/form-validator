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
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showErrow(input, `Email is not valid!`);
  }
}

//Show success
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    console.log(input.id);
    if (input.value.trim() === "") {
      showErrow(input, `${capitalizeFirst(input)} is required!`);
    } else {
      showSuccess(input);
    }
  });
}

// Capitalize the first letter
function capitalizeFirst(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Check length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showErrow(
      input,
      `${capitalizeFirst(input)} must be at least ${min} characters.`
    );
  } else if (input.value.length > max) {
    showErrow(
      input,
      `${capitalizeFirst(input)} must be less than ${max} characters.`
    );
  } else {
    showSuccess(input);
  }
}

// Check if two passwords match
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showErrow(input2, "Password does not match!");
  }
}

//Event Listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 10);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, password2);
});

const submitButton = document.getElementById("btn");
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  console.log("Имя пользователя:", username.value);
  console.log("Email:", email.value);
  console.log("Пароль:", password.value);
  console.log("Согласие с условиями:", checkbox.checked);
});

function validateForm() {
  let isValid = true;
  document
    .querySelectorAll(".error-message")
    .forEach((error) => (error.textContent = ""));

  const usernameError = document.getElementById("username-error");
  if (username.value.trim().length < 2) {
    usernameError.textContent =
      "Имя пользователя должно быть от 2 до 20 символов.";
    isValid = false;
  }

  const emailError = document.getElementById("email-error");
  if (!email.validity.valid) {
    emailError.textContent = "Пожалуйста, введите корректный email.";
    isValid = false;
  }

  const passwordError = document.getElementById("password-error");
  if (password.value.trim().length < 8) {
    passwordError.textContent = "Пароль должен содержать не менее 8 символов.";
    isValid = false;
  }

  const isUsernameValid = username.value.trim().length >= 2;
  const isEmailValid = email.validity.valid;
  const isPasswordValid = password.value.trim().length >= 8;
  const isCheckboxChecked = checkbox.checked;

  btn.disabled = !(
    isUsernameValid &&
    isEmailValid &&
    isPasswordValid &&
    isCheckboxChecked
  );
}
username.addEventListener("input", validateForm);
email.addEventListener("input", validateForm);
password.addEventListener("input", validateForm);
checkbox.addEventListener("change", validateForm);

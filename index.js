const formLogin = document.forms.login;
const btn = document.getElementById("btn");
const firstNameError = document.getElementById("firstname-error");
const lastNameError = document.getElementById("lastname-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");

function validate(){
  if (formLogin.firstname.value.trim() === ""){
    firstNameError.style.display = "block";
    formLogin.firstname.classList.add("error");
    
  } else {
    firstNameError.style.display = "none";
    formLogin.firstname.classList.remove("error");
  }

  if (formLogin.lastname.value.trim() === ""){
    lastNameError.style.display = "block";
    formLogin.lastname.classList.add("error");
  } else {
    lastNameError.style.display = "none";
    formLogin.lastname.classList.remove("error");
  }
    
  if(formLogin.password.value.trim() === ""){
    passwordError.style.display = "block";
    formLogin.password.classList.add("error");
  } else {
    passwordError.style.display = "none";
    formLogin.password.classList.remove("error");
  }

  if (formLogin.email.value.trim() === "") {
    emailError.style.display = "block";
    formLogin.email.classList.add("error");
  } else {
    emailError.style.display = "none";
    formLogin.email.classList.remove("error");
  }
  return false;
}

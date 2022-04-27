const email = document.getElementById("email");
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const password = document.getElementById("password");
const loginBtn = document.querySelector(".btn");
const errorMsg = document.querySelector(".error-txt");

function checkBtn() {
  loginBtn.addEventListener("click", () => {
    checkEmail(this.email);
  })
}

function checkEmail(email) {
  this.email.classList.remove('active');
  if(!emailRegex.test(email.value)) {
    this.email.classList.add('active');
    this.email.nextElementSibling.classList.add('active');
    errorMsg.classList.add('active');
  } else {
    this.email.classList.remove('active');
    this.email.nextElementSibling.classList.remove('active');
    errorMsg.classList.remove('active');
  }
}


checkBtn();
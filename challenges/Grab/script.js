const email = document.getElementById("email");
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const password = document.getElementById("password");
const loginBtn = document.querySelector(".btn");

function checkBtn() {
  loginBtn.addEventListener("click", () => {
    checkEmail(this.email);
  })
}

function checkEmail(email) {
  this.email.classList.remove('active');
  if(!emailRegex.test(email.value)) {
    this.email.classList.add('active');
    console.log(this.email);
  } else {
    this.email.classList.remove('active');
  }
}

console.log(this.email);

checkBtn();
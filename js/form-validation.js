const userName = document.querySelector("#name");
const correctWay = /^[A-Z a-z]+$/;
const userEmail = document.querySelector("#email");
const userPassword = document.querySelector("#pw");
const confirmPassword = document.querySelector("#con-pw");
const userMobileNumber = document.querySelector("#mob");
let msgName = document.querySelector("#msg-name");
let msgEmail = document.querySelector("#msg-email");
let msgPassword = document.querySelector("#msg-pw");
let msgConfirmPassword = document.querySelector("#msg-con-pw");
let msgMobileNumber = document.querySelector("#msg-mob");

function validation() {
  //? username verification
  if (userName.value === "") {
    msgName.innerHTML = "❌ Name can't be empty ❌";
    return false;
  } else if (userName.value.length < 2) {
    msgName.innerHTML = "❌ Name can't be less than 2 characters ❌";
    return false;
  } else if (userName.value.length > 15) {
    msgName.innerHTML = "❌ Name can't be more than 15 characters ❌";
    return false;
  } else if (userName.value.match(correctWay)) {
    msgName.innerHTML = "✔️ Username verified ✔️";
    msgName.classList.add("success");
  } else {
    msgName.innerHTML = "❌ Only alphabets are allowed ❌";
  }
  //? email verification
  if (userEmail.value === "") {
    msgEmail.innerHTML = "❌ Email can't be empty ❌";
    return false;
  } else if (userEmail.value.indexOf("@") <= 1) {
    msgEmail.innerHTML = "❌ Invalid Position of @ ❌";
    return false;
  } else if (
    userEmail.value.charAt(userEmail.value.length - 4) !== "." &&
    userEmail.value.charAt(userEmail.value.length - 3) !== "."
  ) {
    msgEmail.innerHTML = "❌ Invalid Position of dot(.) ❌";
    return false;
  } else if (userEmail.value.indexOf(".") - userEmail.value.indexOf("@") < 4) {
    msgEmail.innerHTML = "❌ Invalid Position of dot(.) ❌";
    return false;
  } else {
    msgEmail.innerHTML = "✔️ Email verified ✔️";
    msgEmail.classList.add("success");
  }
  //? password verification
  if (userPassword.value === "") {
    msgPassword.innerHTML = "❌ Password can't be empty ❌";
    return false;
  } else if (userPassword.value.length < 8) {
    msgPassword.innerHTML = "❌ Password can't be less than 8 characters ❌";
    return false;
  } else if (userPassword.value.search(/[0-9]/) === -1) {
    msgPassword.innerHTML = "❌ Password must contain atleast 1 number ❌";
  } else if (userPassword.value.search(/[a-z]/) === -1) {
    msgPassword.innerHTML =
      "❌ Password must contain atleast 1 lowercase character ❌";
  } else if (userPassword.value.search(/[A-Z]/) === -1) {
    msgPassword.innerHTML =
      "❌ Password must contain atleast 1 uppercase character ❌";
  } else if (userPassword.value.search(/[!\@\#\$\%\^\&\*\(\)\,\.\?]/) === -1) {
    msgPassword.innerHTML =
      "❌ Password must contain atleast 1 special character ❌";
  } else {
    msgPassword.innerHTML = "✔️ Your password is strong ✔️";
    msgPassword.classList.add("success");
  }
  //? password verification
  if (confirmPassword.value !== userPassword.value) {
    msgConfirmPassword.innerHTML = "❌ Password doesn't match ❌";
  } else {
    msgConfirmPassword.innerHTML = "✔️  Password verified ✔️";
    msgConfirmPassword.classList.add("success");
  }
  //? mobile number validation
  if (userMobileNumber.value === "") {
    msgMobileNumber.innerHTML = "❌ Mobile Number can't be empty ❌";
    return false;
  } else if (isNaN(userMobileNumber.value)) {
    msgMobileNumber.innerHTML = "❌ Only numbers are allowed❌";
    return false;
  } else if (userMobileNumber.value.length < 10) {
    msgMobileNumber.innerHTML =
      "❌ Mobile Number can't be less than 10 digits ❌";
    return false;
  } else if (userMobileNumber.value.length > 10) {
    msgMobileNumber.innerHTML =
      "❌ Mobile Number can't be more than 10 digits ❌";
    return false;
  } else {
    msgMobileNumber.innerHTML = "✔️ Your number is valid ✔️";
    msgMobileNumber.classList.add("success");
  }
}

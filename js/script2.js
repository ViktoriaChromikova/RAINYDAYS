const contactForm = document.querySelector("#contactForm");
const yourName = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const yourMessage = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const yourEmail = document.querySelector("#e-mail");
const emailError = document.querySelector("#emailError");

function validateContactForm() {
    event.preventDefault();
    console.log("hello");

    if (checkLength(yourName.value, 0) === true){
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }

    if (checkLength(yourMessage.value, 10) === true){
        messageError.style.display = "none";
    } else {
       messageError.style.display = "block";
    }
    if (validateEmail(yourEmail.value) === true){
      emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }
}
contactForm.addEventListener("submit", validateContactForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
    
}

function validateEmail(yourEmail) { 
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(yourEmail);    
   return patternMatches;
 }
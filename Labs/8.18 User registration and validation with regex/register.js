function checkForm() {
    // TODO: Perform input validation
    let formErrors = [];
    let formErrorsClasses = [];
    let formErrors_div = document.querySelector("#formErrors");

    let fullName_input = document.querySelector("#fullName");
    let email_input = document.querySelector("#email");
    let password_input = document.querySelector("#password");
    let passwordConfirm_input = document.querySelector("#passwordConfirm");
    // do validation here
    if (fullName_input.value.length < 1) {
        formErrors.push("Missing full name.");
        formErrorsClasses.push(fullName_input);
    }
    if (email_input.value.length < 1 || !(new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,5}$').test(email_input.value))) {
        formErrors.push("Invalid or missing email address.");
        formErrorsClasses.push(email_input);
    }
    if(password_input.value.length < 10 || password_input.value.length > 20){
        formErrors.push("Password must be between 10 and 20 characters.")
        formErrorsClasses.push(password_input);
    }
    if(!(new RegExp('.*[a-z].*').test(password_input.value))){
        formErrors.push("Password must contain at least one lowercase character.");
        formErrorsClasses.push(password_input);
    }
    if(!(new RegExp('.*[A-Z].*').test(password_input.value))){
        formErrors.push("Password must contain at least one uppercase character.");
        formErrorsClasses.push(password_input);
    }
    if(!(new RegExp('.*[0-9].*').test(password_input.value))){
        formErrors.push("Password must contain at least one digit.");
        formErrorsClasses.push(password_input);
    }
    if(password_input.value !== passwordConfirm_input.value){
        formErrors.push("Password and confirmation password don't match.");
        formErrorsClasses.push(passwordConfirm_input);
    }

    if (formErrors.length > 0) {
        formErrors_div.classList.remove("hide");
        formErrors_div.innerHTML = "<ul>";
        for (let i = 0; i < formErrors.length; i++) {
            formErrors_div.innerHTML += `<li>${formErrors[i]}</li>`;
        }
        formErrors_div.innerHTML += "</ul>";

        formErrorsClasses.forEach((div) => div.classList.add("error"));
    } else {
        formErrors_div.classList.add("hide");
        document.querySelectorAll("input[type=text], input[type=email], input[type=password]").forEach((input) => input.classList.remove("error"))
    }
}

document.getElementById("submit").addEventListener("click", function (event) {
    checkForm();

    // Prevent default form action. DO NOT REMOVE THIS LINE
    event.preventDefault();
});
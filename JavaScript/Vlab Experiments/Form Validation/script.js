function validateForm(event) {
    // event.preventDefault();
    let feedback_div = document.getElementById("feedback");
    feedback_div.style.color = "black";
    feedback_div.innerHTML = "";
    ids = ["fullName", "email", "password", "confirmPassword", "submit"];
    for (id of ids){
        if (document.getElementById(id).value.match("^(\s)*$")){
            feedback_div.style.color = "red";
            feedback_div.innerHTML = "Error: All fields are required.";
            return;
          
        }
    }
    if (!validateName()){
        feedback_div.style.color = "red";
        feedback_div.innerHTML = "Error: Full name is required.";
        return;
    }
    if (!validateEmail()){
        feedback_div.style.color = "red";
        feedback_div.innerHTML = "Error: Invalid Email Address.";
        return;
    }
    if (!validatePassword()){
        feedback_div.style.color = "red";
        feedback_div.innerHTML = "Error: Password must be at least 8 characters.";
        return;
    }
    if (!ConfirmPassword()){
        feedback_div.style.color = "red";
        feedback_div.innerHTML = "Error: Passwords do not match.";
        return;
    }
    feedback_div.style.color = "green";
    feedback_div.innerHTML = "Registration successful!";
}

function validateName() {
    let pattern = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;
    return pattern.test(document.getElementById("fullName").value);
}

function validateEmail() {
    let regex = /^[a-zA-Z0-9\.]+@[a-z]+\.[a-z]{3}$/;
    return regex.test(document.getElementById("email").value);
}

function validatePassword(){
    return document.getElementById("password").value.length >= 8;
}

function ConfirmPassword(){
    return document.getElementById("password").value == document.getElementById("confirmPassword").value;
}
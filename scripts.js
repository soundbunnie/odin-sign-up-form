function checkPasswords(){
    let password = document.getElementById('user-password');
    let confirmPassword = document.getElementById('confirm-password');
    if (!password.value && !confirmPassword.value){
        console.log("Enter a valid password");
        password.style.removeProperty('outline');
        confirmPassword.style.removeProperty('outline');

            if (document.getElementById('password-error-message')){
                document.getElementById('password-error-message').remove();
        }
    }
    else if (password.value == confirmPassword.value){
        console.log("Passwords match");
        password.style.outline = "1px solid green";
        confirmPassword.style.outline = "1px solid green";

        if (document.getElementById('password-error-message')){
            document.getElementById('password-error-message').remove();
        }
    }
    else if (password.value != confirmPassword.value && !document.getElementById("password-error-message")){
        console.log("Passwords don't match");
        password.style.outline = "1px solid red";
        confirmPassword.style.outline = "1px solid red";

        let passErrorMessage = document.createElement("p");
        let passErrorText = document.createTextNode("* Passwords do not match");
        passErrorMessage.style.color = "#8B0000";
        passErrorMessage.style.fontSize = "12px";
        passErrorMessage.append(passErrorText);
        passErrorMessage.id = "password-error-message";
        
        let passInput = document.getElementById('password-input');
        passInput.insertAdjacentElement("beforeend", passErrorMessage);

    }
}

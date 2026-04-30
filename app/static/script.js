function ClickButton(event) {
    const button = document.querySelector(".button-case");

    const email = ContainsEmail();
    const password = AdequatePassword();

    if (!email || !password) {
        event.preventDefault();
    }
}
function ContainsEmail() {
    const email = document.getElementById("email-box");
    const alert = document.getElementById("alert-box");
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const empty = email.value.trim();

    if (regexEmail.test(empty)) {
        alert.style.display = "none";
        email.style.border = "1px solid green";
        return true
    }else {
        alert.style.display = "block";
        email.style.border = "1px solid red";
        return false
    }
}

function AdequatePassword() {
    const password = document.getElementById("password-box");
    const alert = document.getElementById("alert-password");
    const count = password.value.length;

    if (count >= 8) {
        alert.style.display = "none";
        password.style.border = "1px solid green";
        return true  
    }else {
        alert.style.display = "block";
        password.style.border = "1px solid red";
        return false
    }
}
document.getElementById("loginForm").addEventListener("submit", function(event) {
    var username = document.getElementById("username").value;
    var password = document.querySelector(".input").value;
    var valid = true;

    if (username === "") {
        document.getElementById("usernameError").innerText = "Tên người dùng không được để trống.";
        document.getElementById("usernameError").style.display = "inline";
        valid = false;
    } else {
        document.getElementById("usernameError").innerText = "";
        document.getElementById("usernameError").style.display = "none";
    }

    if (password.length < 6) {
        document.getElementById("passwordError").innerText = "Mật khẩu phải có ít nhất 6 ký tự.";
        document.getElementById("passwordError").style.display = "inline";
        valid = false;
    } else {
        document.getElementById("passwordError").innerText = "";
        document.getElementById("passwordError").style.display = "none";
    }

    if (!valid) {
        event.preventDefault();
    }
});

document.getElementById("username").addEventListener("input", function() {
    var username = this.value;
    var usernameError = document.getElementById("usernameError");

    if (username === "") {
        usernameError.innerText = "Tên người dùng không được để trống.";
        usernameError.style.display = "inline";
    } else {
        usernameError.innerText = "";
        usernameError.style.display = "none";
    }
});

document.querySelector(".input").addEventListener("input", function() {
    var password = this.value;
    var passwordError = document.getElementById("passwordError");

    if (password.length < 6) {
        passwordError.innerText = "Mật khẩu phải có ít nhất 6 ký tự.";
        passwordError.style.display = "inline";
    } else {
        passwordError.innerText = "";
        passwordError.style.display = "none";
    }
});
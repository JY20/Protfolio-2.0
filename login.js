var loginButton = document.getElementById("submitButton");
var loginForm = document.getElementById("loginForm");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "wv") {
        location.replace("home.html");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
function showSignup() {
    document.getElementById("login-box").classList.add("hidden");
    document.getElementById("signup-box").classList.remove("hidden");
}

function showLogin() {
    document.getElementById("signup-box").classList.add("hidden");
    document.getElementById("login-box").classList.remove("hidden");
}

function signup() {
    let name = document.getElementById("signup-name").value;
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;

    if (name && email && password) {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        
        if (users.some(user => user.email === email)) {
            alert("Email already exists. Try logging in!");
            return;
        }

        users.push({ name, email, password });
        localStorage.setItem("users", JSON.stringify(users));
        alert("Signup successful! You can now log in.");
        showLogin();
    } else {
        alert("Please fill in all fields.");
    }
}

function login() {
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert("Login successful!");
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        window.location.href = "homepage.html"; // Redirect to homepage
    } else {
        alert("Invalid email or password.");
    }
}

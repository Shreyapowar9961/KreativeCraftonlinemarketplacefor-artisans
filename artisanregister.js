document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("registerForm");

    registerForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form refresh

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Simulating storing user data (Replace with backend API)
        const artisanData = {
            name: name,
            email: email,
            password: password,
        };

        localStorage.setItem("artisanUser", JSON.stringify(artisanData)); // Store user data
        alert("Account created successfully! Please login.");
        window.location.href = "artisan-login.html"; // Redirect to login
    });
});

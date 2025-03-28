document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form refresh

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Simulated authentication (Replace with backend API)
        if (email === "artisan@example.com" && password === "password123") {
            localStorage.setItem("artisanLoggedIn", "true"); // Store login status
            alert("Login successful!");
            window.location.href = "artisan-dashboard.html"; // Redirect to dashboard
        } else {
            alert("Invalid email or password.");
        }
    });
});

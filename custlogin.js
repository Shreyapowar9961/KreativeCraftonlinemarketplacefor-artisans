document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get user input
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Simple validation
    if (email === "customer@example.com" && password === "password123") {
        alert("Login Successful!");
        window.location.href = "C:\Users\ARJUN\Desktop\projectsem4\reg.html"; // Redirect to homepage
    } else {
        alert("Invalid email or password. Please try again.");
    }
});

// Forgot Password Click Event
document.getElementById("forgotPassword").addEventListener("click", function() {
    alert("Password reset link sent to your email.");
});

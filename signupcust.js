document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get user input
    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let address1 = document.getElementById("address1").value;
    let address2 = document.getElementById("address2").value;
    let pincode = document.getElementById("pincode").value;
    let password = document.getElementById("password").value;

    // Simple validation
    if (fullname && email && mobile && address1 && pincode && password) {
        alert("Signup Successful! You can now login.");
        window.location.href = "login.html"; // Redirect to login page
    } else {
        alert("Please fill in all required fields.");
    }
});

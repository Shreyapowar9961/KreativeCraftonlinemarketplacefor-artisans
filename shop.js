// Simulated login check (Replace with actual authentication logic)
function isUserLoggedIn() {
    return localStorage.getItem("userToken") !== null;  // Check if token exists
}

// Handle Buy Now
function handlePurchase() {
    if (!isUserLoggedIn()) {
        alert("Please log in to buy this product.");
        window.location.href = "login.html"; // Redirect to login page
        return;
    }
    alert("Proceeding to checkout...");
}

// Handle Add to Cart
function handleAddToCart() {
    if (!isUserLoggedIn()) {
        alert("Please log in to add items to the cart.");
        window.location.href = "login.html"; // Redirect to login page
        return;
    }
    alert("Item added to cart!");
}

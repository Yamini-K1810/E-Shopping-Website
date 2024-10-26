// Function addToCart
function addToCart() {
    // Retrieve cart quantity from localStorage or set to 0 if not present
    let cartQuantity = parseInt(localStorage.getItem('cartQuantity')) || 0;
    // Increment cartQuantity
    cartQuantity++;
    // Update cart quantity in localStorage
    localStorage.setItem('cartQuantity', cartQuantity);
    // Display alert message with current cart quantity
    alert("Cart Quantity: "+ cartQuantity);
}

// Function resetCart
function resetCart() {
    // Set cart quantity to 0
    localStorage.setItem('cartQuantity', 0);
    // Display alert message indicating reset
    alert('Cart Quantity reset to 0');
}
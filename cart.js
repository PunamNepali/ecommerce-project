// Load cart from localStorage or initialize an empty cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(productName, productPrice) {
    
    const product = { name: productName, price: productPrice };
    cart.push(product);
    
    // Save updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    
    updateCart();
}

// Update cart display
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    if (!cartItems || !cartTotal) return;  // Ensure elements exist

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((product, index) => {
        total += product.price;
        cartItems.innerHTML += `<li>${product.name} - Rs ${product.price} 
            <button onclick="removeFromCart(${index})">Remove</button>
        </li>`;
    });

    // Update cart count in navbar
    const cartCountElement = document.getElementById("cart-count");
    if (cartCountElement) {
        cartCountElement.innerText = cart.length;
    }

    cartTotal.innerText = `Total: Rs ${total}`;
}

// Remove an item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    
    // Update localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    
    updateCart();
}

// Clear cart
document.addEventListener("DOMContentLoaded", function () {
    const clearCartButton = document.getElementById("clear-cart");
    if (clearCartButton) {
        clearCartButton.addEventListener("click", function () {
            cart = [];
            localStorage.removeItem("cart");
            updateCart();
        });
    }

    // Load cart items when the cart page opens
    updateCart();
});

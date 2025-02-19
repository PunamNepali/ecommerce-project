// Function to clear the entire wishlist
function clearWishlist() {
    localStorage.removeItem('wishlist'); // Remove the wishlist from localStorage
    displayWishlist(); // Refresh the wishlist display
}

// Function to display wishlist items
function displayWishlist() {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const wishlistContainer = document.getElementById('wishlist-container');
    
    if (wishlistContainer) {
        wishlistContainer.innerHTML = ''; // Clear previous content
        
        if (wishlist.length === 0) {
            wishlistContainer.innerHTML = '<p>Your wishlist is empty.</p>';
        } else {
            wishlist.forEach(product => {
                const productElement = document.createElement('div');
                productElement.className = 'wishlist-item';
                productElement.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" style="width: 100px;">
                    <h3>${product.name}</h3>
                    <p>Rs ${product.price}</p>
                    <button onclick="removeFromWishlist('${product.name}')">Remove</button>
                `;
                wishlistContainer.appendChild(productElement);
            });
        }
    }
}

// Function to add product to wishlist
function addToWishlist(name, price, image) {
    const product = { name, price, image };
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    
    // Check if the product is already in the wishlist
    if (!wishlist.some(item => item.name === name)) {
        wishlist.push(product);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        alert('Product added to wishlist!');
    } else {
        alert('Product is already in the wishlist!');
    }
}

// Function to remove product from wishlist
function removeFromWishlist(name) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist = wishlist.filter(product => product.name !== name);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    displayWishlist(); // Refresh the wishlist display
}

// Display wishlist when the page loads
window.onload = displayWishlist;


function clearWishlist() {
    if (confirm('Are you sure you want to clear your wishlist?')) {
        localStorage.removeItem('wishlist'); // Remove the wishlist from localStorage
        displayWishlist(); // Refresh the wishlist display
    }
}
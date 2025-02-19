    
// Function to filter products based on price
document.getElementById("price-filter").addEventListener("change", function() {
    const selectedPrice = this.value;
    const products = document.querySelectorAll(".product");

    products.forEach(product => {
        const price = parseInt(product.getAttribute("data-price"));

        if (selectedPrice === "all") {
            product.style.display = "block"; // Show all products
        } else if (selectedPrice === "low" && price < 500) {
            product.style.display = "block"; // Show products below Rs 500
        } else if (selectedPrice === "medium" && price >= 500 && price <= 1500) {
            product.style.display = "block"; // Show products between Rs 500 and Rs 1500
        } else if (selectedPrice === "high" && price > 1500) {
            product.style.display = "block"; // Show products above Rs 1500
        } else {
            product.style.display = "none"; // Hide products that don't match
        }
    });
});

// // Add your existing brand filter code here
// document.getElementById("brand-filter").addEventListener("change", function() {
//     let selectedBrand = this.value;
//     const products = document.querySelectorAll(".product");

//     products.forEach(product => {
//         const brand = product.getAttribute("data-brand");

//         if (selectedBrand === "all" || brand === selectedBrand) {
//             product.style.display = "block"; // Show products that match the selected brand
//         } else {
//             product.style.display = "none"; // Hide products that don't match
//         }
//     });
// });

// Example function to add to cart (you can implement this as needed)
function addToCart(productName, price) {
    alert(`Added ${productName} to cart for Rs ${price}`);
}

//  to show different brand 

document.getElementById("brand-filter").addEventListener("change", function() {
    let selectedBrand = this.value;
    if (selectedBrand === "Derma") {
        window.location.href = "derma.html"; // Redirect to derma.html
    }
});
document.getElementById("brand-filter").addEventListener("change", function() {
    let selectedBrand = this.value;
    if (selectedBrand === "Glynt") {
        window.location.href = "glynt.html"; // Redirect to glynt.html
    }
});
document.getElementById("brand-filter").addEventListener("change", function() {
    let selectedBrand = this.value;
    if (selectedBrand === "Marin") {
        window.location.href = "marin.html"; // Redirect to marin.html
    }
});
document.getElementById("brand-filter").addEventListener("change", function() {
    let selectedBrand = this.value;
    if (selectedBrand === "Nivea") {
        window.location.href = "nivea.html"; // Redirect to nivea.html
    }
});
document.getElementById("brand-filter").addEventListener("change", function() {
    let selectedBrand = this.value;
    if (selectedBrand === "The Ordinary") {
        window.location.href = "Theordinary.html"; // Redirect to Theordinary.html
    }
});


  // Function to filter products based on rating
  document.getElementById("rating-filter").addEventListener("change", function() {
    const selectedRating = this.value;
    const products = document.querySelectorAll(".product");

    products.forEach(product => {
        const ratingText = product.querySelector("p:nth-of-type(3)").textContent; // Get the rating text
        const rating = ratingText.split('⭐').length - 1; // Count the number of stars

        if (selectedRating === "all") {
            product.style.display = "block"; // Show all products
        } else if (rating >= selectedRating) {
            product.style.display = "block"; // Show products that meet the rating criteria
        } else {
            product.style.display = "none"; // Hide products that don't match
        }
    });
});



document.getElementById('search-bar').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        if (productName.includes(searchTerm)) {
            product.style.display = 'block'; // Show product
        } else {
            product.style.display = 'none'; // Hide product
        }
    });
});

export function displayProducts(products, containerSelector, handleAddToCart = null, handleAddToWishlist = null) {
    const container = document.querySelector(containerSelector);
    container.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <h2>${product.name}</h2>
            <p>Category: ${product.category}</p>
            <p>Price: ${product.price}</p>
            <p>Rating: ${product.rating}</p>
        `;
        if (handleAddToCart) {
            const addToCartBtn = document.createElement('button');
            addToCartBtn.textContent = 'Add to Cart';
            addToCartBtn.addEventListener('click', () => handleAddToCart(product));
            productCard.appendChild(addToCartBtn);
        }
        if (handleAddToWishlist) {
            const addToWishlistBtn = document.createElement('button');
            addToWishlistBtn.textContent = 'Add to Wishlist';
            addToWishlistBtn.addEventListener('click', () => handleAddToWishlist(product));
            productCard.appendChild(addToWishlistBtn);
        }
        container.appendChild(productCard);
    });
}

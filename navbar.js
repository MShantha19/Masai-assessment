export function renderNavbar(selector) {
    const navbarHTML = `
        <nav>
            <a href="index.html">Home</a>
            <a href="wishlist.html">Wishlist</a>
            <a href="cart.html">Cart</a>
        </nav>
    `;
    document.querySelector(selector).innerHTML = navbarHTML;
}

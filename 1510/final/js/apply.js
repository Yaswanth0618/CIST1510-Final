function updateCartCountOnLoad() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalCount = cart.reduce((total, cartItem) => total + cartItem.quantity, 0);
    document.getElementById('cart-count').textContent = totalCount;
  }
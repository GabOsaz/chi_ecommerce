const removeFromCart = (id, qty) => {
  // Check if cart exists in local storage
  const isEmpty = !!localStorage.getItem('cart');

  if (!isEmpty) {
    return;
  }

  const cart = JSON.parse(localStorage.getItem('cart'));
  if (qty > 1) {
    // Decrease item quantity by 1
    const editedCart = cart.map((item) => (item.id === id
      ? { ...item, quantity: item.quantity - 1 }
      : item));
    localStorage.setItem('cart', JSON.stringify(editedCart));
    window.dispatchEvent(new Event('cart'));
    return;
  }

  //   Hence remomve item from cart
  const filteredCart = cart.filter((item) => item.id !== id);
  localStorage.setItem('cart', JSON.stringify(filteredCart));

  window.dispatchEvent(new Event('cart'));
};

export default removeFromCart;

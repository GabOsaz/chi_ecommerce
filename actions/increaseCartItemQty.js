const increaseCartItemQty = (id) => {
  // Check if cart exists in local storage
  const isEmpty = !!localStorage.getItem('cart');

  if (!isEmpty) {
    return;
  }

  const cart = JSON.parse(localStorage.getItem('cart'));
  // increase item quantity by 1
  const editedCart = cart.map((item) => (item.id === id
    ? { ...item, quantity: item.quantity + 1 }
    : item));
  localStorage.setItem('cart', JSON.stringify(editedCart));
  window.dispatchEvent(new Event('cart'));
};

export default increaseCartItemQty;

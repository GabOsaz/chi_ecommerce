import { toast } from 'react-toastify';

const addToCart = (id, quantity, setOpen) => {
  const newCartItem = { id, quantity };
  // Check if cart exists in local storage
  const isEmpty = !!localStorage.getItem('cart');

  if (!isEmpty) {
    // Create cart afresh if it doesn't exist
    localStorage.setItem('cart', JSON.stringify([newCartItem]));
  } else {
    const cart = JSON.parse(localStorage.getItem('cart'));
    //   Check if item is already present in cart
    const isPresent = cart.some((each) => each.id === id);
    if (!isPresent) {
      // Add item to cart if not already present
      localStorage.setItem('cart', JSON.stringify([...cart, newCartItem]));
    }
  }
  window.dispatchEvent(new Event('cart'));
  toast.info('1 item added to cart!');
  setOpen(false);
};

export default addToCart;

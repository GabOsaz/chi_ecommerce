import { useEffect, useState } from 'react';

function useGetLSCart() {
  const [cart, setCart] = useState(null);
  useEffect(() => {
    const listenCartChange = () => {
      if (typeof window !== 'undefined') {
        const lsCart = JSON.parse(localStorage.getItem('cart'));
        setCart(lsCart);
      }
    };
    window.addEventListener('cart', listenCartChange);
    return () => {
      const lsCart = JSON.parse(localStorage.getItem('cart'));
      setCart(lsCart);
      window.removeEventListener('cart', listenCartChange);
    };
  }, [setCart]);
  return [cart];
}
export default useGetLSCart;

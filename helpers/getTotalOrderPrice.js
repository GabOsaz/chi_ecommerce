function getTotalOrderPrice(cartPrices) {
  return cartPrices?.length ? cartPrices?.reduce((a, b) => a + b.price, 0).toFixed(2) : '';
}

export default getTotalOrderPrice;

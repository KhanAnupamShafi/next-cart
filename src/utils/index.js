const loadCartFromLocalStorage = () => {
  try {
    const cartItems = localStorage.getItem('cart');
    if (cartItems === null) {
      return undefined;
    }
    return JSON.parse(cartItems);
  } catch (err) {
    console.error('Error loading cart from local storage:', err);
    return undefined;
  }
};

const saveCartToLocalStorage = (cart) => {
  try {
    const cartItems = JSON.stringify(cart);
    localStorage.setItem('cart', cartItems);
  } catch (err) {
    console.error('Error saving cart to local storage:', err);
  }
};

export { loadCartFromLocalStorage, saveCartToLocalStorage };

const loadCartFromLocalStorage = () => {
  try {
    let cartItems = localStorage.getItem('cart');
    if (cartItems === null) {
      // Initialize cart in local storage with an empty array
      localStorage.setItem('cart', JSON.stringify([]));
      cartItems = '[]'; // Set cartItems to an empty array string
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

// Calculate the shipping fee based on the subtotal
const calculateSubtotalAndShipping = (cartItems) => {
  const subtotal = cartItems?.reduce((total, item) => {
    return total + item?.price * item?.quantity;
  }, 0);

  const shippingFee = subtotal >= 1000 ? 5 : 10;

  return {
    subtotal: subtotal,
    shippingFee: shippingFee,
  };
};

// calculate total cart items
export const calculateTotalItems = (cartItems) => {
  const totalCount = cartItems?.reduce((total, item) => {
    return total + item?.quantity;
  }, 0);

  return totalCount;
};

export {
  calculateSubtotalAndShipping,
  loadCartFromLocalStorage,
  saveCartToLocalStorage,
};

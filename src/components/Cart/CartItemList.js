import { useSelector } from 'react-redux';
import EmptyCart from './EmptyCart';
import SingleCartItem from './SingleCartItem';

const CartItemList = () => {
  const items = useSelector((state) => state.cart.items);
  return (
    <ul className="mt-4">
      {items.length > 0 ? (
        items.map((items) => <SingleCartItem key={items.id} cartItem={items} />)
      ) : (
        <EmptyCart />
      )}
    </ul>
  );
};

export default CartItemList;

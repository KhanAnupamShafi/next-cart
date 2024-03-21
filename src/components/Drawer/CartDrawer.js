import { calculateSubtotalAndShipping } from '@/utils';
import { useDispatch, useSelector } from 'react-redux';
import CartItemList from '../Cart/CartItemList';

const CartDrawer = ({ onCloseModal }) => {
  const items = useSelector((state) => state.cart.items);
  const { subtotal, shippingFee } = calculateSubtotalAndShipping(items);
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.stopPropagation();
    onCloseModal();
  };
  const handleClearCart = (e) => {
    e.stopPropagation();
    // clear cart after place order
    dispatch(clearCart());
    onCloseModal();
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="fixed top-0 left-0 h-full w-full bg-[#000000e1] flex justify-center items-center z-40 backdrop-blur-sm"></div>
      <div className="modal fixed top-0 right-0  bg-white  px-1 sm:px-4 sm:py-5 py-2 mt-1 rounded-md text-white opacity-100 z-50">
        <div className="rounded-3xl">
          <div className="">
            <div className="flex items-center justify-between px-6 py-3 bg-gray-100">
              <h3 className="font-semibold text-gray-900">Shopping Cart</h3>
              <button
                onClick={handleClick}
                className="  rounded-lg text-red-400 hover:text-red-500 transition-colors">
                Close
              </button>
            </div>
            <div className="flow-root">
              <CartItemList />
            </div>

            <hr className="mx-0 mt-6 mb-0 h-0 border-r-0 border-b-0 border-l-0 border-t border-solid border-gray-300" />

            {items.length > 0 && (
              <>
                <div className="mt-0 space-y-3 border-t border-b py-8">
                  <div className="flex items-center justify-between">
                    <p className="text-gray-400">Subtotal</p>
                    <p className="text-lg font-semibold text-gray-900">
                      ${subtotal}.00
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p data-inspector="77:25" className="text-gray-400">
                      Shipping
                    </p>
                    <p className="text-lg font-semibold text-gray-900">
                      ${shippingFee}.00
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Total</p>
                  <p className="text-2xl font-semibold text-gray-900">
                    <span
                      data-inspector="83:74"
                      className="text-xs font-normal text-gray-400">
                      USD
                    </span>{' '}
                    {shippingFee + subtotal}.00
                  </p>
                </div>

                <div className="mt-6 text-center">
                  <button
                    onClick={handleClearCart}
                    type="button"
                    className="group inline-flex w-full items-center justify-center rounded-md bg-purple-500 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
                    Place Order
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2">
                      <path
                        data-inspector="90:17"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                    </svg>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;

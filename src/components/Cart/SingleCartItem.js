import {
  addToCart,
  decreaseQuantity,
  removeFromCart,
} from '@/redux/slice/cartSlice';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import PlusSVG from '../../assets/add-circle-line.svg';
import MinusSVG from '../../assets/indeterminate-circle-line.svg';
import NoImage from '../../assets/noimage.png';
import Button from '../shared/Button';

const SingleCartItem = ({ cartItem }) => {
  const { title, quantity, price, images, category, id } = cartItem || {};
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(cartItem));
  };
  const handleDecreaseFromCart = () => {
    dispatch(decreaseQuantity({ itemId: id }));
  };
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(id));
  };
  return (
    <li className="flex flex-col space-y-2 py-3 text-left sm:flex-row sm:space-x-4 sm:space-y-0 border-b-2 ">
      <div className="shrink-0 relative">
        <span className="absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-purple-400 text-sm font-medium text-slate-100 shadow sm:-top-2 sm:-right-2">
          {quantity}
        </span>
        <Image
          className="h-24 w-24 max-w-full rounded-lg object-cover border-2"
          src={images[1] || NoImage}
          width={96}
          height={96}
          alt=""
        />
      </div>

      <div className="relative flex flex-1 flex-col justify-between">
        <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
          <div data-inspector="20:33" className="pr-8 sm:pr-5">
            <p className="text-base font-semibold text-gray-900">{title}</p>
            <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">{category}</p>
          </div>

          <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end ">
            <div className="flex flex-col-reverse justify-center place-items-end text-gray-900 gap-1">
              <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                ${price * quantity}.00
              </p>
              <div className="flex gap-2 ">
                <Button onClick={handleAddToCart}>
                  <Image
                    src={PlusSVG}
                    width={20}
                    height={20}
                    alt="make favourite"
                  />
                </Button>
                <Button onClick={handleDecreaseFromCart}>
                  <Image
                    src={MinusSVG}
                    width={20}
                    height={20}
                    alt="make favourite"
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
          <button
            onClick={handleRemoveFromCart}
            type="button"
            className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                data-inspector="33:127"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
                className=""></path>
            </svg>
          </button>
        </div>
      </div>
    </li>
  );
};

export default SingleCartItem;

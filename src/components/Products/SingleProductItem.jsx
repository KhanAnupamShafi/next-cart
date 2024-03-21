import { addToCart } from '@/redux/slice/cartSlice';
import { openModal } from '@/redux/slice/modalSlice';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import Fav from '../../assets/heart-3-fill.png';
import NoImage from '../../assets/noimage.png';

const SingleProductItem = ({ product }) => {
  const { brand, price, title, images, id } = product || {};
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(openModal());
    dispatch(addToCart(product));
  };

  return (
    <>
      <Link
        href={`/products/${id}`}
        className="group block shadow-lg rounded-xl">
        <div className="flex flex-col h-full pb-4 relative cursor-pointer ">
          <div className="relative w-full p-4 bg-gray-200 transition duration-150 ease-in-out h-[290px] rounded-xl shadow-lg">
            <div className="h-full w-full overflow-hidden  ">
              <Image
                width="0"
                height="0"
                sizes="100vw"
                className="block border border-gray-200 opacity-90 transition duration-300 ease-in-out group-hover:opacity-100 animate-fade-in h-full w-full scale-100 transform object-cover object-center group-hover:scale-110 rounded-xl"
                src={images[1] || NoImage}
                alt="product image"
                style={{ width: '100%', height: '250px' }}
              />
            </div>
            <button
              type="button"
              className="absolute w-full bottom-0 right-0 left-0 opacity-0 cursor-pointer bg-gray-200 text-gray-700 text-sm font-semibold leading-tight text-center py-2 px-0 transition duration-200 ease-in-out group-hover:opacity-100 group-hover:bg-purple-800 group-hover:text-white">
              <span className="flex justify-center items-center ">
                Quick Shop
              </span>
            </button>
          </div>
          <div className="relative h-[150px] text-black px-6 mt-2 flex flex-col justify-between">
            <div>
              <span className="block opacity-75 -mb-1 mt-1 text-xs">
                {brand}
              </span>
              <div className="flex justify-between mt-2">
                <span className="block font-semibold text-xl">{title}</span>
                <span className="bg-white rounded-full text-orange-500 text-sm font-bold px-3 py-2 leading-none flex items-center">
                  ${price}
                </span>
              </div>
            </div>
            <div className="flex justify-between mt-3">
              <button
                type="button"
                className="p-2 rounded-full text-sm font-medium text-gray-700 bg-gray-200  hover:bg-gray-300 focus:outline-none focus:ring focus:border-purple-300">
                <Image src={Fav} width={20} height={20} alt="make favourite" />
              </button>
              <button
                type="button"
                onClick={handleAddToCart}
                className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:ring focus:border-purple-300">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default SingleProductItem;

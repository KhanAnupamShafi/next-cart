import useReactPortal from '@/hooks/usePortal';
import { addToCart } from '@/redux/slice/cartSlice';
import { closeModal, openModal } from '@/redux/slice/modalSlice';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import NoImage from '../../assets/noimage.png';
import CartDrawer from '../Drawer/CartDrawer';

const ProductDetail = ({ product }) => {
  const isOpen = useSelector((state) => state.modal.isOpen);

  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(closeModal());
  };
  const cartContent = isOpen ? (
    <CartDrawer onCloseModal={handleCloseModal} />
  ) : null;

  const cart = useReactPortal(cartContent);

  const handleAddToCart = () => {
    dispatch(openModal());
    dispatch(addToCart(product));
  };

  const { images, title, brand, price, description } = product || {};
  return (
    <section className="overflow-hidden text-gray-600 body-font">
      {cart}
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap mx-auto lg:w-full">
          <div className="items-center hidden w-1/6 grid-cols-1 grid-rows-5 gap-2 pr-4 lg:grid">
            <Image
              src={images[1] || NoImage}
              alt="Image 1"
              width={96}
              height={96}
              className="w-24 h-24 border-2 border-black rounded-md justify-self-end hover:border-gray-400"
            />
            <Image
              src={images[2] || NoImage}
              alt="Image 1"
              width={96}
              height={96}
              className="w-24 h-24 border-2 border-black rounded-md justify-self-end hover:border-gray-400"
            />
            <Image
              src={images[3] || NoImage}
              alt="Image 1"
              width={96}
              height={96}
              className="w-24 h-24 border-2 border-black rounded-md justify-self-end hover:border-gray-400"
            />
            <Image
              src={images[4] || NoImage}
              alt="Image 1"
              width={96}
              height={96}
              className="w-24 h-24 border-2 border-black rounded-md justify-self-end hover:border-gray-400"
            />
          </div>
          <div className="w-full lg:w-3/6 md:w-3/6">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              src={images[0] || NoImage}
              alt="main image"
              objectPosition="center"
              className="rounded object-fit"
              style={{ width: '100%', maxHeight: '600px', height: 'auto' }}
            />
            <div className="grid justify-center grid-cols-5 grid-rows-1 pt-4 lg:hidden">
              <Image
                src={images[1] || NoImage}
                alt="Image 1"
                width={96}
                height={96}
                className="w-12 h-12 border-2 border-black rounded-md justify-self-end hover:border-gray-400"
              />

              <Image
                src={images[2] || NoImage}
                alt="Image 1"
                width={96}
                height={96}
                className="w-12 h-12 border-2 border-black rounded-md justify-self-end hover:border-gray-400"
              />
              <Image
                src={images[3] || NoImage}
                alt="Image 1"
                width={96}
                height={96}
                className="w-12 h-12 border-2 border-black rounded-md justify-self-end hover:border-gray-400"
              />
              <Image
                src={images[4] || NoImage}
                alt="Image 1"
                width={96}
                height={96}
                className="w-12 h-12 border-2 border-black rounded-md justify-self-end hover:border-gray-400"
              />
            </div>
          </div>
          <div className="w-full mt-6 lg:w-2/6 md:w-3/6 lg:pl-10 lg:py-6 lg:mt-0">
            <span className="mb-2 text-base font-semibold text-red-500">
              NEW
            </span>
            <h1 className="mb-2 text-4xl font-bold text-black title-font">
              {title}{' '}
            </h1>
            <h2 className="mb-8 text-xl font-semibold text-black">
              {description}{' '}
            </h2>
            <h2 className="mb-8 text-2xl font-semibold text-black title-font">
              ${price}.00
            </h2>
            <span className="text-base text-black">
              Color: <span className="font-bold">Cosmic Pink</span>
            </span>
            <div className="flex gap-2 mt-4">
              <button className="border border-gray-300 ml-1 bg-[#2b2b2b] rounded-full w-10 h-10 focus:outline-none" />
              <button className="border border-gray-300 ml-1 bg-[#f2ede7] rounded-full w-10 h-10 focus:outline-none" />
              <button className="border border-gray-300 ml-1 bg-[#b4b7c5] rounded-full w-10 h-10 focus:outline-none" />
              <button className="border-2 border-green-300 ml-1 bg-[#caa1a4] rounded-full w-10 h-10 focus:outline-none" />
              <button className="border border-gray-300 ml-1 bg-[#9c9c9e] rounded-full w-10 h-10 focus:outline-none" />
            </div>
            <button
              onClick={handleAddToCart}
              className="block w-full px-6 py-2 mx-auto my-8 text-white uppercase bg-black border border-black rounded-full hover:bg-white hover:text-black">
              Add To Cart
            </button>
            <hr className="my-4" />
            <div className="space-y-4 text-black">
              <div className="flex items-center justify-center">
                <img
                  className="w-6 h-6 mr-4"
                  src="https://www.beatsbydre.com/content/dam/beats/web/common/icons/apple-value-props/free-shipping-icon.png"
                  alt=""
                />
                <div>
                  <h1 className="text-base font-semibold">
                    Free Shipping and Returns
                  </h1>
                  <p className="mt-1 text-base">
                    Enjoy free 2-day delivery and 14-day returns.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  className="w-6 h-6 mr-4"
                  src="https://www.beatsbydre.com/content/dam/beats/web/common/icons/apple-value-props/in-store-pickup-icon.png"
                  alt=""
                />
                <div>
                  <h1 className="text-base font-semibold">In-Store Pickup</h1>
                  <p className="mt-1 text-base">
                    Pick up your Beats at an Apple Store near you.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  className="w-6 h-6 mr-4"
                  src="https://www.beatsbydre.com/content/dam/beats/web/common/icons/apple-value-props/apple-music-icon.png"
                  alt=""
                />
                <div>
                  <h1 className="text-base font-semibold">
                    Free Apple Music Trial
                  </h1>
                  <p className="mt-1 text-base">
                    Get 6 months of access to over 100 million songs, ad-free.*
                  </p>
                </div>
              </div>
            </div>
            <hr className="my-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;

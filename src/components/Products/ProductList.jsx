import useReactPortal from '@/hooks/usePortal';
import { useGetProductsQuery } from '@/redux/slice/apiSlice';
import { useDispatch, useSelector } from 'react-redux';

import { closeModal } from '@/redux/slice/modalSlice';
import { useState } from 'react';
import CartDrawer from '../Drawer/CartDrawer';
import FilterSection from '../Filter/FilterSection';
import Loader from '../Loader/Loader';
import SingleProductItem from './SingleProductItem';

const ProductList = () => {
  const { data, isLoading, isError } = useGetProductsQuery();
  const [searchQuery, setSearchQuery] = useState('');
  console.log(searchQuery);
  const isOpen = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(closeModal());
  };
  const filteredProducts = data?.products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };
  const cartContent = isOpen ? (
    <CartDrawer onCloseModal={handleCloseModal} />
  ) : null;

  const cart = useReactPortal(cartContent);

  let content;
  if (isLoading) {
    content = <Loader />;
  }
  if (!isLoading && isError) {
    content = <p>Something not right!</p>;
  }
  if (!isLoading && !isError && filteredProducts.length === 0) {
    content = <p>Product data empty</p>;
  }
  if (!isLoading && !isError && filteredProducts.length > 0) {
    content = filteredProducts.map((product) => {
      const { id } = product || {};
      return <SingleProductItem key={id} product={product} />;
    });
  }

  return (
    <section>
      <FilterSection searchQuery={searchQuery} onSearch={handleSearch} />

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-6">
        {content}
        {cart}
      </div>
    </section>
  );
};

export default ProductList;

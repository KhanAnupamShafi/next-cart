import ProductDetail from '@/components/Products/ProductDetail';

const ProductDetailPage = ({ data }) => {
  return (
    <main>
      <ProductDetail product={data} />
    </main>
  );
};

export default ProductDetailPage;

export async function getServerSideProps(context) {
  const { id } = context.query;

  // Fetch data from external API
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await res.json();
  // Pass data to the page via props
  return { props: { data } };
}

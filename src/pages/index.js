import ProductList from '@/components/Products/ProductList';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>GhorerBazar.com</title>
        <meta
          property="og:title"
          content="Ghorer Bazar is a Popualar eCommerce site"
          key="title"
        />
      </Head>
      <div className="relative max-w-[1440px] px-10 m-auto py-8  min-h-screen">
        <ProductList />
      </div>
    </>
  );
}

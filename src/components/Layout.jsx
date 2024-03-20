import { Nokora } from 'next/font/google';
import Header from './Header/Header.jsx';

const nokora = Nokora({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

const Footer = () => {
  return <h3>This is Footer</h3>;
};

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={` ${nokora.className}`}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

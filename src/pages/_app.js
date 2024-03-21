import ReduxWrapper from '@/provider/ReduxWrapper';

import Layout from '@/components/Layout';
import '@/styles/globals.css';
import { loadCartFromLocalStorage } from '@/utils';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    loadCartFromLocalStorage();
  }, []);

  return (
    <ReduxWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ReduxWrapper>
  );
}

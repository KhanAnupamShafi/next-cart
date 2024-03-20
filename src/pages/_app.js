import ReduxWrapper from '@/provider/ReduxWrapper';

import Layout from '@/components/Layout';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <ReduxWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ReduxWrapper>
  );
}

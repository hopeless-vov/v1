import 'public/styles/globals.css';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Layout } from '@/components';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Volodymyr Bondarenko</title>
        {/* <link rel="icon" href="/whiffle.svg" /> */}
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.exact({
    pageProps: PropTypes.any,
  }),
};

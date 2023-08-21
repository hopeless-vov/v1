import 'public/styles/globals.css';
import PropTypes from 'prop-types';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

App.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.exact({
    pageProps: PropTypes.any,
  }),
};

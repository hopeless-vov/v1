import PropTypes from 'prop-types';
import { Shining, Header } from '@/components';

export default function Layout({ children }) {
  return (
    <div id='root'>
      <Shining />
      <div className='w-full py-12 px-6 mx-auto my-0 lg:max-w-7xl lg:px-24 lg:py-0 md:py-20 md:px-12'>
        <div className='lg:flex lg:justify-between lg:gap-4'>
          <Header />
          <div id='content' className='py-12 lg:w-6/12 lg:py-24 md:py-20'>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

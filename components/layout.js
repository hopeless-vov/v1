import PropTypes from 'prop-types';
import { Shining } from '@/components';

export default function Layout({ children }) {
  return (
    <div>
      <Shining />
      <div className='w-full py-12 px-6 mx-auto my-0 lg:max-w-7xl lg:px-24 lg:py-0 md:py-20 md:px-12'>
        {children}
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

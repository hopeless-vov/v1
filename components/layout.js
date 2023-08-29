import PropTypes from 'prop-types';
import { Shining, Header } from '@/components';
import {useRouter} from 'next/router';

export default function Layout({ children }) {
  const {pathname} = useRouter()
  console.log('pathname', pathname);
  return (
    <div id='root'>
      <Shining />
      <div className='w-full py-12 px-6 mx-auto my-0 lg:max-w-7xl lg:px-24 lg:py-0 md:py-20 md:px-12'>
        <div className='lg:flex lg:justify-between lg:gap-4'>
          {
            pathname === '/' && <Header />
          }
          {children}
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

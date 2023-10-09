import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Header, LavaLamp } from '@/components';

export default function Layout({ children }) {
  const { pathname } = useRouter();
  const isHomePage = pathname === '/';
  return (
    <div id='root'>
      <LavaLamp />
      <div className='w-full py-12 px-6 mx-auto my-0 lg:max-w-7xl lg:px-24 lg:py-0 md:py-20 md:px-12'>
        <div
          className={isHomePage ? 'lg:flex lg:justify-between lg:gap-4' : ''}
        >
          {isHomePage && <Header />}
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

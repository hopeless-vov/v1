import NavigationItem from './navigationItem';
import PropTypes from 'prop-types';
import { useScrollPosition } from '@/hooks';

export default function Navigation({ navigation }) {
  const { scrollY } = useScrollPosition();

  return (
    <nav className='hidden lg:block'>
      <ul className='mt-16 text-blueGray-500 font-medium text-xs'>
        {navigation &&
          navigation.map((nav, index) => (
            <li key={index} className='flex'>
              <NavigationItem
                nav={nav}
                isActive={scrollY >= nav.top && scrollY <= nav.bottom}
              />
            </li>
          ))}
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  navigation: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      top: PropTypes.number,
      bottom: PropTypes.number,
    }),
  ),
};

Navigation.defaultProps = {
  navigation: null,
};

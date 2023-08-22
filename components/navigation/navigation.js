import PropTypes from 'prop-types';
import NavigationList from './navigationItem'

export default function Navigation({ navigationList }) {
  return (
    <nav className='hidden lg:block'>
      <ul className='mt-16 text-blueGray-500 font-medium text-xs'>
        {navigationList &&
          navigationList.map((nav, index) => (
            <li key={index} className='flex'>
              <NavigationList nav={nav}/>
            </li>
          ))}
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  navigationList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ),
};

Navigation.defaultProps = {
  navigationList: null,
};

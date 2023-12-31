import PropTypes from 'prop-types';

export default function NavigationItem({ nav }) {
  const { name, url, isActive } = nav;
  return (
    <a
      href={url}
      className={`flex items-center py-3 group uppercase tracking-widest ${
        isActive ? 'navigation-active' : ''
      }`}
    >
      <span className='nav-indicator h-[1px] w-8 bg-blueGray-500 mr-4 group-hover:w-16 group-hover:bg-white-500 transition-all' />
      <span className='nav-text group-hover:text-white-500'>{name}</span>
    </a>
  );
}

NavigationItem.propTypes = {
  nav: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
  }),
};

NavigationItem.defaultProps = {
  nav: null,
};

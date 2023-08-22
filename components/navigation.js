import PropTypes from 'prop-types';

export default function Navigation({ navigationList }) {
  return (
    <nav className='hidden lg:block'>
      <ul className='mt-16 text-blueGray-500 font-medium text-xs'>
        {navigationList &&
          navigationList.map(({ name, url }, index) => (
            <li key={index} className='flex'>
              <a
                href={url}
                className='flex items-center py-3 group uppercase tracking-widest'
              >
                <span className='h-[1px] w-8 bg-blueGray-500 mr-4 group-hover:w-16 group-hover:bg-white-500 transition-all' />
                <span className='group-hover:text-white-500'>{name}</span>
              </a>
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

import PropTypes from 'prop-types';
import { Icon } from '@/components/icons';

export default function Social({ socialList }) {
  return (
    <ul className='mt-8 flex items-center lala'>
      {socialList &&
        socialList.map(({ name, url }, index) => (
          <li key={index} className='flex mr-5'>
            <a
              href={url}
              aria-label={name}
              target='_blank'
              rel='noreferrer'
              className='w-6 text-blueGray-500 hover:translate-y-[-3px] transition-all hover:text-teal-300'
            >
              <Icon name={name} />
            </a>
          </li>
        ))}
    </ul>
  );
}

Social.propTypes = {
  socialList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ),
};

Social.defaultProps = {
  socialList: null,
};

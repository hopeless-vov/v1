import SocialListItem from './socialListItem';
import PropTypes from 'prop-types';

export default function SocialList({ socialList }) {
  return (
    <ul className='mt-8 flex items-center lala'>
      {socialList &&
        socialList.map((social, index) => (
          <li key={index} className='flex mr-5'>
            <SocialListItem social={social} />
          </li>
        ))}
    </ul>
  );
}

SocialList.propTypes = {
  socialList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ),
};

SocialList.defaultProps = {
  socialList: null,
};

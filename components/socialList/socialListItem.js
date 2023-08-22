import PropTypes from 'prop-types';
import { Icon } from '@/components/icons';

export default function SocialListItem({ social }) {
  const { name, url } = social;
  return (
    <a
      href={url}
      aria-label={name}
      target='_blank'
      rel='noreferrer'
      className='w-6 text-blueGray-500 hover:translate-y-[-3px] transition-all hover:text-teal-300'
    >
      <Icon name={name} />
    </a>
  );
}

SocialListItem.propTypes = {
  social: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};

SocialListItem.defaultProps = {
  social: null,
};

import PropTypes from 'prop-types';
import { Icon } from '@/components/icons';

export default function IconLink({ className, text, icon, url }) {
  const arrowStyling =
    icon === 'Arrow'
      ? 'transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 motion-reduce:transition-none ml-1 translate-y-px rotate-[-45deg]'
      : 'w-4 ml-1';
  return (
    <a
    href={url}
    target='_blank'
    rel='noreferrer'
    className={`inline-flex transition-all hover:text-teal-300 focus-visible:text-teal-300 items-center group/link ${className}`}
  >
    {text}
    <span className={arrowStyling}>
      <Icon name={icon} />
    </span>
  </a>
  );
}

IconLink.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

IconLink.defaultProps = {
  className: '',
  text: '',
  icon: 'Arrow',
  url: '/'
};

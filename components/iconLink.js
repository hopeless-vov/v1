import { Icon } from '@/components/icons';
import PropTypes from 'prop-types';

export default function IconLink({className, text, icon}) {
  const arrowStyling = icon === 'Arrow' ? 'transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 motion-reduce:transition-none ml-1 translate-y-px rotate-[-45deg]' : ''
  return (
    <a
      href={'/'}
      target='_blank'
      rel='noreferrer'
      className={`inline-flex transition-all hover:text-teal-300 focus-visible:text-teal-300 items-center group/link ${className}`}
    >
      {/* text-slate-200 */}
      {text}
      <span className={arrowStyling}>
        <Icon name={icon} />
      </span>
    </a>
  );
}

IconLink.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

IconLink.defaultProps = {
  className: '',
  text: '',
  icon: 'Arrow'
};

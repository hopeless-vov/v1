import PropTypes from 'prop-types';

export default function Tag({ tag }) {
  return (
    <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
      {tag}
    </div>
  );
}

Tag.propTypes = {
  tag: PropTypes.string.isRequired
};

Tag.defaultProps = {
  tag: null,
};

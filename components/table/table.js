import PropTypes from 'prop-types';

export default function Table({ children, className }) {
  return (
    <table className={`w-full border-collapse text-left ${className}`}>
      {children}
    </table>
  );
}

Table.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Table.defaultProps = {
  className: '',
};

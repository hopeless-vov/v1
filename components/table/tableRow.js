import PropTypes from 'prop-types';

export default function TableRow({ children, className }) {
  return (
    <tr
      className={`border-b border-slate-300/10 last:border-none ${className}`}
    >
      {children}
    </tr>
  );
}

TableRow.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

TableRow.defaultProps = {
  className: '',
};

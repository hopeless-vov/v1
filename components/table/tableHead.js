import PropTypes from 'prop-types';

export default function TableHead({ children, className }) {
  return (
    <thead
      className={`sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur ${className}`}
    >
      <tr>{children}</tr>
    </thead>
  );
}

TableHead.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

TableHead.defaultProps = {
  className: '',
};

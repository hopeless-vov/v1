import PropTypes from "prop-types";

export default function TableColumn({ children, className }) {
    return <td className={`py-4 pr-4 align-top ${className}`}>{children}</td>;
}

TableColumn.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

TableColumn.defaultProps = {
  className: ''
}

import PropTypes from 'prop-types';
import { Shining } from '@/components';

export default function Layout({ children }) {
  return (
    <div>
      <Shining />
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

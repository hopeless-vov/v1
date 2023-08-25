import PropTypes from 'prop-types';
import {
  IconGitHub,
  IconInstagram,
  IconLinkedin,
  IconTwitter,
  IconLink,
} from '@/components/icons';

const Icon = ({ name }) => {
  switch (name) {
    case 'GitHub':
      return <IconGitHub />;
    case 'Instagram':
      return <IconInstagram />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Twitter':
      return <IconTwitter />;
    case 'Link':
      return <IconLink />;
    default:
      return <IconLinkedin />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;

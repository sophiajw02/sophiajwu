import PropTypes from 'prop-types';

import {
  IconGitHub,
  IconLinkedin,
  IconEmail,
} from '@components/icons';

const Icon = ({ name }) => {
  switch (name) {
    case 'GitHub':
      return <IconGitHub />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Email':
      return <IconEmail />;
    default:
        return null;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;

import PropTypes from 'prop-types';

import {
  IconGitHub,
  IconLinkedin,
  IconEmail,
  IconLink,
} from '@components/icons';

const Icon = ({ name }) => {
  switch (name) {
    case 'GitHub':
      return <IconGitHub />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Email':
      return <IconEmail />;
    case 'Link':
      return <IconLink />;
    default:
        return null;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;

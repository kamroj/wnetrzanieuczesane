import React from 'react';
import PropTypes from 'prop-types';
import { HeaderImage, HeaderTitle } from './PageHeader.styles';

function PageHeader({ title, backgroundImage }) {
  return (
    <HeaderImage $backgroundImage={backgroundImage}>
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderImage>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string
};

export default PageHeader;
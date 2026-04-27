import React from 'react';
import PropTypes from 'prop-types';
import { HeaderImage, HeaderTitle } from './PageHeader.styles';
import { getOptimizedImageUrl } from '../../SanityClient';

function getImageValue(image, width) {
  if (!image) return undefined;
  if (typeof image === 'string') return image;
  return getOptimizedImageUrl(image.asset || image, { width });
}

function PageHeader({ title, backgroundImage }) {
  const image = getImageValue(backgroundImage, 1800);
  const placeholder = backgroundImage?.metadata?.lqip || backgroundImage?.asset?.metadata?.lqip;

  return (
    <HeaderImage image={image} placeholder={placeholder}>
      <HeaderTitle>{title.toUpperCase()}</HeaderTitle>
    </HeaderImage>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

export default PageHeader;
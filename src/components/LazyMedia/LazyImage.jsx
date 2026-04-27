import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  ImageFrame,
  LazyImg,
  Placeholder,
  Spinner,
} from './LazyImage.styles';

function LazyImage({
  src,
  placeholderSrc,
  alt,
  className,
  eager = false,
  objectFit = 'cover',
  objectPosition = 'center',
  showSpinner = true,
  onLoad,
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = (event) => {
    setIsLoaded(true);
    onLoad?.(event);
  };

  return (
    <ImageFrame className={className} {...props}>
      {placeholderSrc && (
        <Placeholder
          aria-hidden="true"
          $src={placeholderSrc}
          $isLoaded={isLoaded}
        />
      )}
      {showSpinner && !isLoaded && <Spinner aria-hidden="true" />}
      {src && (
        <LazyImg
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={eager ? 'high' : 'auto'}
          onLoad={handleLoad}
          $isLoaded={isLoaded}
          $objectFit={objectFit}
          $objectPosition={objectPosition}
        />
      )}
    </ImageFrame>
  );
}

LazyImage.propTypes = {
  src: PropTypes.string,
  placeholderSrc: PropTypes.string,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  eager: PropTypes.bool,
  objectFit: PropTypes.string,
  objectPosition: PropTypes.string,
  showSpinner: PropTypes.bool,
  onLoad: PropTypes.func,
};

export default LazyImage;
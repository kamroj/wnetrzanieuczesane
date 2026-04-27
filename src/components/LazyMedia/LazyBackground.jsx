import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import {
  BackgroundFrame,
  BackgroundLayer,
  BackgroundPlaceholder,
  BackgroundSpinner,
} from './LazyBackground.styles';

function LazyBackground({
  image,
  placeholder,
  overlay = 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7))',
  children,
  className,
  showSpinner = true,
}) {
  const [isLoaded, setIsLoaded] = useState(!image);

  useEffect(() => {
    if (!image) {
      setIsLoaded(true);
      return undefined;
    }

    setIsLoaded(false);
    const img = new Image();
    img.src = image;
    img.onload = () => setIsLoaded(true);
    img.onerror = () => setIsLoaded(true);

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [image]);

  const background = useMemo(
    () => [overlay, image ? `url(${image})` : undefined].filter(Boolean).join(', '),
    [image, overlay]
  );

  const placeholderBackground = useMemo(
    () => [overlay, placeholder ? `url(${placeholder})` : undefined].filter(Boolean).join(', '),
    [placeholder, overlay]
  );

  return (
    <BackgroundFrame className={className}>
      {placeholder && (
        <BackgroundPlaceholder
          aria-hidden="true"
          $background={placeholderBackground}
          $isLoaded={isLoaded}
        />
      )}
      {showSpinner && !isLoaded && <BackgroundSpinner aria-hidden="true" />}
      <BackgroundLayer aria-hidden="true" $background={background} $isLoaded={isLoaded} />
      {children}
    </BackgroundFrame>
  );
}

LazyBackground.propTypes = {
  image: PropTypes.string,
  placeholder: PropTypes.string,
  overlay: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  showSpinner: PropTypes.bool,
};

export default LazyBackground;
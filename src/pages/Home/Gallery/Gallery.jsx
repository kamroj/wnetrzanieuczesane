// src/components/Home/Gallery/Gallery.jsx
import React from "react";
import PropTypes from "prop-types";
import { GalleryContainer, Logo, ImageWrapper, FadingImage } from "./Gallery.styles";
import logo from "../../../assets/images/logo-gold.png";
import { GridLine, GridLines } from "../../../components/GridLines/GridLines.styles";
import { useImageTransition } from "../../../hooks/useImageTransition";

function Gallery({ images }) {
  const { currentIndex, nextIndex, isTransitioning } = useImageTransition(images);

  return (
    <GalleryContainer>
      <GridLines className="grid-lines-padding-menu line-on-very-top">
        <GridLine />
      </GridLines>
      <ImageWrapper>
        <FadingImage 
          src={images[currentIndex].original} 
          placeholderSrc={images[currentIndex].placeholder}
          alt="" 
          eager
          showSpinner={false}
          $active={true} 
          $transitioning={isTransitioning} 
        />
        <FadingImage 
          src={images[nextIndex].original} 
          placeholderSrc={images[nextIndex].placeholder}
          alt="" 
          showSpinner={false}
          $active={false} 
          $transitioning={isTransitioning} 
        />
      </ImageWrapper>
      <Logo src={logo} alt="dimensions" />
    </GalleryContainer>
  );
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      original: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
        placeholder: PropTypes.string,
    })
  ).isRequired,
};

export default Gallery;
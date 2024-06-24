// src/components/Home/Gallery/Gallery.jsx
import React from "react";
import PropTypes from "prop-types";
import { GalleryContainer, Logo, StyledGallery } from "./Gallery.styles";
import logo from "../../../assets/images/logo-gold.png";

import "../Gallery.scss";
import { GridLine, GridLines } from "../GridLines/GridLines.styles";

function Gallery({ images }) {
  return (
    <GalleryContainer>
      <GridLines className="grid-lines-padding-menu line-on-very-top">
        <GridLine/>
      </GridLines>
      <StyledGallery
        items={images}
        autoPlay
        slideInterval={5000}
        showNav={false}
        showThumbnails={false}
        additionalClass="gallery-container_gallery"
        slideDuration={0}
        disableSwipe
        showFullscreenButton={false}
        showPlayButton={false}
      />
      <Logo src={logo} alt="dimensions" />
    </GalleryContainer>
  );
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      original: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Gallery;

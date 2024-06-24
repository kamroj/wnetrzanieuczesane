// src/components/Home/Gallery/Gallery.styles.js
import styled from 'styled-components';
import ReactImageGallery from 'react-image-gallery';

export const GalleryContainer = styled.div`
  position: relative;
  background: black;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const GalleryWrapper = styled.div`
  width: 100%;
  height: 100vh;
  filter: brightness(40%);
`;

export const StyledGallery = styled(ReactImageGallery)`
  &.gallery-container_gallery {
    width: 100%;
    height: 100vh;
    filter: brightness(40%);
  }

  .image-gallery-slide img {
    min-height: 100vh;
    object-fit: cover;
    background-size: cover;
  }
`;

export const Logo = styled.img`
  opacity: 0.6;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: calc(100vh * 0.4);
  width: calc(100% * 0.4);
  object-fit: contain;
  pointer-events: none;

  @media (max-width: ${props => props.theme.breakpoints.phase2}) {
    height: calc(100vh * 0.6);
    width: calc(100% * 0.6);
  }
`;
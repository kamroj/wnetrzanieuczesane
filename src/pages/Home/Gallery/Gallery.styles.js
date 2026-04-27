import styled, { css } from 'styled-components';
import LazyImage from '../../../components/LazyMedia/LazyImage';

export const GalleryContainer = styled.div`
  position: relative;
  background: black;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const FadingImage = styled(LazyImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 1s ease-in-out;
  opacity: ${props => props.$active ? 1 : 0};
  z-index: ${props => props.$active ? 2 : 1};

  img {
    filter: brightness(40%);
  }

  ${props => props.$transitioning && !props.$active && css`
    opacity: 1;
    z-index: 3;
  `}
`;

export const Logo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 30vh;
  object-fit: contain;
  pointer-events: none;
  z-index: 4;
  opacity: 0.6;

  @media (max-width: ${props => props.theme.breakpoints.phase2}) {
    height: 60vh;
    width: 60%;
  }
`;
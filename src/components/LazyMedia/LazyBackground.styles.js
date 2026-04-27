import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

export const BackgroundFrame = styled.div`
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors?.black || '#000'};
`;

const backgroundLayerStyles = `
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
`;

export const BackgroundPlaceholder = styled.div`
  ${backgroundLayerStyles}
  background-image: ${({ $background }) => $background};
  filter: blur(18px);
  transform: scale(1.08);
  opacity: ${({ $isLoaded }) => ($isLoaded ? 0 : 1)};
  transition: opacity 0.35s ease;
  z-index: 0;
`;

export const BackgroundLayer = styled.div`
  ${backgroundLayerStyles}
  background-image: ${({ $background }) => $background};
  opacity: ${({ $isLoaded }) => ($isLoaded ? 1 : 0)};
  transition: opacity 0.35s ease;
  z-index: 1;
`;

export const BackgroundSpinner = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 32px;
  height: 32px;
  border: 2px solid rgba(218, 165, 32, 0.25);
  border-top-color: ${({ theme }) => theme.colors?.golden || 'rgb(218, 165, 32)'};
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: ${spin} 0.8s linear infinite;
  z-index: 2;
`;
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

export const ImageFrame = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors?.mainLight || '#f1ebeb'};
`;

export const Placeholder = styled.div`
  position: absolute;
  inset: 0;
  background-image: ${({ $src }) => ($src ? `url(${$src})` : 'none')};
  background-size: cover;
  background-position: center;
  filter: blur(18px);
  transform: scale(1.08);
  opacity: ${({ $isLoaded }) => ($isLoaded ? 0 : 1)};
  transition: opacity 0.35s ease;
`;

export const Spinner = styled.span`
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

export const LazyImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: ${({ $objectFit }) => $objectFit};
  object-position: ${({ $objectPosition }) => $objectPosition};
  opacity: ${({ $isLoaded }) => ($isLoaded ? 1 : 0)};
  transition: opacity 0.35s ease;
`;
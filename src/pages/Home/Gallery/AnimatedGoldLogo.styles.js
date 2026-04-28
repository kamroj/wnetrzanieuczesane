import styled from "styled-components";

export const LogoGlow = styled.div`
  position: relative;
  height: 30vh;
  width: max-content;
  max-width: 88vw;
  opacity: 0.62;
  isolation: isolate;

  &::before,
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    -webkit-mask-image: url(${props => props.$logoUrl});
    mask-image: url(${props => props.$logoUrl});
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-position: center;
    mask-position: center;
    -webkit-mask-size: contain;
    mask-size: contain;
  }

  &::before {
    z-index: 1;
    background: linear-gradient(
      105deg,
      transparent 0%,
      transparent 34%,
      rgba(255, 244, 190, 0.15) 43%,
      rgb(255, 238, 155) 50%,
      rgba(196, 161, 74, 0.32) 57%,
      transparent 66%,
      transparent 100%
    );
    background-size: 240% 100%;
    mix-blend-mode: screen;
    filter: blur(0.8px) drop-shadow(0 0 8px rgba(240, 213, 123, 0.7));
    animation: logoSweepGlow 5s ease-in-out infinite;
  }

  &::after {
    z-index: -1;
    background: rgba(216, 180, 84, 0.58);
    filter: blur(9px);
    opacity: 0.28;
    animation: logoAmbientGlow 4.8s ease-in-out infinite;
  }

  @media (max-width: ${props => props.theme.breakpoints.phase2}) {
    height: 60vh;
    width: 60vw;
  }

  @media (prefers-reduced-motion: reduce) {
    &::before,
    &::after {
      animation: none;
    }
  }

  @keyframes logoSweepGlow {
    0%,
    18% {
      background-position: 145% 0;
      opacity: 0;
    }
    30% {
      opacity: 0.9;
    }
    58% {
      opacity: 0.78;
    }
    82%,
    100% {
      background-position: -55% 0;
      opacity: 0;
    }
  }

  @keyframes logoAmbientGlow {
    0%,
    100% {
      opacity: 0.12;
    }
    48% {
      opacity: 0.3;
    }
  }
`;

export const LogoImage = styled.img`
  display: block;
  height: 100%;
  width: auto;
  object-fit: contain;
  filter: drop-shadow(0 0 4px rgba(196, 161, 74, 0.16));

  @media (max-width: ${props => props.theme.breakpoints.phase2}) {
    width: 100%;
  }
`;
import Slider from "react-slick";
import styled, { keyframes } from "styled-components";
import backgroundImage from "../../../assets/images/living-room.jpg";

const SlickSlider = Slider.default ?? Slider;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOutDown = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(20px);
  }
`;

export const OpinionsSection = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.34), rgba(0, 0, 0, 0.74)),
    url(${backgroundImage});
  background-size: cover;
  background-position: center;
  min-height: 520px;
  width: 100%;
  padding: 80px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.phase2}) {
    min-height: auto;
    padding: 60px 0;
  }
`;

export const OpinionsContainer = styled.div`
  position: relative;
  max-width: 760px;
  width: 100%;
  padding: 0 40px;
  z-index: 30;

  @media (max-width: ${({ theme }) => theme.breakpoints.phase2}) {
    padding: 0 24px;
  }
`;

export const OpinionsTitle = styled.h2`
  font-size: 2.45rem;
  font-weight: 300;
  letter-spacing: 0.04em;
  text-align: center;
  margin: 0 0 42px;
  color: ${({ theme }) => theme.colors.mainLight};
  text-shadow: 0 4px 18px rgba(0, 0, 0, 0.35);

  @media (max-width: ${({ theme }) => theme.breakpoints.phase2}) {
    font-size: 2rem;
    margin-bottom: 32px;
  }
`;

export const OpinionCard = styled.div`
  background: #ffffffb5;
  backdrop-filter: blur(3px);
  border-radius: 12px;
  padding: 52px 58px 44px;
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.28),
    inset 0 0 0 1px rgba(218, 165, 32, 0.24);
  transition: all 0.3s ease;
  border: 1px solid rgba(218, 165, 32, 0.65);
  position: relative;
  min-height: 250px;
  display: flex;
  align-items: center;
  overflow: hidden;

  &::before {
    content: "“";
    position: absolute;
    left: 28px;
    bottom: 16px;
    color: rgba(174, 125, 16, 0.36);
    font-family: Georgia, serif;
    font-size: 4.8rem;
    line-height: 1;
    z-index: 0;
  }

  &::after {
    content: "”";
    position: absolute;
    top: 16px;
    right: 28px;
    color: rgba(174, 125, 16, 0.36);
    font-family: Georgia, serif;
    font-size: 4.8rem;
    line-height: 1;
    pointer-events: none;
    z-index: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phase2}) {
    &::before,
    &::after {
      font-size: 4rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phase1}) {
    &::before {
      left: 20px;
      bottom: 12px;
    }

    &::after {
      top: 12px;
      right: 20px;
    }
  }

  & > * {
    position: relative;
    z-index: 1;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  @media print {
    box-shadow: none;
  }

  @media (forced-colors: active) {
    border-color: CanvasText;
  }

  @media (hover: hover) {
    &:hover {
      transform: translateY(-2px);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phase2}) {
    min-height: 220px;
    padding: 38px 30px 34px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phase1}) {
    padding: 34px 24px 30px;
  }
`;

export const OpinionContent = styled.div`
  position: relative;
  width: 100%;
  animation: ${fadeInUp} 0.5s ease-in-out;

  .slick-active & {
    animation: ${fadeInUp} 0.5s ease-in-out;
  }

  .slick-slide:not(.slick-active) & {
    animation: ${fadeOutDown} 0.5s ease-in-out;
  }
`;

export const OpinionText = styled.blockquote`
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 28px;
  font-size: 1.08rem;
  position: relative;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.phase1}) {
    font-size: 1rem;
    line-height: 1.55;
  }
`;

export const OpinionAuthor = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.black};
  text-align: right;
  font-weight: 600;
  margin: 0;
  position: relative;
  z-index: 1;

  &::before {
    content: "— ";
  }
`;

export const StyledSlider = styled(SlickSlider)`
  .slick-dots {
    display: none !important;
  }

  &.slick-slider {
    padding: 10px;
  }
`;

export const OpinionsNav = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 28px;
`;

export const NavButton = styled.button`
  width: 42px;
  height: 42px;
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(224, 181, 79, 0.57);
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.golden};
  font-size: 1.2rem;
  line-height: 1;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.golden};
    background-color: rgba(218, 165, 32, 0.12);
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.golden};
    outline-offset: 3px;
  }
`;

export const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 22px;
`;

export const CustomDot = styled.button`
  width: ${({ $active }) => ($active ? "24px" : "8px")};
  height: 8px;
  border-radius: 50%;
  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.golden : theme.colors.goldenLight};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
  border-radius: 999px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.golden};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.golden};
    outline-offset: 4px;
  }

  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

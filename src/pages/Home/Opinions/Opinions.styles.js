// Opinions.styles.js
import Slider from "react-slick";
import styled, { keyframes } from "styled-components";
import backgroundImage from "../../../assets/images/living-room.jpg";

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
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)),
    url(${backgroundImage});
  background-size: cover;
  background-position: center;
  height: 70vh;
  width: 100%;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

export const OpinionsContainer = styled.div`
  position: relative;
  max-width: 500px;
  width: 100%;
  padding: 40px;
  z-index: 30;

  @media (max-width: ${({ theme }) => theme.breakpoints.phase1}) {
    padding: 40px 15px;
  }
`;

export const OpinionsTitle = styled.div`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 50px;
  color: ${({ theme }) => theme.colors.mainLight};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: ${({ theme }) => theme.breakpoints.phase1}) {
    font-size: 2rem;
  }
`;

export const OpinionCard = styled.div`
  background-color: ${({ theme }) => `${theme.colors.mainLight}CC`};
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 2px solid rgb(218, 165, 32);
  position: relative;
  min-height: 200px;
  display: flex;
  align-items: center;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.phase1}) {
    padding: 20px;
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

export const OpinionText = styled.div`
  font-size: 1.2rem;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.darkMain};
  margin-bottom: 20px;
  position: relative;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.phase1}) {
    font-size: 1rem;
  }
`;

export const OpinionAuthor = styled.div`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.mediumMain};
  text-align: right;
  font-weight: bold;
`;

export const StyledSlider = styled(Slider)`
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
  margin-top: 30px;
`;

export const NavButton = styled.button`
  background-color: transparent;
  border: 1px solid #e0b54f91;
  color: ${({ theme }) => theme.colors.golden};
  font-size: 1.2rem;
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.golden};
  }
`;

export const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const CustomDot = styled.button`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.golden : theme.colors.goldenLight};
  border: none;
  margin: 0 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;

  &:hover {
    background-color: ${({ theme }) => theme.colors.golden};
  }

  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

import styled, { keyframes } from "styled-components";
import backgroundImage from '../../../assets/images/home-par.jpg'; // Dodaj ścieżkę do swojego zdjęcia

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

export const OpinionsSection = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage});
  background-size: cover;
  background-position: center;
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
`;

export const OpinionsTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 50px;
  color: ${({ theme }) => theme.colors.mainLight};
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);

  @media (max-width: ${({ theme }) => theme.breakpoints.phase1}) {
    font-size: 2rem;
  }
`;

export const OpinionCard = styled.div`
  background-color: ${({ theme }) => `${theme.colors.mainLight}CC`}; // CC na końcu dodaje 80% przezroczystości
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  animation: ${({ isAnimating }) => isAnimating ? fadeOut : fadeIn} 0.5s ease-in-out;
  border: 2px solid rgb(218,165,32);
`;

export const QuoteMark = styled.span`
  font-size: 6rem;
  color: ${({ theme }) => theme.colors.golden};
  position: absolute;
  top: -20px;
  left: 20px;
  opacity: 0.2;
`;

export const OpinionText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.darkMain};
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
`;

export const OpinionAuthor = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.mediumMain};
  text-align: right;
  font-weight: bold;
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

export const DotIndicator = styled.button`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: ${({ active, theme }) => active ? theme.colors.golden : theme.colors.goldenLight};
  border: none;
  margin: 0 3px;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;

  &:hover {
    background-color: ${({ theme }) => theme.colors.golden};
  }

  &::after {
    content: '';
    display: block;
    padding-bottom: 100%; 
  }
`;

// src/pages/Portfolio/Portfolio.styles.js
import styled from 'styled-components';
import topImg from "../../assets/images/portfolio/top-img.jpg";

export const PortfolioContainer = styled.div`
  width: 100%;
`;

export const HeaderImage = styled.div`
  width: 100%;
  height: 30vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${topImg}); 
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: ${({ theme }) => theme.borders.borderGold};
`;

export const HeaderTitle = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.golden};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.phase4}) {
    font-size: 2.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phase3}) {
    font-size: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phase2}) {
    font-size: 1.5rem;
  }
`;

export const ProjectsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 2rem;
`;

export const ProjectItem = styled.div`
  background-color: #ffffff;
  width: 100%;
  max-width: 1000px;
  margin-bottom: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.golden};
  transition: transform 0.3s ease;
  overflow: hidden;

  &:hover {
    transform: scale(1.02);
  }

  a {
    display: flex;
    width: 100%;
    text-decoration: none;
    color: inherit;
    cursor: pointer;

    @media (max-width: ${({ theme }) => theme.breakpoints.phase3}) {
      flex-direction: column;
    }
  }
`;

export const ProjectImage = styled.img`
  width: 40%;
  object-fit: cover;

  @media (max-width: ${({ theme }) => theme.breakpoints.phase3}) {
    width: 100%;
    height: 200px;
  }
`;

export const ProjectDetails = styled.div`
  padding: 1rem;
  width: 60%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.breakpoints.phase3}) {
    width: 100%;
  }
`;

export const ProjectTitle = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
  overflow-wrap: break-word;
  word-wrap: break-word;

  @media (max-width: ${({ theme }) => theme.breakpoints.phase4}) {
    font-size: 1.3rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phase3}) {
    font-size: 1.2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phase2}) {
    font-size: 1.1rem;
  }
`;

export const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: 1rem;
  margin: 0;
  line-height: 1.5;
  overflow-wrap: break-word;
  word-wrap: break-word;

  @media (max-width: ${({ theme }) => theme.breakpoints.phase4}) {
    font-size: 0.9rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phase3}) {
    font-size: 0.85rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phase2}) {
    font-size: 0.8rem;
  }
`;

export const PaginationContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PaginationButton = styled.button`
  margin: 0.5rem 0.2rem;
  padding: 0.5rem 1rem;
  background-color: ${({ $active, theme }) => $active ? theme.colors.golden : theme.colors.white};
  color: ${({ $active, theme }) => $active ? theme.colors.white : theme.colors.black};
  border: 1px solid ${({ theme }) => theme.colors.golden};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.goldenLight};
  }

  &:disabled {
    cursor: auto;
    opacity: 0.5;
  }
`;

export const PaginationEllipsis = styled.span`
  margin: 0 0.5rem;
`;
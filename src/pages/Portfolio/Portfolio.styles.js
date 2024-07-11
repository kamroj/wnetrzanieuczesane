// src/pages/Portfolio/Portfolio.styles.js
import styled from 'styled-components';

export const PortfolioContainer = styled.div`
  width: 100%;
`;

export const HeaderImage = styled.div`
  width: 100%;
  height: 40vh;
  background-image: url('../../../assets/images/home-par2.jpg'); // Dodaj odpowiedni URL
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: ${({theme}) => theme.borders.borderGold};
`;

export const HeaderTitle = styled.h1`
  color: ${({theme}) => theme.colors.white};
  font-size: 3rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
`;

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

export const ProjectItem = styled.div`
  display: flex;
  width: 100%;
  max-width: 1000px;
  margin-bottom: 2rem;
  border: 1px solid ${({theme}) => theme.colors.golden};
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: ${({theme}) => theme.breakpoints.phase3}) {
    flex-direction: column;
  }
`;

export const ProjectImage = styled.img`
  width: 40%;
  object-fit: cover;

  @media (max-width: ${({theme}) => theme.breakpoints.phase3}) {
    width: 100%;
    height: 200px;
  }
`;

export const ProjectDetails = styled.div`
  padding: 1rem;
  width: 60%;

  @media (max-width: ${({theme}) => theme.breakpoints.phase3}) {
    width: 100%;
  }
`;

export const ProjectTitle = styled.h2`
  color: ${({theme}) => theme.colors.black};
  margin-bottom: 0.5rem;
`;

export const ProjectDescription = styled.p`
  color: ${({theme}) => theme.colors.black};
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

export const PaginationButton = styled.button`
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  background-color: ${({active, theme}) => active ? theme.colors.golden : theme.colors.white};
  color: ${({active, theme}) => active ? theme.colors.white : theme.colors.black};
  border: 1px solid ${({theme}) => theme.colors.golden};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({theme}) => theme.colors.goldenLight};
  }
`;
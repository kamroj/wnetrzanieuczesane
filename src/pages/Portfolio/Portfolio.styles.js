import styled from 'styled-components';

export const PortfolioContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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
    min-height: 300px;
    max-height: 305px;

    @media (max-width: ${({ theme }) => theme.breakpoints.phase3}) {
      flex-direction: column;
      height: auto;
      min-height: unset;
      max-height: unset;
    }
  }
`;

export const ProjectImage = styled.img`
  width: 40%;
  /* height: 100%; */
  object-fit: cover;
  object-position: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.phase3}) {
    width: 100%;
    height: 200px;
  }
`;

export const ProjectDetails = styled.div`
  padding: 1.5rem;
  width: 60%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 100%;
  overflow-y: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.phase3}) {
    width: 100%;
    height: auto;
  }
`;

export const ProjectTitle = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 1.5rem 0;
  font-size: 1.5rem;
  font-weight: 600;
  white-space: normal;
  word-break: break-word;

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

export const ProjectKeyInfo = styled.div`
  display: grid;
  gap: 0.75rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.phase2}) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
`;

export const KeyInfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.goldenLight};
  font-size: 0.9rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.phase4}) {
    font-size: 0.85rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phase2}) {
    font-size: 0.8rem;
  }
`;

export const KeyInfoLabel = styled.span`
  color: ${({ theme }) => theme.colors.golden};
`;

export const KeyInfoValue = styled.span`
  color: ${({ theme }) => theme.colors.black};
  text-align: right;
`;

export const PaginationContainer = styled.nav`
  position: relative;
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
import styled from 'styled-components';

export const OpinionsSection = styled.section`
  background-color: ${({ theme }) => theme.colors.mainLight};
  padding: 80px 0;
  margin-bottom: 80px;
`;

export const OpinionsContainer = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.phase4};
  margin: 0 auto;
  padding: 0 20px;
`;

export const OpinionsTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 50px;
  color: ${({ theme }) => theme.colors.darkMain};

  @media (max-width: ${({ theme }) => theme.breakpoints.phase1}) {
    font-size: 2rem;
  }
`;

export const OpinionsItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  @media (max-width: ${({ theme }) => theme.breakpoints.phase2}) {
    flex-direction: column-reverse;
  }
`;

export const OpinionsContent = styled.div`
  flex: 1;
  padding: 40px;
`;

export const OpinionsText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.darkMain};
  margin-bottom: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.phase1}) {
    font-size: 1rem;
  }
`;

export const OpinionsAuthor = styled.div``;

export const AuthorName = styled.h3`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.darkestMain};
  margin-bottom: 5px;
`;

export const AuthorTitle = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.mediumMain};
`;

export const OpinionsImage = styled.img`
  flex: 0 0 40%;
  height: 100%;
  object-fit: cover;

  @media (max-width: ${({ theme }) => theme.breakpoints.phase2}) {
    width: 100%;
    height: 200px;
  }
`;

export const OpinionsNav = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const NavButton = styled.button`
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.mediumMain};
  color: ${({ theme }) => theme.colors.mediumMain};
  font-size: 1.5rem;
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.mediumMain};
    color: ${({ theme }) => theme.colors.golden};
  }
`;
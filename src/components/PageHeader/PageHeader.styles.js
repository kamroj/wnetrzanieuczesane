import styled from 'styled-components';

export const HeaderImage = styled.div`
  width: 100%;
  height: 30vh;
  background-image: ${props => props.$backgroundImage ? 
    `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${props.$backgroundImage})` : 
    'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7))'
  };
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
import styled from 'styled-components';
import LazyBackground from '../LazyMedia/LazyBackground';

export const HeaderImage = styled(LazyBackground)`
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: ${({ theme }) => theme.borders.borderGold};
`;

export const HeaderTitle = styled.div`
  font-size: 2.2rem;
  color: ${({ theme }) => theme.colors.golden};
  text-align: center;
  position: relative;
  z-index: 3;

  @media (max-width: ${({ theme }) => theme.breakpoints.phase4}) {
    font-size: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phase3}) {
    font-size: 1.8rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phase2}) {
    font-size: 1.4rem;
  }
`;
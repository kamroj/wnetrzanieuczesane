import styled from 'styled-components';
import { Parallax } from 'react-parallax';

export const StyledParallax = styled(Parallax)`
  width: 100%;
`;  

export const AboutOfferContainer = styled.section`
  display: flex;
  position: relative;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  padding: 150px 0px;
  height: 100%;
  width: 100%;
`;

export const ContentText = styled.div`
  padding-bottom: 50px;
  width: 80%;
  text-align: center;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.main};

  @media (max-width: ${({ theme }) => theme.breakpoints.phase4}) {
    font-size: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phase2}) {
    font-size: 1.8rem;
  }
`;
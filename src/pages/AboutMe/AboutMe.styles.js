import styled from 'styled-components';

export const AboutMeContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.mainLight};
`;

export const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1rem;
  display: flex;
  flex-wrap: wrap;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.phase3}) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  flex: 0 0 auto;
  margin-right: 2rem;
  margin-bottom: 2rem;
  max-width: 480px;

  @media (max-width: ${({ theme }) => theme.breakpoints.phase3}) {
    margin-right: 0;
    align-self: center;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 480px;
  border: 1px solid rgb(218,165,32);
  box-shadow: 8px 8px 0 rgb(218 165 32 / 15%);

  @media (max-width: ${({ theme }) => theme.breakpoints.phase3}) {
    max-width: 100%;
  }
`;

export const TextContainer = styled.div`
  flex: 1;
  min-width: 300px;
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.phase3}) {
    width: 100%;
    padding: 0px;
  }
`;

export const Content = styled.p`
  color: ${({ theme }) => theme.colors.black};
  line-height: 1.6;
  margin-bottom: 1.5rem;
  text-align: left;
`;

export const ButtonContainer = styled.div`
  margin-top: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.phase3}) {
    display: flex;
    justify-content: center;
  }
`;
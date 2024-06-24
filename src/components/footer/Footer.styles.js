import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  border-top: ${({theme}) => theme.borders.borderGold};
  width: 100%;
  padding: 50px 20px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.main};
`;

export const FooterContainer = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.phase4};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.phase2}) {
    flex-direction: column;
  }
`;

export const FooterItemContainer = styled.div`
  width: 30%;

  @media (max-width: ${({ theme }) => theme.breakpoints.phase2}) {
    width: 100%;
    margin-bottom: 30px;
  }
`;

export const FooterItemContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterHeader = styled.div`
  font-size: 1.5rem;
  margin-bottom: 20px;
  font-weight: bold;

  @media (max-width: ${({ theme }) => theme.breakpoints.phase1}) {
    font-size: ${({ theme }) => theme.fontSizes.small * 1.5};
  }
`;

export const FooterContent = styled.div`
  font-size: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.phase1}) {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`;

export const SocialIconsContainer = styled(FooterContent)`
  display: flex;
  flex-direction: row;
`;

export const SocialIcon = styled.a`
  font-size: 1.5rem;
  margin-right: 15px;
  color: #333;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.golden};;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phase1}) {
    font-size: ${({ theme }) => theme.fontSizes.small * 1.5};
  }
`;

export const FooterList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 10px;
  }
`;

export const FooterParagraph = styled.p`
  margin: 0 0 10px 0;
`;
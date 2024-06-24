// src/components/Home/Quote/Quote.styles.js
import styled from 'styled-components';

export const QuoteContainer = styled.section`
  display: flex;
  justify-content: center;
  padding: 90px 0;
  background-image: url(${props => props.theme.images.quoteBackground});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  min-height: 150px;
  height: 100%;
  width: 100%;
`;

export const QuoteImageContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const QuoteImage = styled.img`
  width: 40px;
  position: absolute;
  ${props => props.$left && `
    bottom: -15px;
    right: 10px;
  `}
  ${props => props.$right && `
    top: -15px;
    left: 10px;
    transform: rotate(180deg);
  `}

  @media (max-width: ${props => props.theme.breakpoints.phase3}) {
    width: 30px;
  }

  @media (max-width: ${props => props.theme.breakpoints.phase1}) {
    width: 25px;
  }
`;

export const QuotationContainer = styled.div`
  color: rgba(255, 255, 255, 0.81);
  display: flex;
  justify-content: space-around;
  max-width: 750px;
  width: 70%;
  flex-direction: column;

  @media (max-width: ${props => props.theme.breakpoints.phase1}) {
    font-size: ${props => props.theme.fontSizes.phase1};
  }
`;

export const QuotationSentence = styled.div`
  width: 100%;
  line-height: 1.3;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${props => props.theme.breakpoints.phase1}) {
    text-align: center;
  }
`;

export const QuotationAuthor = styled.div`
  display: flex;
  justify-content: flex-end;
  font-weight: 600;
  
  @media (max-width: ${props => props.theme.breakpoints.phase1}) {
    padding-top: 20px;
    font-size: ${props => props.theme.fontSizes.phase1};
  }
`;
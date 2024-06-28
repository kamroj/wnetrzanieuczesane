import React from 'react';
import { 
  QuoteContainer, 
  QuoteImageContainer, 
  QuoteImage, 
  QuotationContainer, 
  QuotationSentence, 
  QuotationAuthor 
} from './Quote.styles';
import quoteImage from '../../../assets/images/quote-gold.png';

function Quote() {
  return (
    <QuoteContainer>
      <QuoteImageContainer>
        <QuoteImage src={quoteImage} alt="quote-left" $left />
      </QuoteImageContainer>
      <QuotationContainer>
        <QuotationSentence>
          Siła dobrego projektu tkwi w nas i w naszej zdolności postrzegania
          świata za pomocą uczucia i rozumu. <br />
          Dobry projekt architektoniczny jest zmysłowy. <br />
          Dobry projekt architektoniczny jest mądry.
        </QuotationSentence>
        <QuotationAuthor>
          Peter Zumthor <br /> 
          Myślenie architekturą
        </QuotationAuthor>
      </QuotationContainer>
      <QuoteImageContainer>
        <QuoteImage src={quoteImage} alt="quote-right" $right />
      </QuoteImageContainer>
    </QuoteContainer>
  );
}

export default Quote;
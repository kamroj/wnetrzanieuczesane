import React from 'react';
import PropTypes from 'prop-types';
import { 
  QuoteContainer, 
  QuoteImageContainer, 
  QuoteImage, 
  QuotationContainer, 
  QuotationSentence, 
  QuotationAuthor 
} from './Quote.styles';
import quoteImage from '../../../assets/images/quote-gold.png';

function Quote({ content }) {
  return (
    <QuoteContainer>
      <QuoteImageContainer>
        <QuoteImage src={quoteImage} alt="quote-left" $left />
      </QuoteImageContainer>
      <QuotationContainer>
        <QuotationSentence>
          {content.content}
        </QuotationSentence>
        <QuotationAuthor>
          {content.author}
        </QuotationAuthor>
      </QuotationContainer>
      <QuoteImageContainer>
        <QuoteImage src={quoteImage} alt="quote-right" $right />
      </QuoteImageContainer>
    </QuoteContainer>
  );
}

Quote.propTypes = {
  content: PropTypes.shape({
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Quote;
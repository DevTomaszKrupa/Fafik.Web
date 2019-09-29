import React from 'react';

import components from './styles';
import { RomanticQuoteProps } from '../../models';


const QuoteLayout = (props: RomanticQuoteProps) => {
  const { SingleLineHorizontal, QuoteSection, QuoteText, QuoteAuthor, } = components;

  const { quote, quoteAuthor } = props;

  return (
    <QuoteSection>
      <QuoteText>{quote}</QuoteText>
      <SingleLineHorizontal />
      <QuoteAuthor> {quoteAuthor} </QuoteAuthor>
    </QuoteSection>
  );
};

export default QuoteLayout;

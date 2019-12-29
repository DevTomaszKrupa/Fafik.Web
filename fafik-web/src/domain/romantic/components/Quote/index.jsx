import React from 'react';

import { AdminEditableComponent } from 'application/shared/components';

import components from './styles';

const QuoteLayout = props => {
  const { SingleLineHorizontal, QuoteSection, QuoteText, QuoteAuthor } = components;

  const { quote, quoteAuthor } = props;

  return (
    <QuoteSection>
      <AdminEditableComponent adminMode={true} itemId="quoteSection.quote" textValue={quote}>
        <QuoteText>{quote}</QuoteText>
      </AdminEditableComponent>

      <SingleLineHorizontal />
      <AdminEditableComponent adminMode={true} itemId="quoteSection.quoteAuthor" textValue={quoteAuthor}>
        <QuoteAuthor> {quoteAuthor} </QuoteAuthor>
      </AdminEditableComponent>
    </QuoteSection>
  );
};

export default QuoteLayout;

import React, { Fragment } from 'react';

import components from './Quote.styles';
import { RomanticState } from '../../../../../store/romantic/theme/reducers';

type Props = {
  romanticState: RomanticState;
};

const QuoteLayout = (props: Props) => {
  const {
    SingleLineHorizontal,
    QuoteSection,
    QuoteText,
    QuoteAuthor,
  } = components;

  const { quoteSection } = props.romanticState;

  return (
    <Fragment>
      <QuoteSection>
        <QuoteText>{quoteSection.quote}</QuoteText>
        <SingleLineHorizontal />
        <QuoteAuthor> {quoteSection.quoteAuthor} </QuoteAuthor>
      </QuoteSection>
    </Fragment>
  );
};

export default QuoteLayout;

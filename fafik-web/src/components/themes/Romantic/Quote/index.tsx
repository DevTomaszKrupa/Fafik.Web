import React from 'react';
import { useSelector } from 'react-redux';

import { AppState } from '../../../../store/reducers';
import QuoteSection from '../../../../theme/romantic/components/Quote';

const QuoteLayout = () => {

  const romanticState = useSelector((state: AppState) => state.romanticState);

  const { quoteSection } = romanticState;

  return (
    <QuoteSection {...quoteSection} />
  );
};

export default QuoteLayout;

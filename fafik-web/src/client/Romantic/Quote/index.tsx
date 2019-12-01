import React from 'react';
import { useSelector } from 'react-redux';

import QuoteSection from 'domain/romantic/components/Quote';

const QuoteLayout = () => {
  const romanticState = useSelector((state: any) => state.romanticState);

  const { quoteSection } = romanticState;

  return <QuoteSection {...quoteSection} />;
};

export default QuoteLayout;

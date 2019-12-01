import React from 'react';
import { useSelector } from 'react-redux';

import AdditionalInfo from 'domain/romantic/components/AdditionalInfo';

const AdditionalInfoLayout = () => {
  const romanticState = useSelector((state: any) => state.romanticState);

  const { additionalInfo } = romanticState;

  return <AdditionalInfo {...additionalInfo} />;
};

export default AdditionalInfoLayout;

import React from 'react';
import { useSelector } from 'react-redux';

import { AppState } from '../../../../store/reducers';
import AdditionalInfo from '../../../../theme/romantic/components/AdditionalInfo';

const AdditionalInfoLayout = () => {

  const romanticState = useSelector((state: AppState) => state.romanticState);

  const { additionalInfo } = romanticState;

  return (
    <AdditionalInfo {...additionalInfo} />
  );
};

export default AdditionalInfoLayout;

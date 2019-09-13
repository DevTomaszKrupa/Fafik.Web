import React from 'react';
import { useSelector } from 'react-redux';

import { AppState } from '../../../../store/reducers';
import GiftPreferences from '../../../../theme/romantic/components/GiftPreferences';

const GiftPreferencesLayout = () => {

  const romanticState = useSelector((state: AppState) => state.romanticState);

  const { } = romanticState;

  return (
    <GiftPreferences  />
  );
};

export default GiftPreferencesLayout;

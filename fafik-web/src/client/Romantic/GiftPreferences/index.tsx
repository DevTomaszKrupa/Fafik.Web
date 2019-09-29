import React from 'react';
import { useSelector } from 'react-redux';

import { AppState } from 'application/store/reducers';
import GiftPreferences from 'domain/romantic/components/GiftPreferences';

const GiftPreferencesLayout = () => {

  const romanticState = useSelector((state: AppState) => state.romanticState);

  const { } = romanticState;

  return (
    <GiftPreferences  />
  );
};

export default GiftPreferencesLayout;

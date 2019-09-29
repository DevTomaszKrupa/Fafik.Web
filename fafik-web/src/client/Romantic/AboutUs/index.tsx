import React from 'react';
import { useSelector } from 'react-redux';

import { AppState } from 'application/store/reducers';
import AboutUs from 'domain/romantic/components/AboutUs';

const AboutUsLayout = () => {
  const romanticState = useSelector((state: AppState) => state.romanticState);

  const { aboutUs } = romanticState;

  return <AboutUs {...aboutUs} />;
};

export default AboutUsLayout;

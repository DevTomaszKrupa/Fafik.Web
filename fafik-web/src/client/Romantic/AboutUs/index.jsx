import React from 'react';
import { useSelector } from 'react-redux';

import AboutUs from 'domain/romantic/components/AboutUs';

const AboutUsLayout = () => {
  const romanticState = useSelector(state => state.romanticState);

  const { aboutUs } = romanticState;

  return <AboutUs {...aboutUs} />;
};

export default AboutUsLayout;

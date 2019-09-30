import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import components from './styles';

import Header from './Header';
import AboutUs from './AboutUs';
import Quote from './Quote';
import Gallery from './Gallery';
import Blog from './Blog';
import Map from './Map';
import EventPlan from './EventPlan';
import GiftPreferences from './GiftPreferences';
import Music from './Music';
import AdditionalInfo from './AdditionalInfo';
import RsvpDialog from './dialogs/RsvpDialog';

const RomanticLayout = () => {
  const dispatch = useDispatch();
  const getRomanticTheme = (clientName: string) => dispatch({ type: 'GET_ROMANTIC_THEME_STARTED', payload: clientName });

  const { DoubleLineTheme } = components;

  useEffect(() => {
    getRomanticTheme('gaja-i-slawomir');
  }, []);

  return (
    <Fragment>
      <Header />
      <DoubleLineTheme />

      <AboutUs />
      <DoubleLineTheme />

      <Quote />
      <DoubleLineTheme />

      <Gallery />
      <Blog />
      <DoubleLineTheme />

      <Map />
      <DoubleLineTheme />

      <EventPlan />
      <DoubleLineTheme />

      <GiftPreferences />
      <DoubleLineTheme />

      <Music />
      <DoubleLineTheme />

      <AdditionalInfo />

      <RsvpDialog />
    </Fragment>
  );
};

export default RomanticLayout;

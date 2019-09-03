import React, { Fragment, useEffect } from 'react';

import components from './Romantic.styles';

import Header from '../header/index';
import AboutUs from '../AboutUs/index';
import Quote from '../Quote/index';
import Gallery from '../Gallery/index';
import Blog from '../Blog/index';
import Map from '../Map/index';
import EventPlan from '../EventPlan/index';
import GiftPreferences from '../GiftPreferences/index';
import Music from '../Music/index';
import AdditionalInfo from '../AdditionalInfo/index';
import RsvpDialog from '../dialogs/RsvpDialog/index';

import { RomanticState } from '../../../../store/romantic/theme/reducers';
import { Action } from '../../../../store/actions';

type Props = {
  romanticState: RomanticState;
  getRomanticTheme: (clientPath: string) => Action;
};

const RomanticLayout = (props: Props) => {
  const {
    DoubleLineTheme,
  } = components;

  useEffect(() => {
    props.getRomanticTheme('gaja-i-slawomir');
  }, []);

  const { } = props.romanticState;

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

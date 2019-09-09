import React, { Fragment } from 'react';

import components from './styles';
import { useSelector } from 'react-redux';
import { AppState } from '../../../../store/reducers';

const AboutUsLayout = () => {

  const romanticState = useSelector((state: AppState) => state.romanticState);

  const { AboutUsBox, AboutUsPhotoBox, AboutUsPhotoFrame, AboutUsPhoto,
    AboutBoxText, TextWelcome, AboutUs, ToRSVPButton } = components;

  const { aboutUs } = romanticState;

  return (
    <Fragment>
      <AboutUsBox>
        <AboutUsPhotoBox>
          <AboutUsPhotoFrame>
            <AboutUsPhoto aboutUsImg={aboutUs.aboutUsPhoto}>
              {' '}
            </AboutUsPhoto>
          </AboutUsPhotoFrame>
        </AboutUsPhotoBox>
        <AboutBoxText>
          <TextWelcome> {aboutUs.textWelcome} </TextWelcome>
          <AboutUs> {aboutUs.aboutUs}</AboutUs>
          <ToRSVPButton> potwierdź obecność> </ToRSVPButton>
        </AboutBoxText>
      </AboutUsBox>
    </Fragment>
  );
};

export default AboutUsLayout;

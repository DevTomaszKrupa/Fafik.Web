import React, { Fragment } from 'react';

import components from './AboutUs.styles';
import { RomanticState } from '../../../../../store/romantic/theme/reducers';

type Props = {
  romanticState: RomanticState;
};

const AboutUsLayout = (props: Props) => {
  const {
    AboutUsBox,
    AboutUsPhotoBox,
    AboutUsPhotoFrame,
    AboutUsPhoto,
    AboutBoxText,
    TextWelcome,
    AboutUs,
    ToRSVPButton,
  } = components;


  const { aboutUs } = props.romanticState;

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

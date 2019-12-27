import React from 'react';

import components from './styles';

const AboutUsLayout = props => {
  const { AboutUsBox, AboutUsPhotoBox, AboutUsPhotoFrame, AboutUsPhoto, AboutBoxText, TextWelcome, AboutUs, ToRSVPButton } = components;
  const { aboutUsPhoto, textWelcome, aboutUs } = props;

  return (
    <AboutUsBox id="o-nas">
      <AboutUsPhotoBox>
        <AboutUsPhotoFrame>
          <AboutUsPhoto aboutUsImg={aboutUsPhoto}></AboutUsPhoto>
        </AboutUsPhotoFrame>
      </AboutUsPhotoBox>
      <AboutBoxText>
        <TextWelcome> {textWelcome} </TextWelcome>
        <AboutUs> {aboutUs}</AboutUs>
        <ToRSVPButton> potwierdź obecność> </ToRSVPButton>
      </AboutBoxText>
    </AboutUsBox>
  );
};

export default AboutUsLayout;

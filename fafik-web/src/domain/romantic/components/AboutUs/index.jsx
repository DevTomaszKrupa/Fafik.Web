import React from 'react';
import PropTypes from 'prop-types';

import { AdminEditableComponent } from 'application/shared/components';

import components from './styles';

const AboutUsLayout = props => {
  const { aboutUsPhoto, textWelcome, adminMode, aboutUs } = props;

  const { AboutUsBox, AboutUsPhotoBox, AboutUsPhotoFrame, AboutUsPhoto, AboutBoxText, TextWelcome, AboutUs, ToRSVPButton } = components;

  return (
    <AboutUsBox id="o-nas">
      <AboutUsPhotoBox>
        <AboutUsPhotoFrame>
          <AboutUsPhoto aboutUsImg={aboutUsPhoto}></AboutUsPhoto>
        </AboutUsPhotoFrame>
      </AboutUsPhotoBox>
      <AboutBoxText>
        <AdminEditableComponent adminMode={adminMode} itemId="aboutUs.textWelcome" textValue={textWelcome}>
          <TextWelcome> {textWelcome} </TextWelcome>
        </AdminEditableComponent>
        <AdminEditableComponent adminMode={adminMode} itemId="aboutUs.aboutUs" textValue={aboutUs}>
          <AboutUs> {aboutUs}</AboutUs>
        </AdminEditableComponent>
        <ToRSVPButton> potwierdź obecność> </ToRSVPButton>
      </AboutBoxText>
    </AboutUsBox>
  );
};

AboutUsLayout.propTypes = {
  aboutUsPhoto: PropTypes.string.isRequired,
  textWelcome: PropTypes.string.isRequired,
  aboutUs: PropTypes.string.isRequired,
  adminMode: PropTypes.bool,
};

AboutUsLayout.defaultProps = {
  adminMode: false,
};

export default AboutUsLayout;

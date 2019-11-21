import React from 'react';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

import { history } from 'application/helpers';
import components from './styles';

const HomeFooter = () => {
  const FacebookClick = () => {
    window.open('https://www.facebook.com/miloscwiernoscpl', '_blank');
  };

  const InstagramClick = () => {
    window.open('https://www.instagram.com/miloscwiernosc/', '_blank');
  };

  const {
    Footer,
    FooterTitle,
    FooterMenuSocialMedia,
    Menu,
    MenuItem,
    HorizontalLine,
    SocialIcons,
    FAwesomeIcon,
    ContactCopyrightSection,
    ContactTitle,
    EmailFrame,
    Email,
    Copyright,
  } = components;

  return (
    <Footer>
      <FooterTitle>Ślubuję Ci miłość i wierność...</FooterTitle>
      <FooterMenuSocialMedia>
        <Menu menuStyle="left">
          <MenuItem onClick={() => history.push('/')}>STRONA GŁÓWNA</MenuItem>
          <MenuItem onClick={() => history.push('/FAQ')}>FAQ</MenuItem>
          <MenuItem onClick={() => history.push('/oferta')}>WYBÓR SZABLONU</MenuItem>
        </Menu>
        <HorizontalLine />
        <SocialIcons>
          <span onClick={FacebookClick}>
            <FAwesomeIcon icon={faFacebook} size="lg" color="#FFFFFF" />
          </span>
          <span onClick={InstagramClick}>
            <FAwesomeIcon icon={faInstagram} size="lg" color="#FFFFFF" />
          </span>
        </SocialIcons>
        <HorizontalLine />
        <Menu menuStyle="right">
          <MenuItem onClick={() => history.push('/cennik')}>WYCENA USŁUG</MenuItem>
          <MenuItem onClick={() => history.push('/kontakt')}>KONTAKT</MenuItem>
          <MenuItem onClick={() => history.push('/admin')}>LOGOWANIE I REJESTRACJA</MenuItem>
        </Menu>
      </FooterMenuSocialMedia>
      <ContactCopyrightSection>
        <ContactTitle>KONTAKT</ContactTitle>
        <EmailFrame>
          <Email>WIERNOSCMILOSC@GMAIL.COM</Email>
        </EmailFrame>
        <Copyright>MILOSCWIERNOSC.PL COPYRIGHT, STRONA KORZYSTA Z COOKIES</Copyright>
      </ContactCopyrightSection>
    </Footer>
  );
};
export default HomeFooter;

import React, { Fragment } from 'react';
import { history } from '../../helpers';

import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import components from './styles';

const TopBarComponent = () => {

  const FacebookClick = () => {
    window.open('https://www.facebook.com/miloscwiernoscpl', '_blank');
  };

  const InstagramClick = () => {
    window.open('https://www.instagram.com/miloscwiernosc/', '_blank');
  };

  const {
    TopBar,
    TopBarLeft,
    TopBarRight,
    SocialIcons,
    FAwesomeIcon,
    TopBartLeftTitle,
    TopBartRightTitle,
    LogoSection,
    MainLogo,
    MainMenu,
    MenuItem,
  } = components;

  return (
    <Fragment>
      <TopBar>
        <TopBarLeft>
          <SocialIcons>
            <span onClick={FacebookClick}> <FAwesomeIcon icon={faFacebook} size="lg" color="#FFFFFF" /> </span>
            <span onClick={InstagramClick}> <FAwesomeIcon icon={faInstagram} size="lg" color="#FFFFFF" /> </span>
          </SocialIcons>
          <TopBartLeftTitle>SPRAWDŹ NASZE SOCIAL MEDIA!</TopBartLeftTitle>
        </TopBarLeft>
        <TopBarRight>
          <TopBartRightTitle>MIŁOŚĆ, WIERNOŚĆ</TopBartRightTitle>
        </TopBarRight>
      </TopBar>
      <LogoSection>
        <MainLogo src="http://localhost/Fafik/App/logo-main.png" onClick={() => history.push('/')} />
      </LogoSection>
      <MainMenu>
        <MenuItem hideBorder onClick={() => history.push('/oferta')} active={history.location.pathname === '/oferta'}>
          SZABLONY</MenuItem>
        <MenuItem onClick={() => history.push('/cennik')} active={history.location.pathname === '/cennik'}>
          CENNIK</MenuItem>
        <MenuItem onClick={() => history.push('/FAQ')} active={history.location.pathname === '/FAQ'}>
          FAQ</MenuItem>
        <MenuItem onClick={() => history.push('/kontakt')} active={history.location.pathname === '/kontakt'}>
          KONTAKT</MenuItem>
        <MenuItem onClick={() => history.push('/admin')} active={history.location.pathname === '/admin'}>
          PANEL ADMINISTRATORA</MenuItem>
      </MainMenu>
    </Fragment>
  );
};
export default TopBarComponent;


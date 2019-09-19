import React, { Fragment } from 'react';
import { history } from '../../helpers';

import components from './styles';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const HomeComponent = () => {

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
    VerticalLine
  } = components;

  return (
    <Fragment>
      <TopBar>
        <TopBarLeft>
          <SocialIcons>
            <FAwesomeIcon icon={faFacebook} size="lg" color="#FFFFFF" />
            <FAwesomeIcon icon={faInstagram} size="lg" color="#FFFFFF" />
          </SocialIcons>
          <TopBartLeftTitle>SPRAWDŹ NASZE SOCIAL MEDIA!</TopBartLeftTitle>
        </TopBarLeft>
        <TopBarRight>
          <TopBartRightTitle>MIŁOŚĆ, WIERNOŚĆ</TopBartRightTitle>
        </TopBarRight>
      </TopBar>
      <LogoSection>
        <MainLogo src="http://localhost/Fafik/App/logo-main.png" />
      </LogoSection>
      <MainMenu>
        <MenuItem>PRZYKŁADOWE SZABLONY</MenuItem> <VerticalLine />
        <MenuItem>SEGMENTY NA STRONĘ</MenuItem> <VerticalLine />
        <MenuItem>FAQ</MenuItem> <VerticalLine />
        <MenuItem>KONTAKT</MenuItem> <VerticalLine />
        <MenuItem>LOGOWANIE</MenuItem>

      </MainMenu>
      {/* <div style={{fontSize: '70px'}}>
    MIŁOŚĆ WIERNOŚĆ W ZAKOPANEM
    <button onClick={() => history.push('/oferta')}>KUP SOBIE STRONE</button>
  </div> */}
    </Fragment>
  );
};
export default HomeComponent;

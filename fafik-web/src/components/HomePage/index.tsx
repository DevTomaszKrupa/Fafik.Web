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
    VerticalLine,
    BannerBox,
    BannerInfoBox,
    BannerInfoText,
    BannerInfoButton,
    MeetUsSection,
    MeetUsBox,
    MeetUsText,
    MeetUsTitle,
    MeetUsSignatures,
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

      <BannerBox>
        <BannerInfoBox>
          <BannerInfoText>
            WYJĄTKOWE STRONY ŚLUBNE JUŻ OD <b>49ZŁ/MIES.</b> ZASKOCZ SWOICH GOŚCI NOWĄ FORMĄ ORGANIZACJI WYDARZENIA!
          </BannerInfoText>
          <BannerInfoButton>ZOBACZ PLANY ></BannerInfoButton>
        </BannerInfoBox>
      </BannerBox>

      <MeetUsSection>
        <MeetUsBox>
          <MeetUsTitle>KOCHANI NARZECZENI</MeetUsTitle>
          <MeetUsText>WITAJCIE NA NASZEJ STRONIE, BARDZO SIĘ CIESZYMY,
            ŻE TU TRAFILIŚCIE! WIEMY JAK WYMAGAJĄCA JEST ORGANIZACJA WESELA,
            DLATEGO POŚWIĘCILIŚMY WIELE CZASU NAD TYM, ABYŚCIE MOGLI KOMFORTOWO
            I WEDŁUG SWOJEJ WIZJI STWORZYĆ WYMARZONĄ STRONĘ ŚLUBNĄ, KTÓRA WAM TO UŁATWI.
            PRZEDSTAWIAMY WAM NASZ PORTAL, MAMY NADZIEJĘ, ŻE WAM SIĘ SPODOBA!
            </MeetUsText>
          <MeetUsSignatures>Klaudia i Tomek ^</MeetUsSignatures>
        </MeetUsBox>

      </MeetUsSection>
      {/* <div style={{fontSize: '70px'}}>
    MIŁOŚĆ WIERNOŚĆ W ZAKOPANEM
    <button onClick={() => history.push('/oferta')}>KUP SOBIE STRONE</button>
  </div> */}
    </Fragment>
  );
};
export default HomeComponent;

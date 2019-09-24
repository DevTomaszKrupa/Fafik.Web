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
    HorizontalLine,
    MeetUsTitle,
    MeetUsSignatures,
    MeetUsImg,
    WhatsThisSection,
    VideoSection,
    TextSection,
    WhatsThisVideo,
    VideoSectionButton,
    CornerLetter,
    ShortLogo,
    WhatsThisTitle,
    WhatsThisText,
    WhatsThisButton,
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
          <BannerInfoButton onClick={() => history.push('/oferta')}>KUP STRONĘ ></BannerInfoButton>
        </BannerInfoBox>
      </BannerBox>

      <MeetUsSection>
        <MeetUsBox>
          <MeetUsTitle>KOCHANI NARZECZENI!</MeetUsTitle>
          <HorizontalLine />
          <MeetUsText>WITAJCIE NA NASZEJ STRONIE, BARDZO SIĘ CIESZYMY,
            ŻE TU TRAFILIŚCIE! WIEMY JAK WYMAGAJĄCA JEST ORGANIZACJA WESELA,
            DLATEGO POŚWIĘCILIŚMY WIELE CZASU NAD TYM, ABYŚCIE MOGLI KOMFORTOWO
            I WEDŁUG SWOJEJ WIZJI STWORZYĆ WYMARZONĄ STRONĘ ŚLUBNĄ, KTÓRA WAM TO UŁATWI.
            PRZEDSTAWIAMY WAM NASZ PORTAL, MAMY NADZIEJĘ, ŻE WAM SIĘ SPODOBA!
            </MeetUsText>
          <MeetUsSignatures src="http://localhost/Fafik/app/signatures.png" />
        </MeetUsBox>
        <MeetUsImg src="http://localhost/Fafik/app/meet-us-img.png" />
      </MeetUsSection>

      <WhatsThisSection>
        <VideoSection>
          <WhatsThisVideo />
          <VideoSectionButton>ZAŁÓŻ SWOJĄ STRONĘ ŚLUBNĄ ></VideoSectionButton>
          <CornerLetter>M</CornerLetter>
        </VideoSection>
        <TextSection>
          <ShortLogo />
          <WhatsThisTitle>co to jest?</WhatsThisTitle>
          <WhatsThisText>To portal na którym narzeczeni mogą zakupić swoje miejsce w sieci
              pod adresem (miloscwiernosc.pl/waszanazwa) na pewien okres czasu,
              dobrać szablon wykonany przez grafika i wyedytować go samodzielnie
              pod swoim kątem. Korzystają przy tym z kreatora,
              dzięki któremu możliwe jest edytowanie szablonu "na żywo".
          </WhatsThisText>
          <WhatsThisButton>ZOBACZ, CO MOŻESZ MIEĆ NA STRONIE ></WhatsThisButton>
          <CornerLetter>W</CornerLetter>
        </TextSection>
      </WhatsThisSection>
    </Fragment>
  );
};
export default HomeComponent;

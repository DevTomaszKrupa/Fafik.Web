import React, { Fragment, useEffect } from 'react';
import { history } from '../../helpers';
import { useDocumentTitle } from '../../shared';

import components from './styles';
import TopBar from '../TopBar';


const HomeComponent = () => {
  useDocumentTitle('Wytwórnia stron ślubnych - Miłość Wierność');

  const scrollToWhatsThisSection = () => {
    const element = document.getElementById('whatsThisSection');
    if (element)
      element.scrollIntoView();
  };

  const {
    BannerBox,
    BannerInfoBox,
    BannerInfoText,
    BannerInfoButton,
    ButtonArrow,
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
    HomePageButton,
    ShortLogo,
    WhatsThisTitle,
    WhatsThisText,
    YouTubePlayer,

  } = components;

  return (
    <Fragment>
      <TopBar />
      <BannerBox>
        <BannerInfoBox>
          <BannerInfoText>
            WYJĄTKOWE STRONY ŚLUBNE JUŻ OD <b>49ZŁ/MIES.</b> ZASKOCZ SWOICH GOŚCI NOWĄ FORMĄ ORGANIZACJI WYDARZENIA!
          </BannerInfoText>
          <BannerInfoButton onClick={scrollToWhatsThisSection}> ZOBACZ JAK TO DZIAŁA <ButtonArrow id="arrow">></ButtonArrow></BannerInfoButton>
        </BannerInfoBox>
      </BannerBox>

      <MeetUsSection>
        <MeetUsBox>
          <MeetUsTitle>KOCHANI NARZECZENI!</MeetUsTitle>
          <HorizontalLine />
          <MeetUsText>
            WITAJCIE NA NASZEJ STRONIE! BARDZO SIĘ CIESZYMY,ŻE TU TRAFILIŚCIE ♥ <br />
            WIEMY JAK WYMAGAJĄCA JEST <b>ORGANIZACJA WESELA,</b><br />
            DLATEGO POŚWIĘCILIŚMY WIELE CZASU, ABYŚCIE MOGLI KOMFORTOWO<br />
            I WEDŁUG SWOJEJ WIZJI STWORZYĆ WYMARZONĄ STRONĘ ŚLUBNĄ,
            KTÓRA WAM TO UŁATWI. PRZEDSTAWIAMY WAM NASZ PORTAL,<br />
            MAMY NADZIEJĘ, ŻE WAM SIĘ SPODOBA!
            </MeetUsText>
          <MeetUsSignatures src="http://localhost/Fafik/app/signatures.png" />
        </MeetUsBox>
        <MeetUsImg src="http://localhost/Fafik/app/meet-us-img.png" />
      </MeetUsSection>

      <WhatsThisSection id="whatsThisSection">
        <VideoSection>
          <YouTubePlayer videoId={'HOZi1UFRYpk'} />
          <HomePageButton backgroundColor="#BAC6B6" border="0.25rem solid #BAC6B6" color="#FFFFFF"
            onClick={() => history.push('/oferta')}>ZAŁÓŻ SWOJĄ STRONĘ ŚLUBNĄ ></HomePageButton>
        </VideoSection>
        <TextSection>
          <ShortLogo src="http://localhost/Fafik/app/logo-short.png" />
          <WhatsThisTitle src="http://localhost/Fafik/app/whats-this-title.png" />
          <WhatsThisText> To portal na którym narzeczeni mogą zakupić swoje miejsce w sieci
              pod adresem (miloscwiernosc.pl/waszanazwa) na pewien okres czasu,
              dobrać szablon wykonany przez grafika i wyedytować go samodzielnie
              pod swoim kątem. Korzystają przy tym z kreatora,
              dzięki któremu możliwe jest edytowanie szablonu "na żywo".
          </WhatsThisText>
          <HomePageButton backgroundColor="#FFFEFE" border="0.25rem solid #F9E2DC" color="#ECCCC4"
            onClick={() => history.push('/cennik')}>ZOBACZ CENNIK ></HomePageButton>
        </TextSection>
      </WhatsThisSection>
    </Fragment>
  );
};
export default HomeComponent;

import React, { Fragment } from 'react';

import { history } from 'application/helpers';
import { useDocumentTitle } from 'application/shared';
import { IMAGE_STORAGE } from 'application/config';

import components from './styles';

const HomePageComponent = () => {
  useDocumentTitle('Wytwórnia stron ślubnych - Miłość Wierność');

  const scrollToWhatsThisSection = () => {
    const element = document.getElementById('whatsThisSection');
    if (element) element.scrollIntoView();
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
    HomePageVideoButton,
    FVideo,
    FeaturesVideo,
  } = components;

  return (
    <Fragment>
      <BannerBox>
        <BannerInfoBox>
          <BannerInfoText>
            WYJĄTKOWE STRONY ŚLUBNE JUŻ OD <b>49ZŁ/MIES.</b> ZASKOCZ SWOICH
            GOŚCI NOWĄ FORMĄ ORGANIZACJI WYDARZENIA!
          </BannerInfoText>
          <BannerInfoButton onClick={scrollToWhatsThisSection}>
            {' '}
            ZOBACZ JAK TO DZIAŁA <ButtonArrow id="arrow">></ButtonArrow>
          </BannerInfoButton>
        </BannerInfoBox>
      </BannerBox>

      <MeetUsSection>
        <MeetUsBox>
          <MeetUsTitle>KOCHANI NARZECZENI!</MeetUsTitle>
          <HorizontalLine />
          <MeetUsText>
            WITAJCIE NA NASZEJ STRONIE! BARDZO SIĘ CIESZYMY,ŻE TU TRAFILIŚCIE ♥{' '}
            <br />
            WIEMY JAK WYMAGAJĄCA JEST <b>ORGANIZACJA WESELA,</b>
            <br />
            DLATEGO POŚWIĘCILIŚMY WIELE CZASU, ABYŚCIE MOGLI KOMFORTOWO
            <br />
            I WEDŁUG SWOJEJ WIZJI STWORZYĆ WYMARZONĄ STRONĘ ŚLUBNĄ, KTÓRA WAM TO
            UŁATWI. PRZEDSTAWIAMY WAM NASZ PORTAL,
            <br />
            MAMY NADZIEJĘ, ŻE WAM SIĘ SPODOBA!
          </MeetUsText>
          <MeetUsSignatures src={`${IMAGE_STORAGE}app/signatures.png`} />
        </MeetUsBox>
        <MeetUsImg src={`${IMAGE_STORAGE}app/meet-us-img.png`} />
      </MeetUsSection>

      <WhatsThisSection id="whatsThisSection">
        <VideoSection>
          <YouTubePlayer videoId={'HOZi1UFRYpk'} />
          <HomePageVideoButton onClick={() => history.push('/oferta')}>
            ZAŁÓŻ SWOJĄ STRONĘ ŚLUBNĄ >
          </HomePageVideoButton>
        </VideoSection>
        <TextSection>
          <ShortLogo src={`${IMAGE_STORAGE}app/logo-short.png`} />
          <WhatsThisTitle src={`${IMAGE_STORAGE}app/whats-this-title.png`} />
          <WhatsThisText>
            {' '}
            To portal na którym narzeczeni mogą zakupić swoje miejsce w sieci
            pod adresem (miloscwiernosc.pl/waszanazwa) na pewien okres czasu,
            dobrać szablon wykonany przez grafika i wyedytować go samodzielnie
            pod swoim kątem. Korzystają przy tym z kreatora, dzięki któremu
            możliwe jest edytowanie szablonu "na żywo".
          </WhatsThisText>
          <HomePageButton onClick={() => history.push('/cennik')}>
            ZOBACZ CENNIK >
          </HomePageButton>
        </TextSection>
      </WhatsThisSection>
      <FeaturesVideo>
        <FVideo id="background-video" loop autoPlay>
          <source
            src={`${IMAGE_STORAGE}app/Homepage-feature-vid.mp4`}
            type="video/mp4"
          />
        </FVideo>
      </FeaturesVideo>
    </Fragment>
  );
};
export default HomePageComponent;

import React, { Fragment } from 'react';
// tslint:disable-next-line:no-import-side-effect

import { history } from 'application/helpers';
import { useDocumentTitle } from 'application/shared';
import { IMAGE_STORAGE } from 'application/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

import components from './styles';
import Carousel from './HomeCarousel';

const HomePageComponent = () => {
  useDocumentTitle('Wytwórnia stron ślubnych - Miłość Wierność');

  const scrollToWhatsThisSection = () => {
    const element = document.getElementById('whatsThisSection');
    if (element) element.scrollIntoView();
  };

  const scrollToTop = () => {
    const topElement = document.getElementById('topBar');
    console.log(topElement);
    if (topElement) topElement.scrollIntoView();
  };

  const {
    GoUpButton,
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
    FeaturesSection,
    TopLayer,
    FeaturesTitle,
    InstructionSection,
    InstructionTitleSmall,
    InstructionTitleBig,
    InstructionStepByStep,
    InstructionStep,
    InstructionNumber,
    StepTItle,
    StepDescription,
  } = components;

  return (
    <Fragment>
      <GoUpButton onClick={scrollToTop}>
        <FontAwesomeIcon icon={faArrowUp} color="#ffffff" size="2x" />
      </GoUpButton>
      <BannerBox>
        <BannerInfoBox>
          <BannerInfoText>
            WYJĄTKOWE STRONY ŚLUBNE JUŻ OD <b>49ZŁ/MIES.</b> ZASKOCZ SWOICH GOŚCI NOWĄ FORMĄ ORGANIZACJI WYDARZENIA!
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
            WITAJCIE NA NASZEJ STRONIE! BARDZO SIĘ CIESZYMY,ŻE TU TRAFILIŚCIE ♥ <br />
            WIEMY JAK WYMAGAJĄCA JEST <b>ORGANIZACJA WESELA,</b>
            <br />
            DLATEGO POŚWIĘCILIŚMY WIELE CZASU, ABYŚCIE MOGLI KOMFORTOWO
            <br />
            I WEDŁUG SWOJEJ WIZJI STWORZYĆ WYMARZONĄ STRONĘ ŚLUBNĄ, KTÓRA WAM TO UŁATWI. PRZEDSTAWIAMY WAM NASZ PORTAL,
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
          <HomePageVideoButton onClick={() => history.push('/oferta')}>ZAŁÓŻ SWOJĄ STRONĘ ŚLUBNĄ ></HomePageVideoButton>
        </VideoSection>
        <TextSection>
          <ShortLogo src={`${IMAGE_STORAGE}app/logo-short.png`} />
          <WhatsThisTitle src={`${IMAGE_STORAGE}app/whats-this-title.png`} />
          <WhatsThisText>
            {' '}
            To portal na którym narzeczeni mogą zakupić swoje miejsce w sieci pod adresem (miloscwiernosc.pl/waszanazwa) na pewien okres
            czasu, dobrać szablon wykonany przez grafika i wyedytować go samodzielnie pod swoim kątem. Korzystają przy tym z kreatora,
            dzięki któremu możliwe jest edytowanie szablonu "na żywo".
          </WhatsThisText>
          <HomePageButton onClick={() => history.push('/cennik')}>ZOBACZ CENNIK ></HomePageButton>
        </TextSection>
      </WhatsThisSection>
      <FeaturesSection>
        <FVideo id="background-video" loop autoPlay>
          <source src={`${IMAGE_STORAGE}app/Homepage-feature-vid.webm`} type="video/WebM" />
        </FVideo>
        <TopLayer>
          <FeaturesTitle>DLACZEGO WARTO?</FeaturesTitle>
          <Carousel />
        </TopLayer>
      </FeaturesSection>
      <InstructionSection>
        <InstructionTitleSmall>JAK ZAŁOŻYĆ STRONĘ</InstructionTitleSmall>
        <InstructionTitleBig>W 3 KROKACH?</InstructionTitleBig>
        <HorizontalLine />
        <InstructionStepByStep>
          <InstructionStep>
            <InstructionNumber backgroundColor="#BAC6B6">1</InstructionNumber>
            <StepTItle color="#BAC6B6">WYBIERZ SZABLON</StepTItle>
            <StepDescription>
              Nasze szablony są dopasowane również
              <br />
              pod przeglądarki na smartfonach!
              <br />
              Daj się zaskoczyć ich estetyce
              <br />i możliwościom jakie ze sobą niosą.
            </StepDescription>
          </InstructionStep>

          <InstructionStep>
            <InstructionNumber backgroundColor="#ECE8DF">2</InstructionNumber>
            <StepTItle color="#ECE8DF">ZAŁÓŻ KONTO</StepTItle>
            <StepDescription>
              zacznij edytować swoją stronę
              <br /> - zobacz jakie to szybkie i przyjemne.
              <br />
              Zbierz informacje w jednym miejscu!
            </StepDescription>
          </InstructionStep>

          <InstructionStep>
            <InstructionNumber backgroundColor="#F9E2DB">3</InstructionNumber>
            <StepTItle color="#F9E2DB">ZOSTAŃ ADMINEM</StepTItle>
            <StepDescription>
              zakup abonament aby Wasza strona
              <br />
              została opublikowana. Publikuj posty na blogu,
              <br />
              wstawiaj zdjęcia, opisuj detale
              <br /> - wszystko z perspektywy panelu administratora
            </StepDescription>
          </InstructionStep>
        </InstructionStepByStep>
      </InstructionSection>
    </Fragment>
  );
};
export default HomePageComponent;

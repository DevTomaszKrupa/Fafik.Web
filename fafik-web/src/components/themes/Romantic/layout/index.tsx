import React, { Fragment, useEffect } from "react";

import components from "./Romantic.styles";
import Header from "../header/index";
import { RomanticState } from "../../../../store/romantic/theme/reducers";
import { Action } from "../../../../store/actions";

type Props = {
  romanticState: RomanticState;
  getRomanticTheme: (clientPath: string) => Action;
};

const RomanticLayout = (props: Props) => {
  const {
    SingleLineHorizontal,
    DoubleLineTheme,
    AboutUsBox,
    AboutUsPhotoBox,
    AboutUsPhotoFrame,
    AboutUsPhoto,
    AboutBoxText,
    TextWelcome,
    AboutUs,
    ToRSVPButton,
    QuoteSection,
    QuoteText,
    QuoteAuthor,
    Gallery,
    GalleryOpacity,
    GalleryFrame,
    GalleryTitle,
    Title,
    Subtitle,
    GalleryCategories,
    GalleryCard,
    CategoryName,
    CategoryPhoto,
    BlogSection,
    BlogSectionFrame,
    BlogPanel,
    BlogRecentPosts,
    BlogPost,
    BlogPostPhoto,
    BlogPostDate,
    BlogPostTitle,
    ShowMoreButton,
    MapSection,
    MapCircle,
    MapTitleSubtitle,
    MapTitle,
    MapSubtitle,
    MapTextBox,
    MapButtons,
    MapButton,
    MapImage1,
    MapImage2,
    MapContent,
    EventPlanSection,
    PlanDecoration,
    PlanHeader,
    PlanHeaderText,
    EventPlan,
    EventElement,
    EventBottomElement,
    EventTopElement,
    EventIcon,
    EventDot,
    EventTime,
    EventName,
    GiftSection,
    GiftSectionFrame,
    GiftSectionHeader,
    GiftRebus,
    GiftRebuses,
    MusicSection,
    MusicSectionFrame,
    MusicSectionCircle,
    MusicCircleFrame,
    MusicCircleIcon,
    MusicSectionTitle,
    MusicInputBox,
    MusicInput,
    MusicSectionInputs,
    MusicSectionButton,
    MusicActionPanel,
    MusicButton,
    AdditionalInfoSection,
    AdditionalInfoHeader,
    AdditionalInformationsBox,
    MainInformationBox,
    InformationIcon,
    InformationTextBox,
    TextBoxHeader,
    TextBoxDescription,
    AdditionalInfo,
    AdditionalInformationsBoxes,
    AdditionalInformationsDoubleLine,
    DoubleLine,
    BottomInfoSection,
    TextBoxDescriptionBottom,
    TextBoxHeaderBottom
  } = components;

  useEffect(() => {
    props.getRomanticTheme("gaja-i-slawomir");
  }, []);

  const leftMenuItems = [
    { name: "O nas" },
    { name: "Galeria" },
    { name: "Blog" }
  ];
  const rightMenuItems = [
    { name: "Dojazd" },
    { name: "Plan wydarzenia" },
    { name: "RSVP" }
  ];
  return (
    <Fragment>
      <Header />
      <DoubleLineTheme />
      <AboutUsBox>
        <AboutUsPhotoBox>
          <AboutUsPhotoFrame>
            <AboutUsPhoto aboutUsImg={props.romanticState.aboutUsPhoto}>
              {" "}
            </AboutUsPhoto>
          </AboutUsPhotoFrame>
        </AboutUsPhotoBox>
        <AboutBoxText>
          <TextWelcome> {props.romanticState.textWelcome} </TextWelcome>
          <AboutUs> {props.romanticState.aboutUs}</AboutUs>
          <ToRSVPButton> potwierdź obecność> </ToRSVPButton>
        </AboutBoxText>
      </AboutUsBox>
      <DoubleLineTheme />
      <QuoteSection>
        <QuoteText>{props.romanticState.quote}</QuoteText>
        <SingleLineHorizontal />
        <QuoteAuthor> {props.romanticState.quoteAutor} </QuoteAuthor>
      </QuoteSection>
      <DoubleLineTheme />
      <Gallery galleryImage={props.romanticState.galleryImage}>
        <GalleryOpacity>
          <GalleryFrame>
            <GalleryTitle color="#ffffff"> GALERIA ZDJĘĆ </GalleryTitle>
            <Subtitle color="#ffffff" padding="0 0 2.5rem 0">
              Drodzy Goście, zachęcamy do obejrzenia naszej galerii <br />
              zarówno przed, jak i po uroczystości.
            </Subtitle>
            <GalleryCategories>
              <GalleryCard>
                <CategoryPhoto
                  backgroundImage={`url("http://localhost/Fafik/gaja-i-stanislaw/gallery-prep.png")`}
                />
                <CategoryName> Przygotowania </CategoryName>
              </GalleryCard>

              <GalleryCard>
                <CategoryPhoto
                  backgroundImage={`url("http://localhost/Fafik/gaja-i-stanislaw/gallery-wedding.png")`}
                />
                <CategoryName> Ślub i wesele </CategoryName>
              </GalleryCard>

              <GalleryCard>
                <CategoryPhoto
                  backgroundImage={`url("http://localhost/Fafik/gaja-i-stanislaw/gallery-session.png")`}
                />
                <CategoryName> Sesja narzeczeńska </CategoryName>
              </GalleryCard>
            </GalleryCategories>
          </GalleryFrame>
        </GalleryOpacity>
      </Gallery>

      <BlogSection>
        <BlogSectionFrame>
          <BlogPanel>
            <Title color="#0E0E06"> NASZ BLOG </Title>
            <Subtitle color="#0E0E06" padding="0 0 1rem 0">
              Są tu nasze wpisy kierowane do Was, naszych najdroższych.
            </Subtitle>
            <SingleLineHorizontal />

            <BlogRecentPosts>
              <BlogPost>
                <BlogPostPhoto
                  backgroundImage={`url("https://images.unsplash.com/photo-1553013983-15241ab69e57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80")`}
                />
                <BlogPostDate> 09.08.2020 </BlogPostDate>
                <BlogPostTitle>
                  Przygotowujemy zaproszenia,
                  <br />
                  zobaczcie!
                </BlogPostTitle>
              </BlogPost>

              <BlogPost>
                <BlogPostPhoto
                  backgroundImage={`url("https://images.unsplash.com/photo-1494319827402-c4b839aed26b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80")`}
                />
                <BlogPostDate> 09.08.2020 </BlogPostDate>
                <BlogPostTitle>
                  Przygotowujemy zaproszenia,
                  <br />
                  zobaczcie!
                </BlogPostTitle>
              </BlogPost>

              <BlogPost>
                <BlogPostPhoto
                  backgroundImage={`url("https://images.unsplash.com/photo-1535340025009-383e4507e88e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80")`}
                />
                <BlogPostDate> 09.08.2020 </BlogPostDate>
                <BlogPostTitle>
                  Przygotowujemy zaproszenia,
                  <br />
                  zobaczcie!
                </BlogPostTitle>
              </BlogPost>
            </BlogRecentPosts>

            <ShowMoreButton> ZOBACZ WIĘCEJ > </ShowMoreButton>
          </BlogPanel>
        </BlogSectionFrame>
      </BlogSection>

      <DoubleLineTheme />

      <MapSection>
        <MapImage1 />
        <MapContent>
          <MapCircle />
          <MapTextBox>
            <MapTitleSubtitle>
              <MapTitle color="#000000">
                NIE WIESZ JAK DOJECHAĆ <br />
                NA MIEJSCE?
              </MapTitle>
              <MapSubtitle>
                {" "}
                Kliknij na prostokąt z nazwą miejsca
                <br />i sprawdź lokalizację na mapie!{" "}
              </MapSubtitle>
            </MapTitleSubtitle>
            <MapButtons>
                <MapButton> DOM PANNY MŁODEJ </MapButton>
                <MapButton> KOŚCIÓŁ - ŚLUB </MapButton>
                <MapButton> KARCZMA - WESELE </MapButton>
            </MapButtons>
            
          </MapTextBox>
        </MapContent>

        <MapImage2 />
      </MapSection>

      <DoubleLineTheme />

      <EventPlanSection>
        <PlanHeader>
          <PlanDecoration />
          <PlanHeaderText> plan wydarzenia </PlanHeaderText>
        </PlanHeader>
        <EventPlan>
          <EventElement>
            <EventTopElement>
              <EventIcon />
              <EventDot />
            </EventTopElement>
            <EventBottomElement>
              <EventTime>16:00</EventTime>
              <EventName> Uroczystość zaślubin </EventName>
            </EventBottomElement>
          </EventElement>

          <EventElement>
            <EventTopElement>
              <EventIcon />
              <EventDot />
            </EventTopElement>
            <EventBottomElement>
              <EventTime>16:00</EventTime>
              <EventName> Uroczystość zaślubin </EventName>
            </EventBottomElement>
          </EventElement>

          <EventElement>
            <EventTopElement>
              <EventIcon />
              <EventDot />
            </EventTopElement>
            <EventBottomElement>
              <EventTime>16:00</EventTime>
              <EventName> Uroczystość zaślubin </EventName>
            </EventBottomElement>
          </EventElement>

          <EventElement>
            <EventTopElement>
              <EventIcon />
              <EventDot />
            </EventTopElement>
            <EventBottomElement>
              <EventTime>16:00</EventTime>
              <EventName> Uroczystość zaślubin </EventName>
            </EventBottomElement>
          </EventElement>
        </EventPlan>
      </EventPlanSection>

      <DoubleLineTheme />

      <GiftSection>
        <GiftSectionFrame>
          <GiftSectionHeader> Preferencje prezentowe </GiftSectionHeader>
          <GiftRebuses>
            <GiftRebus />
            <GiftRebus />
          </GiftRebuses>
        </GiftSectionFrame>
      </GiftSection>

      <DoubleLineTheme />

      <MusicSection>
        <MusicSectionCircle>
          <MusicCircleFrame>
            <MusicCircleIcon />
          </MusicCircleFrame>
        </MusicSectionCircle>
        <MusicSectionFrame>
          <MusicSectionTitle>
            {" "}
            MASZ SWOJĄ ULUBIONĄ PIOSENKĘ I CHCESZ USŁYSZEĆ JĄ <br />W TRAKCIE
            NASZEGO WESELA?{" "}
          </MusicSectionTitle>
          <MusicActionPanel>
            <MusicSectionInputs>
              <MusicInputBox>
                IMIĘ I NAZWISKO: <MusicInput />
              </MusicInputBox>
              <MusicInputBox>
                PROPOZYCJA PIOSENKI: <MusicInput />
              </MusicInputBox>
            </MusicSectionInputs>
            <MusicSectionButton>
              <MusicButton> WYŚLIJ </MusicButton>
            </MusicSectionButton>
          </MusicActionPanel>
        </MusicSectionFrame>
      </MusicSection>

      <DoubleLineTheme />

      <AdditionalInfoSection>
        <AdditionalInfoHeader> informacje dodatkowe </AdditionalInfoHeader>

        <AdditionalInformationsBoxes>
          <AdditionalInformationsBox>
            <MainInformationBox>
              <InformationIcon> </InformationIcon>
              <InformationTextBox>
                <TextBoxHeader> NOCLEG </TextBoxHeader>
                <TextBoxDescription>
                  {" "}
                  Różana weranda,
                  <br /> ul. Skłodowskiej-Curie 21
                  <br /> 30-315 Dołek{" "}
                </TextBoxDescription>
              </InformationTextBox>
            </MainInformationBox>
            <AdditionalInfo>
              {" "}
              Drodzy Goście, chcąc zarezerwować pokój,
              <br />
              prosimy skontaktować się z nami.{" "}
            </AdditionalInfo>
          </AdditionalInformationsBox>

          <AdditionalInformationsBox>
            <MainInformationBox>
              <InformationIcon> </InformationIcon>
              <InformationTextBox>
                <TextBoxHeader> PARKING </TextBoxHeader>
                <TextBoxDescription>
                  Kochani, zarówno przy kościele,
                  <br />
                  jak I przy sali weselnej dostępny
                  <br />
                  jest duży parking, na którym każdy
                  <br />
                  powinien znaleźć miejsce.
                </TextBoxDescription>
              </InformationTextBox>
            </MainInformationBox>
          </AdditionalInformationsBox>

          <AdditionalInformationsBox>
            <MainInformationBox>
              <InformationIcon> </InformationIcon>
              <InformationTextBox>
                <TextBoxHeader> BUSY </TextBoxHeader>
                <TextBoxDescription>
                  Będą dostępne dwa busy
                  <br />z firmy Jankowski Podróże
                  <br />
                  zaraz po Mszy Św.
                  <br />
                  oraz w godzinach:
                  <br />
                  22:00, 24:00, 3:00.
                </TextBoxDescription>
              </InformationTextBox>
            </MainInformationBox>
          </AdditionalInformationsBox>
        </AdditionalInformationsBoxes>

        <AdditionalInformationsDoubleLine>
          <DoubleLine />
        </AdditionalInformationsDoubleLine>

        <BottomInfoSection>
          <InformationIcon> </InformationIcon>

          <TextBoxHeaderBottom> KONTAKT </TextBoxHeaderBottom>
          <TextBoxDescriptionBottom>
            {" "}
            Gaja: 738 203 202{" "}
          </TextBoxDescriptionBottom>

          <TextBoxDescriptionBottom>
            {" "}
            Stanisław: 647 214 583{" "}
          </TextBoxDescriptionBottom>
        </BottomInfoSection>
      </AdditionalInfoSection>
    </Fragment>
  );
};

export default RomanticLayout;

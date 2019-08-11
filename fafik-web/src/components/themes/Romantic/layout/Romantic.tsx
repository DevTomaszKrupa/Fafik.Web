import React, { Fragment } from "react";
import components from "./Romantic.styles";

const RomanticLayout = () => {
  const {
    Header,
    Menu,
    MenuFrame,
    MenuCenter,
    SideMenu,
    Item,
    CenterNames,
    CenterDate,
    SingleLineVertical,
    SingleLineHorizontal,
    CenterQuote,
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
    MapTitle,
    MapSubtitle,
    MapTextBox,
    MapButton,
    MapImage1,
    MapImage2,
    MapContent
  } = components;

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
      <Header>
        <Menu>
          <MenuFrame>
            <SideMenu>
              {leftMenuItems.map(x => (
                <Item textAlign="right"> {x.name} </Item>
              ))}
            </SideMenu>
            <SingleLineVertical />
            <MenuCenter>
              <CenterNames>Gaja i Stanisław</CenterNames>
              <CenterDate> 09.06.2021 </CenterDate>
              <SingleLineHorizontal />
              <CenterQuote>
                "Kocha się za nic. <br /> Nie istnieje żaden powód do miłości."
              </CenterQuote>
            </MenuCenter>
            <SingleLineVertical />
            <SideMenu>
              {rightMenuItems.map(x => (
                <Item textAlign="left"> {x ? x.name : ""} </Item>
              ))}
            </SideMenu>
          </MenuFrame>
        </Menu>
      </Header>
      <DoubleLineTheme />
      <AboutUsBox>
        <AboutUsPhotoBox>
          <AboutUsPhotoFrame>
            <AboutUsPhoto> </AboutUsPhoto>
          </AboutUsPhotoFrame>
        </AboutUsPhotoBox>
        <AboutBoxText>
          <TextWelcome> Cześć kochani! </TextWelcome>
          <AboutUs>
            Nazywamy się Gaja Skawińska oraz Stanisław Miłoszewski. <br />W roku
            2021 zawieramy związek małżeński. <br />
            Zaręczyliśmy się 5 marca 2019 roku w Krakowie. <br />
            Jesteśmy bardzo szczęśliwi, iż będziemy mogli gościć Was
            <br />
            tego wielkiego dnia, kiedy staniemy się rodziną.
          </AboutUs>
          <ToRSVPButton> potwierdź obecność> </ToRSVPButton>
        </AboutBoxText>
      </AboutUsBox>
      <DoubleLineTheme />
      <QuoteSection>
        <QuoteText>
          "Będę Cię kochał dopóki niebo się nie rozchmurzy,
          <br />
          będę Cię kochał, aż żadna gwiazda nie zostanie na górze,
          <br />
          aż wszystkie spadną dla Ciebie i dla mnie"
        </QuoteText>
        <SingleLineHorizontal />
        <QuoteAuthor> ROBBIE KRIEGER </QuoteAuthor>
      </QuoteSection>
      <DoubleLineTheme />
      <Gallery>
        <GalleryOpacity>
          <GalleryFrame>
            <Title color="#ffffff"> GALERIA ZDJĘĆ </Title>
            <Subtitle color="#ffffff" padding="0 0 2.5rem 0">
              Drodzy Goście, zachęcamy do obejrzenia naszej galerii <br />
              zarówno przed, jak i po uroczystości.
            </Subtitle>
            <GalleryCategories>
              <GalleryCard>
                <CategoryPhoto
                  backgroundImage={`url("https://i.imgur.com/ItZPGj4.jpg")`}
                />
                <CategoryName> Przygotowania </CategoryName>
              </GalleryCard>

              <GalleryCard>
                <CategoryPhoto
                  backgroundImage={`url("https://i.imgur.com/i2JfGjP.jpg")`}
                />
                <CategoryName> Ślub i wesele </CategoryName>
              </GalleryCard>

              <GalleryCard>
                <CategoryPhoto
                  backgroundImage={`url("https://i.imgur.com/DTpfMt3.jpg")`}
                />
                <CategoryName> Zdjęcia grupowe </CategoryName>
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
            <MapTitle color="#000000">
              NIE WIESZ JAK DOJECHAĆ <br />
              NA MIEJSCE?
            </MapTitle>
            <MapSubtitle>
              {" "}
              Kliknij na prostokąt z nazwą miejsca
              <br />i sprawdź lokalizację na mapie!{" "}
            </MapSubtitle>

            <MapButton> DOM PANNY MŁODEJ </MapButton>
            <MapButton> KOŚCIÓŁ - ŚLUB </MapButton>
            <MapButton> KARCZMA - WESELE </MapButton>
          </MapTextBox>
        </MapContent>

        <MapImage2 />
      </MapSection>

      <DoubleLineTheme />
    </Fragment>
  );
};

export { RomanticLayout };

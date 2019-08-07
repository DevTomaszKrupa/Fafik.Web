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
    AboutUs
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
                {" "}
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
        {" "}
        <AboutUsPhotoBox>
          {" "}
          <AboutUsPhotoFrame>
            {" "}
            <AboutUsPhoto> </AboutUsPhoto>{" "}
          </AboutUsPhotoFrame>{" "}
        </AboutUsPhotoBox>{" "}
        <AboutBoxText>
          <TextWelcome> Cześć kochani! </TextWelcome>
          <AboutUs>
            {" "}
            Nazywamy się Gaja Skawińska oraz Stanisław Miłoszewski. W roku 2021
            zawieramy związek małżeński. Zaręczyliśmy się 5 marca 2019 roku w
            Krakowie. Jesteśmy bardzo szczęśliwi, iż będziemy mogli gościć Was
            tego wielkiego dnia, kiedy staniemy się rodziną.{" "}
          </AboutUs>
        </AboutBoxText>
      </AboutUsBox>
    </Fragment>
  );
};

export { RomanticLayout };

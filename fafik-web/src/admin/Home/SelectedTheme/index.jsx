import React from 'react';

import { IMAGE_STORAGE } from 'application/config';

import components from './styles';

const SelectedThemeComponent = () => {
  const {
    ChoiceBox,
    ThemeOptionBox,
    SideThemePanel,
    TopDecoration,
    MainBox,
    ThemeNameBox,
    ThemeFrame,
    ThemeImage,
    BottomDecoration,
    Feature,
    CheckboxImage,
    FeatureTitle,
    FeatureDescription,
  } = components;

  return (
    <ChoiceBox>
      <ThemeOptionBox>
        <SideThemePanel>
          <TopDecoration />
          <MainBox>WASZ WYBÓR:</MainBox>
          <ThemeNameBox>Liściasty</ThemeNameBox>
        </SideThemePanel>
        <ThemeFrame>
          <ThemeImage />
        </ThemeFrame>
        <SideThemePanel>
          <TopDecoration />
          <MainBox>
            <Feature>
              <CheckboxImage src={IMAGE_STORAGE + 'app/Checkbox-checked.png'} />
              <FeatureTitle>Pakiet podstawowy</FeatureTitle>
              <FeatureDescription>
                Odliczanie, mapy, plan dnia, playlisty, <br />
                blog, przedstawienie, preferencje <br />
                prezentowe, kod QR, informacje <br />
                dodatkowe, samodzielna edycja
              </FeatureDescription>
            </Feature>
          </MainBox>
          <BottomDecoration />
        </SideThemePanel>
      </ThemeOptionBox>
    </ChoiceBox>
  );
};

export default SelectedThemeComponent;

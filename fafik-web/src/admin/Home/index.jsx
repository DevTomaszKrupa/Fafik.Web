import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { useDocumentTitle } from 'application/shared';
import { IMAGE_STORAGE } from 'application/config';

import AdminTitleSection from '../shared/AdminTitleSection';
import components from './styles';

const AdminHomeComponent = () => {
  useDocumentTitle('Moje strony');

  const adminPanelState = useSelector(state => state.adminPanelState);
  const { isLoading, client } = adminPanelState;

  const {
    WelcomeText,
    AdminHome,
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
    <Fragment>
      <AdminTitleSection title="Witajcie w panelu administratora!"></AdminTitleSection>
      <AdminHome>
        <WelcomeText>
          Cieszymy się, że jesteście. Dziękujemy za wybranie naszego portalu. <br />
          Poniżej znajduje się szablon strony, który wybraliście. Na tym etapie oraz później <br />
          (w zakładce "Ustawienia" w "Profil" w prawym górnym rogu) możecie zmienić ten wybór. <br />
          Aby przejść do etapu edytowania, należy opłacić abonament, wybierając okres ważności. <br />
        </WelcomeText>
        {isLoading && <span>loading</span>}
        {!isLoading && client && (
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
        )}
      </AdminHome>
    </Fragment>
  );
};

export default AdminHomeComponent;

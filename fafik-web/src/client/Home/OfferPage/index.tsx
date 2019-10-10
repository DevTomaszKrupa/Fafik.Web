import React, { useState } from 'react';
import RegisterForm from './RegisterForm';
import { RegisterRequest } from 'domain/models';
import { useDispatch } from 'react-redux';
import { useDocumentTitle } from 'application/shared';
import { IMAGE_STORAGE } from 'application/config';

import PageTitleBar from 'client/PageTitleBar';
import components from './styles';

const OfferPageComponent = () => {
  useDocumentTitle('Szablony - Miłość Wierność');
  const [loginFormVisible, setLoginFormVisible] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState('');
  const dispatch = useDispatch();
  const submitRegisterForm = (request: RegisterRequest) => dispatch({ type: 'REGISTER_STARTED', payload: request });

  const onThemeClicked = (theme: string) => {
    setLoginFormVisible(true);
    setSelectedTheme(theme);
  };

  const submitRegisterFormHandler = (values: any) => {
    const request = {
      ...values,
      theme: selectedTheme,
    };
    submitRegisterForm(request);
  };

  const [isMouseOn, setIsMouseOn] = useState(false);

  const {
    ThemesSection,
    ThemeElement,
    ThemeBox,
    ThemeImage,
    ThemeTop,
    TopButtons,
    DemoButton,
    ThemeText,
    ThemeName,
    ThemeDescription,
  } = components;

  return (
    <div>
      <PageTitleBar title="WYBIERZCIE SWÓJ SZABLON" />
      <ThemesSection>
        <ThemeElement>
          <ThemeBox onMouseEnter={() => setIsMouseOn(true)} onMouseLeave={() => setIsMouseOn(false)}>
            <ThemeImage isMouseOn={isMouseOn} src={`${IMAGE_STORAGE}app/Romantic-theme-img.png`} />
            <ThemeTop>
              {isMouseOn && (
                <TopButtons>
                  <DemoButton>PODGLĄD</DemoButton>
                  <DemoButton onClick={() => onThemeClicked('romantic')}>WYBIERZ</DemoButton>
                </TopButtons>
              )}
            </ThemeTop>
          </ThemeBox>
          <ThemeText>
            <ThemeName>ROMANTYCZNY</ThemeName>
            <ThemeDescription>
              WSZYSTKO DOSTĘPNE W JEDNYM MIEJSCU, ZMYSŁOWY
              <br />
              I DELIKATNY SZABLON OPARTY NA WASZYCH
              <br />
              ZDJĘCIACH, DLA FANÓW MELANCHOLIJNYCH CYTATÓW.
            </ThemeDescription>
          </ThemeText>
        </ThemeElement>

        <ThemeElement>
          <ThemeBox onMouseEnter={() => setIsMouseOn(true)} onMouseLeave={() => setIsMouseOn(false)}>
            <ThemeImage isMouseOn={isMouseOn} src={`${IMAGE_STORAGE}app/Botanic-theme-img.png`} />
            <ThemeTop>
              {isMouseOn && (
                <TopButtons>
                  <DemoButton>PODGLĄD</DemoButton>
                  <DemoButton onClick={() => onThemeClicked('botanical')}>WYBIERZ</DemoButton>
                </TopButtons>
              )}
            </ThemeTop>
          </ThemeBox>
          <ThemeText>
            <ThemeName>BOTANICZNY</ThemeName>
            <ThemeDescription>
              SZABLON DLA MIŁOŚNIKÓW ROŚLIN - DOSTĘPNY
              <br />
              W CZTERECH RÓŻNYCH WERSJACH - MONSTERY, PIWONIE
              <br />
              PUDROWY RÓŻ, PIWONIE BORDOWE, MAKI.
            </ThemeDescription>
          </ThemeText>
        </ThemeElement>

        <ThemeElement>
          <ThemeBox onMouseEnter={() => setIsMouseOn(true)} onMouseLeave={() => setIsMouseOn(false)}>
            <ThemeImage isMouseOn={isMouseOn} src={`${IMAGE_STORAGE}app/Leaves-theme-img.png`} />
            <ThemeTop>
              {isMouseOn && (
                <TopButtons>
                  <DemoButton>PODGLĄD</DemoButton>
                  <DemoButton onClick={() => onThemeClicked('leaves')}>WYBIERZ</DemoButton>
                </TopButtons>
              )}
            </ThemeTop>
          </ThemeBox>
          <ThemeText>
            <ThemeName>LISTKI</ThemeName>
            <ThemeDescription>
              POŁĄCZCIE MINIMALIZM Z MOTYWEM WASZEGO
              <br />
              WESELA. NASTAWCIE SWOICH GOŚCI NA ODPOWIEDNI
              <br />
              KLIMAT I CIESZCIE SIĘ ORGANIZACJĄ.
            </ThemeDescription>
          </ThemeText>
        </ThemeElement>
      </ThemesSection>

      {loginFormVisible && (
        <div>
          <RegisterForm submitRegisterForm={submitRegisterFormHandler} />
        </div>
      )}
    </div>
  );
};
export default OfferPageComponent;

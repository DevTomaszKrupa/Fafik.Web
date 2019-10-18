import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RegisterRequest } from 'domain/models';
import { useDocumentTitle } from 'application/shared';
import { AppState } from 'application/store/reducers';

import PageTitleBar from '../../PageTitleBar';
import RegisterForm from './RegisterForm';
import ThemeElement from './ThemeComponent';
import components from './styles';
import { SingleTheme } from './reducers';

const OfferPageComponent = () => {
  useDocumentTitle('Szablony - Miłość Wierność');
  const [selectedTheme, setSelectedTheme] = useState({} as SingleTheme);
  const dispatch = useDispatch();
  const submitRegisterForm = (request: RegisterRequest) => dispatch({ type: 'REGISTER_STARTED', payload: request });

  const onThemeClicked = (theme: SingleTheme) => {
    setSelectedTheme(theme);
  };

  const submitRegisterFormHandler = (values: any) => {
    const request = {
      ...values,
      theme: selectedTheme,
    };
    submitRegisterForm(request);
  };

  useEffect(() => {
    dispatch({ type: 'THEMES_SECTION_GET_THEME_STARTED' });
  }, []);

  const themesSectionState = useSelector((state: AppState) => state.themesSectionState);
  const { themes } = themesSectionState;

  const { SelectedThemeSection, ThemesSection, Form, Buttons, BackButton, ActionButton } = components;

  return (
    <div>
      <PageTitleBar title="WYBIERZCIE SWÓJ SZABLON" />
      <SelectedThemeSection isVisible={!!selectedTheme.themeName}>
        <ThemeElement theme={selectedTheme} />
        <Form>
          <RegisterForm submitRegisterForm={submitRegisterFormHandler} />
          <Buttons>
            <BackButton onClick={() => setSelectedTheme({} as SingleTheme)}>POWRÓT</BackButton>
            <ActionButton type="submit">ZAREJESTRUJ</ActionButton>
          </Buttons>
        </Form>
      </SelectedThemeSection>
      <ThemesSection>
        {themes.map(theme => (
          <ThemeElement theme={theme} onPreviewClickFunction={onThemeClicked} onSelectClickFunction={onThemeClicked} />
        ))}
      </ThemesSection>
    </div>
  );
};
export default OfferPageComponent;

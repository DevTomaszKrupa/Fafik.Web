import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useDocumentTitle } from 'application/shared';

import PageTitleBar from '../shared/PageTitleBar';
import RegisterForm from '../shared/RegisterForm';
import ThemeSelectionMiniature from 'domain/shared/ThemeSelectionMiniature';
import components from './styles';
import Footer from '../shared/HomeFooter';

const OfferPageComponent = () => {
  useDocumentTitle('Szablony - Miłość Wierność');
  const [selectedTheme, setSelectedTheme] = useState({});
  const dispatch = useDispatch();
  const submitRegisterForm = request => dispatch({ type: 'REGISTER_STARTED', payload: request });

  const onThemeClicked = theme => setSelectedTheme(theme);

  const submitRegisterFormHandler = values => {
    const request = {
      ...values,
      theme: selectedTheme,
    };
    submitRegisterForm(request);
  };

  useEffect(() => {
    dispatch({ type: 'THEMES_SECTION_GET_THEME_STARTED' });
  }, [dispatch]);

  const themesSectionState = useSelector(state => state.themesSectionState);
  const { themes } = themesSectionState;

  const { SelectedThemeSection, ThemesSection, Form, Buttons, BackButton, ActionButton } = components;

  return (
    <div>
      <PageTitleBar title="WYBIERZCIE SWÓJ SZABLON" />
      <SelectedThemeSection isVisible={!!selectedTheme.themeName}>
        <ThemeSelectionMiniature theme={selectedTheme} />
        <Form>
          <RegisterForm submitRegisterForm={submitRegisterFormHandler} />
          <Buttons>
            <BackButton onClick={() => setSelectedTheme({})}>POWRÓT</BackButton>
            <ActionButton type="submit">ZAREJESTRUJ</ActionButton>
          </Buttons>
        </Form>
      </SelectedThemeSection>
      <ThemesSection>
        {themes.map(theme => (
          <ThemeSelectionMiniature theme={theme} onPreviewClickFunction={onThemeClicked} onSelectClickFunction={onThemeClicked} />
        ))}
      </ThemesSection>
      <Footer />
    </div>
  );
};
export default OfferPageComponent;

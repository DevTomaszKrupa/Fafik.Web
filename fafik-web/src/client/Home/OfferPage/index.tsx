import React, { useState, useEffect } from 'react';
import RegisterForm from './RegisterForm';
import { RegisterRequest } from 'domain/models';
import { useDispatch, useSelector } from 'react-redux';
import { useDocumentTitle } from 'application/shared';
import { AppState } from 'application/store/reducers';

import PageTitleBar from 'client/PageTitleBar';
import ThemeElement from './ThemeComponent';
import components from './styles';
import { SingleTheme } from './reducers';

const OfferPageComponent = () => {
  useDocumentTitle('Szablony - Miłość Wierność');
  const [loginFormVisible, setLoginFormVisible] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState({} as SingleTheme);
  const dispatch = useDispatch();
  const submitRegisterForm = (request: RegisterRequest) => dispatch({ type: 'REGISTER_STARTED', payload: request });

  const onThemeClicked = (theme: SingleTheme) => {
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

  useEffect(() => {
    dispatch({ type: 'THEMES_SECTION_GET_THEME_STARTED' });
  }, []);

  const themesSectionState = useSelector((state: AppState) => state.themesSectionState);
  const { themes } = themesSectionState;

  const { ThemesSection, BackButton } = components;

  return (
    <div>
      <PageTitleBar title="WYBIERZCIE SWÓJ SZABLON" />
      {selectedTheme.themeName && (
        <div>
          <ThemeElement theme={selectedTheme} />
          <BackButton onClick={() => setSelectedTheme({} as SingleTheme)}>WRÓĆ</BackButton>
          {loginFormVisible && (
            <div>
              <RegisterForm submitRegisterForm={submitRegisterFormHandler} />
            </div>
          )}
        </div>
      )}
      <ThemesSection>
        {themes.map(theme => (
          <ThemeElement theme={theme} onPreviewClickFunction={onThemeClicked} onSelectClickFunction={onThemeClicked} />
        ))}
      </ThemesSection>
    </div>
  );
};
export default OfferPageComponent;

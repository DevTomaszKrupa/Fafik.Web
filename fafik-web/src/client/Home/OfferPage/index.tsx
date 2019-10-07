import React, { useState } from 'react';
import RegisterForm from './RegisterForm';
import { RegisterRequest } from 'domain/models';
import { useDispatch } from 'react-redux';
import { useDocumentTitle } from 'application/shared';

import PageTitleBar from 'client/PageTitleBar';

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

  return (
    <div>
      <PageTitleBar title="WYBIERZCIE SWÓJ SZABLON" />
      <ul>
        <li onClick={() => onThemeClicked('leaves')}>LEAVES</li>
        <li onClick={() => onThemeClicked('romantic')}>ROMANTIC</li>
      </ul>

      {loginFormVisible && (
        <div>
          <RegisterForm submitRegisterForm={submitRegisterFormHandler} />
        </div>
      )}
    </div>
  );
};
export default OfferPageComponent;

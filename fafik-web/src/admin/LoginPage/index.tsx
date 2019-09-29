import React from 'react';

import components from './styles';
import LoginForm from './LoginForm';

const LoginPageComponent = () => {
  const { LoginPage, LoginFormBox, Header } = components;
  return (
    <LoginPage>
      <LoginFormBox>
        <Header>Witaj w Miłość Wierność!</Header>
        <LoginForm></LoginForm>
      </LoginFormBox>
    </LoginPage>
  );
};

export default LoginPageComponent;

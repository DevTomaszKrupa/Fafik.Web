import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { RegisterRequest, LoginRequest } from 'domain/models';

import components from './styles';
import PageTitleBar from '../shared/PageTitleBar';
import LoginForm from '../shared/LoginForm';
import Footer from '../shared/HomeFooter';

const LoginPageComponent = () => {
  const [loginClicked, setloginClicked] = useState(false);
  const [registerClicked, setregisterClicked] = useState(false);
  const dispatch = useDispatch();
  const submitRegisterForm = (request: RegisterRequest) => dispatch({ type: 'REGISTER_STARTED', payload: request });
  const submitLoginForm = (request: LoginRequest) => dispatch({ type: 'LOGIN_STARTED', payload: request });

  const OnLoginClick = () => {
    setregisterClicked(false);
    setloginClicked(!loginClicked);
  };

  const OnRegisterClick = () => {
    setloginClicked(false);
    setregisterClicked(!registerClicked);
  };

  const submitLoginFormHandler = (values: LoginRequest) => {
    submitLoginForm(values);
  };

  const submitRegisterFormHandler = (values: any) => {
    const request = {
      ...values,
    };
    submitRegisterForm(request);
  };

  const {
    LoginPage,
    LoginFormBox,
    IntroBar,
    IntroTitle,
    IntroSubitle,
    ActionBoxes,
    ActionBox,
    ActionBoxDecoration,
    ActionText,
    Question,
    Action,
    RegisterFormBox,
    Form,
    ActionButton,
  } = components;

  return (
    <LoginPage>
      <PageTitleBar title="ZALOGUJ LUB ZAREJESTRUJ KONTO" />
      <IntroBar>
        <IntroTitle>Dołączcie do grona zadowolonych klientów</IntroTitle>
        <IntroSubitle>
          PO REJESTRACJI MOŻECIE PRZEJŚĆ DO EDYCJI SZABLONU, NASTĘPNIE PŁATNOŚCI, <br />
          BĄDŹ ODWROTNIE. TAK, JAK WAM PASUJE!{' '}
        </IntroSubitle>
      </IntroBar>
      <ActionBoxes>
        <ActionBox onClick={OnLoginClick} boxStyle="left">
          <ActionBoxDecoration boxStyle="left" />
          <ActionText boxStyle="left">
            <Question>MACIE JUŻ KONTO?</Question>
            <Action>zaloguj.</Action>
          </ActionText>
        </ActionBox>
        <ActionBox onClick={OnRegisterClick} boxStyle="right">
          <ActionText boxStyle="right">
            <Question>NIE MACIE JESZCZE KONTA?</Question>
            <Action>zarejestruj.</Action>
          </ActionText>
          <ActionBoxDecoration boxStyle="right" />
        </ActionBox>
      </ActionBoxes>

      <LoginFormBox isDisplayed={loginClicked}>
        <LoginForm submitLoginForm={submitLoginFormHandler}></LoginForm>
        <ActionButton type="submit" form="login-form-id">
          ZALOGUJ
        </ActionButton>
      </LoginFormBox>

      <RegisterFormBox isDisplayed={registerClicked}>
        <Form submitRegisterForm={submitRegisterFormHandler} />
        <ActionButton type="submit">ZAREJESTRUJ</ActionButton>
      </RegisterFormBox>

      <Footer />
    </LoginPage>
  );
};

export default LoginPageComponent;

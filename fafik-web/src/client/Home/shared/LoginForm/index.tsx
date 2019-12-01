import React, { useEffect } from 'react';
import useForm from 'react-hook-form';
import { useSelector } from 'react-redux';
import components from './styles';

import { history } from 'application/helpers';

import FafikFormInput from '../FafikFormInput';

const LoginFormComponent = (props: any) => {
  const { submitLoginForm } = props;
  const loginState = useSelector((state: any) => state.loginState);
  const { loginCallSuccessful, errorMessage } = loginState;

  const { register, setValue, errors, getValues, handleSubmit } = useForm();

  useEffect(() => {
    if (loginCallSuccessful) history.push('/admin');
  }, [loginCallSuccessful]);

  const onSubmit = (data: any) => {
    submitLoginForm(data);
  };

  const onCheckboxTextClicked = () => {
    const values = getValues();
    setValue('rememberPassword', !values.rememberPassword);
  };

  const { LoginForm, SectionTitle, Subtitle, MainForm, LoginInputs, GeneralInputs, CheckboxBox, CheckboxText } = components;

  return (
    <LoginForm id="login-form-id" onSubmit={handleSubmit(onSubmit)}>
      <SectionTitle>LOGOWANIE</SectionTitle>
      <Subtitle>Zaczynijcie organizację Waszego dnia już teraz i zalogujcie się na swoje konto!</Subtitle>
      <MainForm>
        <LoginInputs>
          <FafikFormInput
            label="E-MAIL:"
            type="text"
            name="email"
            required={true}
            errors={errors}
            register={register}
            errorMessage="Login nie może być pusty"
          />
          <FafikFormInput
            label="HASŁO:"
            type="password"
            name="password"
            required={true}
            errors={errors}
            register={register}
            errorMessage="Hasło nie może być puste"
          />
        </LoginInputs>
        <GeneralInputs>
          <CheckboxBox>
            <input name="rememberPassword" type="checkbox" ref={register} />
            <CheckboxText onClick={onCheckboxTextClicked}>ZAPAMIĘTAJ NA TYM KOMPUTERZE</CheckboxText>
          </CheckboxBox>
        </GeneralInputs>
      </MainForm>
      {errorMessage && <span>{errorMessage}</span>}
    </LoginForm>
  );
};

export default LoginFormComponent;

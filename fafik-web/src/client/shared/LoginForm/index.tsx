import React, { useEffect, useState } from 'react';
import { InjectedFormProps, Field, reduxForm, getFormValues } from 'redux-form';
import { useSelector } from 'react-redux';
import components from './styles';

import { AppState } from 'application/store/reducers';
import { LoginRequest } from 'domain/models';
import { history } from 'application/helpers';

import FormInput from '../FormInput';

type Props = {
  submitLoginForm: (request: LoginRequest) => void;
};

const LoginFormComponent = (props: Props & InjectedFormProps<{}, Props>) => {
  const {
    LoginForm,
    SectionTitle,
    Subtitle,
    MainForm,
    LoginInputs,
    InputBox,
    GeneralInputs,
    CheckboxBox,
    Checkbox,
    CheckboxText,
    FormField,
  } = components;
  const { submitLoginForm } = props;
  const adminLoginState = useSelector((state: AppState) => state.adminLoginState);
  const values = useSelector((state: AppState) => getFormValues('login-form')(state));
  const { loginCallSuccessful } = adminLoginState;

  const [checkboxIsChecked, setcheckboxIsChecked] = useState(false);

  useEffect(() => {
    if (loginCallSuccessful) history.push('/admin');
  }, [loginCallSuccessful]);

  const handleSubmit = (e: any) => {
    console.log(values);
    e.preventDefault();
    submitLoginForm(values as LoginRequest);
  };

  const onCheckboxTextClicked = () => setcheckboxIsChecked(!checkboxIsChecked);

  return (
    <LoginForm id="login-form-id" onSubmit={handleSubmit}>
      <SectionTitle>LOGOWANIE</SectionTitle>
      <Subtitle>Zaczynijcie organizację Waszego dnia już teraz i zalogujcie się na swoje konto!</Subtitle>
      <MainForm>
        <LoginInputs>
          <InputBox>
            E-MAIL: <FormInput name="email" type="email" />
          </InputBox>
          <InputBox>
            HASŁO: <FormInput name="password" type="text" />
          </InputBox>
        </LoginInputs>
        <GeneralInputs>
          <CheckboxBox>
            <Field name="rememberPassword" component={Checkbox} type="checkbox" />
            <CheckboxText onClick={onCheckboxTextClicked}>ZAPAMIĘTAJ NA TYM KOMPUTERZE</CheckboxText>
          </CheckboxBox>
        </GeneralInputs>
      </MainForm>
    </LoginForm>
  );
};

const component = reduxForm<{}, Props>({ form: 'login-form' })(LoginFormComponent);
export default component;

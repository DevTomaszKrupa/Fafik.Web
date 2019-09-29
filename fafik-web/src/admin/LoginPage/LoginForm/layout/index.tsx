import React, { useEffect } from 'react';
import { InjectedFormProps, Field } from 'redux-form';
import components from './LoginForm.style';

import { LoginRequest } from 'domain/models';
import { Action } from 'application/store/actions';
import { AdminLoginState } from 'application/store/admin/login/reducers';
import { history } from 'application/helpers';

type Props = {
  values: LoginRequest;
  adminLoginState: AdminLoginState;
  login: (request: LoginRequest) => Action<LoginRequest>;
};

const LoginFormComponent = (props: InjectedFormProps & Props) => {

  const { LoginForm, LoginButton, FieldBox } = components;
  const { values, login, adminLoginState } = props;
  const { loginCallSuccessful } = adminLoginState;

  useEffect(() => {
    if (loginCallSuccessful)
      history.push('/admin');
  }, [loginCallSuccessful]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    login(values);
  };

  return (
    <LoginForm onSubmit={handleSubmit}>
      <FieldBox>
        <span> Email</span>
        <Field name="email" component="input" type="email" />
      </FieldBox>
      <FieldBox>
        <span> Password</span>
        <Field name="password" component="input" type="text" />
      </FieldBox>

      <LoginButton>
        <button type="submit"> Login </button>
      </LoginButton>
    </LoginForm>
  );
};

export default LoginFormComponent;

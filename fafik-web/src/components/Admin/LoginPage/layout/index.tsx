import React, { Fragment } from 'react';

import components from './LoginPage.style';
import LoginForm from '../LoginForm';

const LoginPageComponent = () => {

    const { LoginPage, LoginFormBox, Header } = components;
    return (
        <LoginPage>
            <LoginFormBox>
                <Header>
                    Witaj w Miłość Wierność!
                </Header>
                <LoginForm></LoginForm>
            </LoginFormBox>
        </LoginPage>);
};

export default LoginPageComponent;

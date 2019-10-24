import React, { Fragment, useState } from 'react';
import { InjectedFormProps, Field, reduxForm, getFormValues } from 'redux-form';
import { useSelector } from 'react-redux';
import { AppState } from 'application/store/reducers';

import FormInput from './RegisterFormInput';
import components from './styles';

const formName = 'register-form';

type Props = {
  submitRegisterForm: (values: any) => void;
};

const RegisterComponent = (props: Props & InjectedFormProps<{}, Props>) => {
  const values = useSelector((state: AppState) => getFormValues(formName)(state));
  const [checkboxIsChecked, setcheckboxIsChecked] = useState(false);
  const { submitRegisterForm } = props;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    submitRegisterForm(values);
  };

  const onCheckboxTextClicked = () => setcheckboxIsChecked(!checkboxIsChecked);

  const { SectionTitle, Subtitle, MainForm, LoginInputs, InputBox, GeneralInputs, CheckboxBox, Checkbox, CheckboxText } = components;

  return (
    <Fragment>
      <SectionTitle>REJESTRACJA</SectionTitle>
      <Subtitle>
        Rejestracja to pierwszy krok do założenia strony. Wypełnijcie formularz, potwierdźcie maila,
        <br />
        następnie przejdźcie do płatności lub wcześniej projektowania.
      </Subtitle>
      <MainForm onSubmit={handleSubmit}>
        <LoginInputs>
          <InputBox>
            E-MAIL: <Field name="email" component={FormInput} type="email" />
          </InputBox>
          <InputBox>
            HASŁO: <Field name="password" component={FormInput} type="password" />
          </InputBox>
          <Subtitle>
            Hasło powinno zawierać przynajmniej jedną cyfrę i literę
            <br />
            oraz mieć min. 8 znaków.
          </Subtitle>
          <InputBox>
            POWTÓRZ HASŁO: <Field name="confirmpassword" component={FormInput} type="password" />
          </InputBox>
        </LoginInputs>
        <GeneralInputs>
          <InputBox>
            WASZE IMIONA: <Field placeholder="pierwsze imię" name="username" component={FormInput} type="text" />
          </InputBox>
          <InputBox>
            <Field placeholder="drugie imię" name="username" component={FormInput} type="text" />
          </InputBox>
          <CheckboxBox>
            <Checkbox type="checkbox" checked={checkboxIsChecked} onClick={onCheckboxTextClicked} />
            <CheckboxText onClick={onCheckboxTextClicked}>
              AKCEPTUJĘ REGULAMIN STRONY WWW.MILOSCWIERNOSC.PL/
              <br />
              FIRMY CORGISOFTWARE Z SIEDZIBĄ W RZESZOWIE,
              <br />
              UL. PADAREWSKIEGO 51B.
            </CheckboxText>
          </CheckboxBox>
        </GeneralInputs>
      </MainForm>
    </Fragment>
  );
};

const component = reduxForm<{}, Props>({ form: formName })(RegisterComponent);

export default component;

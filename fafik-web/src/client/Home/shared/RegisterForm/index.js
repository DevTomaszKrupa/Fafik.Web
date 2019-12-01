import React, { Fragment } from 'react';
import useForm from 'react-hook-form';

import FafikFormInput from '../FafikFormInput';
import components from './styles';

const RegisterForm = props => {
  const { register, setValue, errors, getValues, handleSubmit } = useForm();
  const { submitRegisterForm } = props;

  const onCheckboxTextClicked = () => {
    const values = getValues();
    setValue('acceptTheTerms', !values.acceptTheTerms);
  };

  const onSubmit = data => {
    submitRegisterForm(data);
  };

  const { SectionTitle, Subtitle, MainForm, LoginInputs, GeneralInputs, CheckboxBox, CheckboxText } = components;

  return (
    <Fragment>
      <SectionTitle>REJESTRACJA</SectionTitle>
      <Subtitle>
        Rejestracja to pierwszy krok do założenia strony. Wypełnijcie formularz, potwierdźcie maila,
        <br />
        następnie przejdźcie do płatności lub wcześniej projektowania.
      </Subtitle>
      <MainForm id="register-form" onSubmit={handleSubmit(onSubmit)}>
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
          <Subtitle>
            Hasło powinno zawierać przynajmniej jedną cyfrę i literę <br /> oraz mieć min. 8 znaków.
          </Subtitle>
          <FafikFormInput
            label="POWTÓRZ HASŁO:"
            type="password"
            name="confirmpassword"
            required={true}
            errors={errors}
            register={register}
            errorMessage="Hasło nie może być puste"
          />
        </LoginInputs>
        <GeneralInputs>
          <FafikFormInput
            label="WASZE IMIONA:"
            type="text"
            placeholder="pierwsze imię"
            name="personone"
            required={true}
            errors={errors}
            register={register}
            errorMessage="Wprowadź imię"
          />
          <FafikFormInput
            type="text"
            placeholder="drugie imię"
            name="persontwo"
            required={true}
            errors={errors}
            register={register}
            errorMessage="Wprowadź imię"
          />
          <CheckboxBox>
            <input name="acceptTheTerms" type="checkbox" ref={register} />
            <CheckboxText onClick={onCheckboxTextClicked}>
              AKCEPTUJĘ REGULAMIN STRONY WWW.MILOSCWIERNOSC.PL <br />
              FIRMY CORGISOFTWARE Z SIEDZIBĄ W RZESZOWIE, <br />
              UL. PADAREWSKIEGO 51B.
            </CheckboxText>
          </CheckboxBox>
        </GeneralInputs>
      </MainForm>
    </Fragment>
  );
};
export default RegisterForm;

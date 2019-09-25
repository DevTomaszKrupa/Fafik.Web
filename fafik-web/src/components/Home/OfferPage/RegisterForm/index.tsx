import React from 'react';
import { InjectedFormProps, Field, reduxForm, getFormValues } from 'redux-form';
import { useSelector } from 'react-redux';
import { AppState } from '../../../../store/reducers';

const formName = 'register-form';

type Props = {
  submitRegisterForm: (values: any) => void;
};

const RegisterComponent = (props: Props & InjectedFormProps<{}, Props>) => {

  const values = useSelector((state: AppState) => getFormValues(formName)(state));
  const { submitRegisterForm } = props;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    submitRegisterForm(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      Email: <Field name="email" component="input" type="email" />
      Hasło: <Field name="password" component="input" type="text" />
      Powtórz Hasło: <Field name="confirmpassword" component="input" type="text" />
      <button type="submit"> Załóż konto i przejdz do edycji za darmo! </button>
    </form>
  );
};


const component = reduxForm<{}, Props>({ form: formName })(RegisterComponent);

export default component;

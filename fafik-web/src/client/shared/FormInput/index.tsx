import React from 'react';

import components from './styles';

const { FormInput } = components;

const FormInputComponent = (props: any) => {
  return <FormInput component="input"  {...props} />;
};
export default FormInputComponent;

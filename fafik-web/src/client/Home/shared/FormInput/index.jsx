import React from 'react';

import components from './styles';

const { FormInput } = components;

const FormInputComponent = props => {
  return <FormInput {...props} ref={props.ref} />;
};

export default FormInputComponent;

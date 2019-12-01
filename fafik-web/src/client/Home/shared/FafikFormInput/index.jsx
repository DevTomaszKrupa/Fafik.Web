import React from 'react';

import components from './styles';

const FafikFormInput = props => {
  const { name, type, required, placeholder, errorMessage, label, register, errors } = props;
  const { FormInput, LabelInputBox, ErrorMessage } = components;

  return (
    <div>
      <LabelInputBox>
        {label && <label>{label}</label>}
        <FormInput name={name} type={type} placeholder={placeholder} ref={register({ required: required })} />
      </LabelInputBox>
      <ErrorMessage>{errors[name] && errorMessage}</ErrorMessage>
    </div>
  );
};
export default FafikFormInput;

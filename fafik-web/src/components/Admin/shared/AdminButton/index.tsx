import React, { Fragment } from 'react';

import components from './styles';

type Props = {
  buttonText: string;
  buttonStyle: 'gray' | 'pink';
};

const AdminButton = (props: Props) => {
  const { AButton } = components;
  return (
    <AButton buttonStyle={props.buttonStyle}> {props.buttonText} </AButton>
  );
};

export default AdminButton;

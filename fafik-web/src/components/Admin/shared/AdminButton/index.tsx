import React from 'react';

import components from './styles';

type Props = {
  buttonText: string;
  buttonStyle: 'gray' | 'pink';
  onClick?: () => void; // TODO: make it required
};

const AdminButton = (props: Props) => {
  const { AButton } = components;
  return (
    <AButton buttonStyle={props.buttonStyle} onClick={props.onClick}> {props.buttonText} </AButton>
  );
};

export default AdminButton;

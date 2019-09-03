import React from 'react';

import components from './RomanticButton.styled';

type Props = {
  buttonStyle: 'green' | 'red';
  children: any;
};

const RomanticButton = (props: Props) => {
  const {
    Button,
  } = components;

  return (
    <Button buttonStyle={props.buttonStyle}>
      {props.children}
    </Button>

  );
};
export default RomanticButton;

import React from 'react';

import components from './RomanticSelect.styled';

type Props = {
  options: any;
  placeholder?: string;
};

const RomanticSelect = (props: Props) => {
  const {
    Select,
  } = components;

  const { options, placeholder } = props;

  return (
    <Select
      options={options}
      placeholder={placeholder}
    />

  );
};
export default RomanticSelect;

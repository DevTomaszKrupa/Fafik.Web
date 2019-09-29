import React from 'react';

type Props = {
  onClick: () => void;
  label: string;
};

const FafikButton = (props: Props) => {
  const { onClick, label } = props;

  return <button onClick={onClick}>{label}</button>;
};

export { FafikButton };

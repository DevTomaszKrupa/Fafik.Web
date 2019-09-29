import React from 'react';

type Props = {
  path: string;
};

const FafikImage = (props: Props) => {
  const { path } = props;

  return (
    <img src={'http://localhost/fafik/' + path} alt="couple" />
  );
};

export { FafikImage };

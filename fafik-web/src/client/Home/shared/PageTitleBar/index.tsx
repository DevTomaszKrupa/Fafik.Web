import React from 'react';

import components from './styles';

type Props = {
  title: string;
};

const PageTitleComponent = (props: Props) => {
  const { PageTitle } = components;

  return <PageTitle> {props.title} </PageTitle>;
};
export default PageTitleComponent;

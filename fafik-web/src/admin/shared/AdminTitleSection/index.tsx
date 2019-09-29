import React, { Fragment } from 'react';

import components from './styles';

type Props = {
  title: string;
};

const AdminTitleSection = (props: Props) => {
  const { TitlePanel, Title, } = components;
  return (
    <Fragment>
      <TitlePanel>
        <Title> {props.title} </Title>
      </TitlePanel>
    </Fragment>
  );
};

export default AdminTitleSection;

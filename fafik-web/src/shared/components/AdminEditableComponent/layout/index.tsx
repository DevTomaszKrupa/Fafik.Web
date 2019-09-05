import React, { Fragment } from 'react';

import components from './AdminEditableComponent.styles';

import { Action } from '../../../../store/actions';

type Props = {
  children: any;
  itemId: string;
  adminMode?: boolean;
  editAdminEditableTextComponent: (itemId: string) => Action<string>
};

const AdminEditableComponent = (props: Props) => {
  const { children, adminMode, editAdminEditableTextComponent, itemId } = props;
  const { Container } = components;

  return (
    <Fragment>
      {adminMode && <Container onClick={() => editAdminEditableTextComponent(itemId)}>{children}</Container>}
      {!adminMode && children}
    </Fragment>
  );
};

export default AdminEditableComponent;

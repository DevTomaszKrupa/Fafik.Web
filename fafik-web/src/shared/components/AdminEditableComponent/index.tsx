import React, { Fragment } from 'react';

import components from './AdminEditableComponent.styles';

import { useDispatch } from 'react-redux';

type Props = {
  children: any;
  itemId: string;
  adminMode?: boolean;
};

const AdminEditableComponent = (props: Props) => {

  const dispatch = useDispatch();
  const editAdminEditableTextComponent = (item: string) => dispatch({ type: 'EDIT_ADMIN_EDITABLE_TEXT_COMPONENT_CLICK', payload: item });

  const { children, adminMode, itemId } = props;
  const { Container } = components;

  return (
    <Fragment>
      {adminMode && <Container onClick={() => editAdminEditableTextComponent(itemId)}>{children}</Container>}
      {!adminMode && children}
    </Fragment>
  );
};

export { AdminEditableComponent };

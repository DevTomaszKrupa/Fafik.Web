import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import components from './styles';

const AdminEditableComponent = props => {
  const { children, adminMode, itemId, textValue } = props;
  const dispatch = useDispatch();

  const editAdminEditableTextComponent = () =>
    dispatch({ type: 'EDITOR_EDITABLE_TEXT_COMPONENT_CLICK', payload: { itemId, textValue: textValue } });

  const { Container } = components;

  return (
    <Fragment>
      {adminMode && <Container onClick={() => editAdminEditableTextComponent()}>{children}</Container>}
      {!adminMode && children}
    </Fragment>
  );
};

AdminEditableComponent.propTypes = {
  children: PropTypes.any.isRequired,
  itemId: PropTypes.string.isRequired,
  textValue: PropTypes.string.isRequired,
  adminMode: PropTypes.bool,
};

AdminEditableComponent.defaultProps = {
  adminMode: false,
};

export { AdminEditableComponent };

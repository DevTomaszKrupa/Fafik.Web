import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import components from './styles';

const AdminEditableImageComponent = props => {
  const { children, adminMode, itemId, imageSrc } = props;
  const dispatch = useDispatch();

  const editAdminEditableImageComponent = () => dispatch({ type: 'EDITOR_EDITABLE_IMAGE_COMPONENT_CLICK', payload: { itemId, imageSrc } });

  const { Container } = components;

  return (
    <Fragment>
      {adminMode && <Container onClick={() => editAdminEditableImageComponent()}>{children}</Container>}
      {!adminMode && children}
    </Fragment>
  );
};

AdminEditableImageComponent.propTypes = {
  children: PropTypes.any.isRequired,
  itemId: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  adminMode: PropTypes.bool,
};

AdminEditableImageComponent.defaultProps = {
  adminMode: false,
};

export { AdminEditableImageComponent };

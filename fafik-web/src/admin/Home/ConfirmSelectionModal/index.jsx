import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';

const ConfirmSelectionModal = props => {
  const confirmSelectionModalState = useSelector(state => state.confirmSelectionModalState);
  const dispatch = useDispatch();
  const closeModal = () => dispatch({ type: 'CLOSE_CONFIRM_SELECTION_MODAL' });
  const onConfirmClick = () => dispatch({ type: 'INITIALIZE_THEME_STARTED', payload: theme.themeId });

  const { isOpen, theme, isLoading, errorMessage } = confirmSelectionModalState;
  const { className, onAfterClose } = props;

  const contentClassName = `${className}__content`;
  const overlayClassName = `${className}__overlay`;

  return (
    <Modal
      portalClassName={className}
      className={contentClassName}
      overlayClassName={overlayClassName}
      onAfterClose={onAfterClose}
      isOpen={isOpen}
      onRequestClose={closeModal}
    >
      <h2>Twój wybór</h2>
      <div>Wybrałeś motyw: {theme && theme.name}</div>

      <button>Zmień wybór</button>
      <button onClick={onConfirmClick}>Potwierdź</button>
      {isLoading && <span>loading...</span>}
      {errorMessage && <span>{errorMessage}</span>}
    </Modal>
  );
};

Modal.setAppElement('body');

ConfirmSelectionModal.propTypes = {
  onAfterClose: PropTypes.func,
};

ConfirmSelectionModal.deafultProps = {
  onAfterClose: undefined,
};

const StyleConfirmSelectionModal = styled(ConfirmSelectionModal)`
  &__overlay {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: rgba(0, 0, 0, 0.5);
  }

  &__content {
    padding: 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    background: white;
  }
`;

export default StyleConfirmSelectionModal;

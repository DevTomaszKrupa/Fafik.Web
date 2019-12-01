import React, { useEffect } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

const ConfirmSelectionModal = props => {
  const adminHomeState = useSelector(state => state.adminHomeState);
  const dispatch = useDispatch();
  const closeModal = () => dispatch({ type: 'CLOSE_CONFIRM_SELECTION_MODAL' });
  const onConfirmClick = () => dispatch({ type: 'INITIALIZE_THEME_STARTED' });

  const {
    confirmSelectionModalIsOpen,
    confirmSelectionModalTheme,
    confirmSelectionModalThemeLoading,
    confirmSelectionModalThemeSuccessfulConfirmation,
  } = adminHomeState;
  const { className } = props;

  const contentClassName = `${className}__content`;
  const overlayClassName = `${className}__overlay`;

  useEffect(() => {
    if (confirmSelectionModalThemeSuccessfulConfirmation) dispatch({ type: 'CLOSE_CONFIRM_SELECTION_MODAL' });
  }, [confirmSelectionModalThemeSuccessfulConfirmation, dispatch]);

  return (
    <Modal
      portalClassName={className}
      className={contentClassName}
      overlayClassName={overlayClassName}
      isOpen={confirmSelectionModalIsOpen}
      onRequestClose={closeModal}
    >
      <h2>Twój wybór</h2>
      <div>Wybrałeś motyw: {confirmSelectionModalTheme && confirmSelectionModalTheme.themeName}</div>

      <button>Zmień wybór</button>
      <button onClick={onConfirmClick}>Potwierdź</button>
      {confirmSelectionModalThemeLoading && <span>loading...</span>}
    </Modal>
  );
};

Modal.setAppElement('body');

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

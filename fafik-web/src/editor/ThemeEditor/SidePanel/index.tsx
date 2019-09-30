import React from 'react';
import { useSelector } from 'react-redux';

import { history } from 'application/helpers';
import { AppState } from 'application/store/reducers';
import TextEditor from './TextEditor';

const AdminThemeEditorSidePanelComponent = () => {
  const leaveEditor = () => history.push('/admin');
  const adminEditorSidePanelState = useSelector((state: AppState) => state.adminEditorSidePanelState);

  return (
    <div>
      PANEL EDYCJI <button onClick={leaveEditor}> Powrót </button>
      {adminEditorSidePanelState.editor === 'text' && <TextEditor />}
    </div>
  );
};

export default AdminThemeEditorSidePanelComponent;

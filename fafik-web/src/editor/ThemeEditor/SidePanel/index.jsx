import React from 'react';
import { useSelector } from 'react-redux';

import { history } from 'application/helpers';
import TextEditor from './TextEditor';

const AdminThemeEditorSidePanelComponent = props => {
  const leaveEditor = () => history.push('/admin');
  const editorSidePanelState = useSelector(state => state.editorSidePanelState);

  return (
    <div>
      PANEL EDYCJI <button onClick={leaveEditor}> Powrót </button>
      {editorSidePanelState.editor === 'text' && <TextEditor siteName={props.match.params.siteName} />}
    </div>
  );
};

export default AdminThemeEditorSidePanelComponent;

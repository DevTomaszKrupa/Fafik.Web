import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const AdminThemeEditorTextEditorComponent = props => {
  const editorSidePanelState = useSelector(state => state.editorSidePanelState);
  const dispatch = useDispatch();
  const { siteName } = props;

  const updateTextValue = textValue =>
    dispatch({
      type: 'EDITOR_SITE_PANEL_UPDATE_TEXT_VALUE',
      payload: { itemId: editorSidePanelState.itemId, textValue: textValue },
    });

  const saveTextValue = () =>
    dispatch({
      type: 'API_EDITOR_SAVE_TEXT_VALUE_STARTED',
      payload: { siteName: siteName, itemId: editorSidePanelState.itemId, textValue: editorSidePanelState.textValue },
    });

  return (
    <div>
      <textarea value={editorSidePanelState.textValue} onChange={e => updateTextValue(e.target.value)} />
      <button onClick={() => saveTextValue()}>Zapisz</button>
    </div>
  );
};

export default AdminThemeEditorTextEditorComponent;

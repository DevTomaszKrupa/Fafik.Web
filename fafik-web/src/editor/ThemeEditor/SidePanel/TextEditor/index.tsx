import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from 'application/store/reducers';

const AdminThemeEditorTextEditorComponent = () => {
  const adminEditorSidePanelState = useSelector((state: AppState) => state.adminEditorSidePanelState);
  const dispatch = useDispatch();
  const updateTextValue = (value: string) =>
    dispatch({
      type: 'EDITOR_SITE_PANEL_UPDATE_TEXT_VALUE',
      payload: { itemId: adminEditorSidePanelState.itemId, textValue: value },
    });

  return (
    <div>
      <textarea value={adminEditorSidePanelState.textValue} onChange={e => updateTextValue(e.target.value)} />
      <button>Zapisz</button>
    </div>
  );
};

export default AdminThemeEditorTextEditorComponent;

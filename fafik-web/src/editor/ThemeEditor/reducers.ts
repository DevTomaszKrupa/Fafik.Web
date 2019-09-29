import { Reducer } from 'redux';
import { Action } from 'application/store/actions';

export type AdminEditorSidePanelState = {
  editor: 'none' | 'text' | 'image';
  itemId: string;
  textValue: string;
};

const initialState: AdminEditorSidePanelState = {
  editor: 'none',
  itemId: '',
  textValue: '',
};

export const adminEditorSidePanelState: Reducer<
  AdminEditorSidePanelState,
  Action
> = (state = initialState, action: Action): AdminEditorSidePanelState => {
  switch (action.type) {
    case 'EDIT_ADMIN_EDITABLE_TEXT_COMPONENT_CLICK': {
      const { itemId, textValue } = action.payload;
      return {
        ...state,
        editor: 'text',
        itemId: itemId,
        textValue: textValue,
      };
    }
    case 'EDITOR_SITE_PANEL_UPDATE_TEXT_VALUE': {
      const { textValue } = action.payload;
      return {
        ...state,
        textValue: textValue,
      };
    }
    default:
      return state;
  }
};

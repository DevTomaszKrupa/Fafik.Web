import { Action } from './../../actions';
import { Reducer } from 'redux';


export type AdminEditorSidePanelState = {

};

const initialState: AdminEditorSidePanelState = {
};

export const adminEditorSidePanelState: Reducer<AdminEditorSidePanelState, Action> = (state = initialState, action: Action):
  AdminEditorSidePanelState => {
  switch (action.type) {
    case 'EDIT_ADMIN_EDITABLE_TEXT_COMPONENT_CLICK':
      return {
        ...state
      };
    default:
      return state;
  }
};

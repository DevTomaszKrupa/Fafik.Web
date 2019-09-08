import { Action } from './../../actions';
import { EDIT_ADMIN_EDITABLE_TEXT_COMPONENT_CLICK } from './../consts';
import { Reducer } from 'redux';


export type AdminEditorSidePanelState = {

};

const initialState: AdminEditorSidePanelState = {
};

export const adminEditorSidePanelState: Reducer<AdminEditorSidePanelState, Action> = (state = initialState, action: Action):
  AdminEditorSidePanelState => {
  switch (action.type) {
    case EDIT_ADMIN_EDITABLE_TEXT_COMPONENT_CLICK:
      console.log(action.payload);
      return {
        ...state
      };
    default:
      return state;
  }
};

import { Action } from './../../actions';
import { EDIT_ADMIN_EDITABLE_TEXT_COMPONENT_CLICK } from './../consts';
import { Reducer } from 'redux';


export type AdminEditorSidePanel = {
  
};

const initialState: AdminEditorSidePanel = {
};

export const clientState: Reducer<AdminEditorSidePanel, Action> = (state = initialState, action: Action): AdminEditorSidePanel => {
  switch (action.type) {
    case EDIT_ADMIN_EDITABLE_TEXT_COMPONENT_CLICK:
      return {
        ...state
      };
    default:
      return state;
  }
};

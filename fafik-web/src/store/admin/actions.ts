import { EDIT_ADMIN_EDITABLE_TEXT_COMPONENT_CLICK } from './consts';
import { createAction } from './../actions';

export const editAdminEditableTextComponent = (itemId: string) =>
    createAction(EDIT_ADMIN_EDITABLE_TEXT_COMPONENT_CLICK, itemId);

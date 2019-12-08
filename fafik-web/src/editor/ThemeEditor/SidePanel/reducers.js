const initialState = {
  editor: 'none',
  itemId: '',
  textValue: '',
};

export const editorSidePanelState = (state = initialState, action) => {
  switch (action.type) {
    case 'EDITOR_EDITABLE_TEXT_COMPONENT_CLICK': {
      const { itemId, textValue } = action.payload;
      return {
        ...state,
        editor: 'text',
        itemId: itemId,
        textValue: textValue,
      };
    }
    case 'EDITOR_SITE_PANEL_UPDATE_TEXT_VALUE':
      return {
        ...state,
        textValue: action.payload,
      };
    default:
      return state;
  }
};

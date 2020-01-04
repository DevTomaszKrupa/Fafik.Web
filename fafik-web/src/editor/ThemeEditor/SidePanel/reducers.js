const initialState = {
  editor: 'none',
  itemId: '',
  textValue: '',
  imageSrc: '',
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
    case 'EDITOR_EDITABLE_IMAGE_COMPONENT_CLICK': {
      const { itemId, imageSrc } = action.payload;
      return {
        ...state,
        editor: 'image',
        itemId: itemId,
        imageSrc: imageSrc,
      };
    }
    case 'EDITOR_SITE_PANEL_UPDATE_TEXT_VALUE':
      const { textValue } = action.payload;
      return {
        ...state,
        textValue: textValue,
      };
    default:
      return state;
  }
};

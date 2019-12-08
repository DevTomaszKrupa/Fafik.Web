import { set } from 'lodash';

const initialState = {
  // editor: 'none',
  // itemId: '',
  // textValue: '',
  // header: {
  //   leftMenuItems: [],
  //   rightMenuItems: [],
  // },
  themeCode: '',
  editor: 'none',
  isLoading: false,
};

const resolveMenuItem = sites => {
  let leftItems = [];
  let rightItems = [];
  if (sites.length % 2 === 0) {
    leftItems = sites.slice(0, sites.length / 2);
    rightItems = sites.slice(sites.length / 2, sites.length);
  } else {
    leftItems = sites.slice(0, Math.ceil(sites.length / 2));
    rightItems = sites.slice(Math.ceil(sites.length / 2), sites.length);
  }
  return { leftItems, rightItems };
};

export const themeEditorState = (state = initialState, action) => {
  switch (action.type) {
    // case 'EDIT_ADMIN_EDITABLE_TEXT_COMPONENT_CLICK': {
    //   const { itemId, textValue } = action.payload;
    //   return {
    //     ...state,
    //     editor: 'text',
    //     itemId: itemId,
    //     textValue: textValue,
    //   };
    // }
    case 'API_THEME_GET_THEME_STARTED':
      return {
        ...state,
        isLoading: true,
      };
    case 'API_THEME_GET_THEME_SUCCESS':
      const { themeCode } = action.payload;
      return {
        ...state,
        themeCode: themeCode,
      };
    case 'API_THEME_GET_THEME_FAILURE':
      return {
        ...state,
        isLoading: false,
      };
    // case 'EDITOR_SITE_PANEL_UPDATE_TEXT_VALUE':
    //   const { itemId, textValue } = action.payload;
    //   const newState = { ...state };
    //   set(newState, itemId, textValue);
    //   return newState;
    default:
      return state;
  }
};

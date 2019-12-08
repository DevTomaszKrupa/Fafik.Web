import { set } from 'lodash';

const initialState = {
  // editor: 'none',
  // itemId: '',
  // textValue: '',
  header: {
    leftMenuItems: [],
    rightMenuItems: [],
  },
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

export const romanticThemeEditorState = (state = initialState, action) => {
  switch (action.type) {
    // case 'EDITOR_EDITABLE_TEXT_COMPONENT_CLICK': {
    //   const { itemId, textValue } = action.payload;
    //   return {
    //     ...state,
    //     editor: 'text',
    //     itemId: itemId,
    //     textValue: textValue,
    //   };
    // }
    case 'API_THEME_GET_THEME_SUCCESS':
      const { aboutUs, additionalInfo, blog, gallery, header, plan, quoteSection } = action.payload.themeData;
      const { headerNames, headerQuote, mainImage, weddingDate, sites } = header;
      const { leftItems, rightItems } = resolveMenuItem(sites);
      return {
        ...state,
        header: {
          headerNames,
          headerQuote,
          mainImage,
          weddingDate,
          leftMenuItems: leftItems,
          rightMenuItems: rightItems,
        },
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

import { set } from 'lodash';

const initialState = {
  header: {
    leftMenuItems: [],
    rightMenuItems: [],
  },
  aboutUs: {},
  blog: {
    posts: [],
  },
  gallery: {},
  plan: {
    events: [],
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
    case 'API_SITE_GET_SITE_SUCCESS':
      const { aboutUs, additionalInfo, blog, gallery, header, plan, quoteSection } = action.payload.siteData;
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
        aboutUs: aboutUs,
        quoteSection: quoteSection,
        gallery: gallery,
        blog: blog,
        plan: plan,
        additionalInfo: additionalInfo,
      };
    case 'EDITOR_SITE_PANEL_UPDATE_TEXT_VALUE':
      const { itemId, textValue } = action.payload;
      const newState = { ...state };
      set(newState, itemId, textValue);
      return newState;
    // case 'EDITOR_SITE_PANEL_UPDATE_IMAGE_VALUE':
    //   const { itemId, textValue } = action.payload;
    //   const newState = { ...state };
    //   set(newState, itemId, textValue);
    //   return newState;
    default:
      return state;
  }
};

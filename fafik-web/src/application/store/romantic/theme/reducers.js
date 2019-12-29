const initialState = {
  clientName: '',
  isLoading: false,
  header: {
    leftMenuItems: [],
    rightMenuItems: [],
  },
  aboutUs: {},
  quoteSection: {},
  gallery: {
    cards: [],
  },
  blog: {
    posts: [],
  },
  plan: {
    events: [],
  },
  additionalInfo: {
    infoCards: [],
  },
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

export const romanticState = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CLIENT_SUCCESS':
      return {
        ...state,
        clientName: action.payload.data.clientName,
      };
    case 'GET_ROMANTIC_THEME_STARTED':
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_ROMANTIC_THEME_SUCCESS':
      const { header } = action.payload.data;
      const { leftItems, rightItems } = resolveMenuItem(header.sites);
      return {
        ...state,
        ...action.payload.data,
        isLoading: false,
        header: {
          ...header,
          leftMenuItems: leftItems,
          rightMenuItems: rightItems,
        },
      };
    case 'GET_ROMANTIC_THEME_FAILURE':
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

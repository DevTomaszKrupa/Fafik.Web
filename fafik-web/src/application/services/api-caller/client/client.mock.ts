import {
  GetClientRequest,
  RegisterRequest,
  GetThemeRequest,
} from 'domain/models';

const getClient = (request: GetClientRequest) => ({ data: { theme: 1 } });

const register = (request: RegisterRequest) => ({ data: { theme: 1 } });

const getTheme = (request: GetThemeRequest) => ({
  data: {
    header: {
      headerNames: 'Tu wpisz wasze imiona',
      leftMenuItems: [
        { name: 'O NAS', path: 'o-nas' },
        { name: 'GALERIA', path: 'galeria' },
        { name: 'BLOG', path: 'blog' },
        { name: 'RSVP', path: 'rsvp' },
      ],
      rightMenuItems: [
        { name: 'DOJAZD', path: 'dojazd' },
        { name: 'PLAN WYDARZENIA', path: 'plan-wydarzenia' },
        { name: 'PLAYLISTA', path: 'playlista' },
        { name: 'INFO DODATKOWE', path: 'info-dodatkowe' },
      ],
      mainImage: '',
      weddingDate: undefined,
      headerQuote: 'Tu wpisz wasz cytat',
    },
  },
});

export default {
  getClient,
  register,
  getTheme,
};

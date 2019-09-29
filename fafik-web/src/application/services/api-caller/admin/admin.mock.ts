import { LoginRequest } from 'domain/models';

const login = (request: LoginRequest) =>
  ({ data: { email: 'kasia@daniel.pl', token: 'tosadasdsamdsasfjfsdaf3231ewd9k12' } });

const getEditorTheme = (clientName: string) =>
  ({ data: { theme: 1 } });

const getRomanticEditorTheme = () =>
  ({
    data: {
      header: {
        headerNames: 'Tu wpisz wasze imiona',
        leftMenuItems: [{ name: 'O NAS', path: 'o-nas' },
        { name: 'GALERIA', path: 'galeria' },
        { name: 'BLOG', path: 'blog' },
        { name: 'RSVP', path: 'rsvp' }],
        rightMenuItems: [
          { name: 'DOJAZD', path: 'dojazd' },
          { name: 'PLAN WYDARZENIA', path: 'plan-wydarzenia' },
          { name: 'PLAYLISTA', path: 'playlista' },
          { name: 'INFO DODATKOWE', path: 'info-dodatkowe' }],
        mainImage: '',
        weddingDate: undefined,
        headerQuote: 'Tu wpisz wasz cytat'
      }
    }
  });

const getClients = () =>
  ({
    data: [
      { name: 'Kasia i Daniel' }
    ]
  });

const getBlogPosts = () => {
  return {
    data: {
      posts: [
        { postId: 1, title: 'Jak być dobrą żoną? Wciąż nie wiem.', date: new Date(2018, 1, 21, 12, 0, 0), isPublished: true },
        { postId: 2, title: 'Zrobił placki równocześnie pracując! Zobacz jak! ', date: new Date(2018, 5, 21, 23, 20, 0), isPublished: true },
        { postId: 3, title: 'Januszowe wakacje komunistyczne - Bułgaria na miesiąc miodowy.', date: new Date(2018, 7, 20, 15, 10, 0), isPublished: true },
      ]
    }
  };
};

export default {
  login,
  getEditorTheme,
  getClients,
  getRomanticEditorTheme,
  getBlogPosts
};

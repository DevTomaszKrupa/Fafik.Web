import { LoginRequest, LoginResponse, AdminClient } from './../../../models';
import Axios from 'axios';

const baseApiUrl = 'http://localhost:5000';

const login = (request: LoginRequest) =>
  Axios.post<LoginResponse>(`${baseApiUrl}/users/authenticate`, request);

const getEditorTheme = () =>
  ({ data: { theme: 'romantic' } });

const getClients = () =>
  Axios.get<AdminClient>(`${baseApiUrl}/admin/clients`);

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

export default {
  login,
  getEditorTheme,
  getRomanticEditorTheme,
  getClients
};

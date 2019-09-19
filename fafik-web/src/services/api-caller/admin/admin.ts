import { LoginRequest, LoginResponse, AdminClient, GetEditorThemeResponse } from './../../../models';
import Axios from 'axios';

const baseApiUrl = 'http://localhost:5000';

const login = (request: LoginRequest) =>
  Axios.post<LoginResponse>(`${baseApiUrl}/users/authenticate`, request);

const getEditorTheme = (clientName: string) =>
  Axios.get<GetEditorThemeResponse>(`${baseApiUrl}/admin/theme/${clientName}`);

const getClients = () =>
  Axios.get<AdminClient>(`${baseApiUrl}/admin/clients`);

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
  getBlogPosts
};

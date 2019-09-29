import Axios from 'axios';

import {
  LoginRequest,
  LoginResponse,
  AdminClient,
  GetEditorThemeResponse,
} from 'domain/models';
import { API_BASE_URL } from 'application/config';

const login = (request: LoginRequest) =>
  Axios.post<LoginResponse>(`${API_BASE_URL}/users/authenticate`, request);

const getEditorTheme = (clientName: string) =>
  Axios.get<GetEditorThemeResponse>(
    `${API_BASE_URL}/admin/theme/${clientName}`
  );

const getClients = () =>
  Axios.get<AdminClient>(`${API_BASE_URL}/admin/clients`);

const getBlogPosts = () => {
  return {
    data: {
      posts: [
        {
          postId: 1,
          title: 'Jak być dobrą żoną? Wciąż nie wiem.',
          date: new Date(2018, 1, 21, 12, 0, 0),
          isPublished: true,
        },
        {
          postId: 2,
          title: 'Zrobił placki równocześnie pracując! Zobacz jak! ',
          date: new Date(2018, 5, 21, 23, 20, 0),
          isPublished: true,
        },
        {
          postId: 3,
          title:
            'Januszowe wakacje komunistyczne - Bułgaria na miesiąc miodowy.',
          date: new Date(2018, 7, 20, 15, 10, 0),
          isPublished: true,
        },
      ],
    },
  };
};

export default {
  login,
  getEditorTheme,
  getClients,
  getBlogPosts,
};

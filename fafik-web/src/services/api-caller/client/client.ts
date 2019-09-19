import { GetClientRequest, GetClientResponse, RegisterRequest, RegisterResponse, GetThemeRequest  } from './../../../models';
import Axios from 'axios';

const baseApiUrl = 'http://localhost:5000';

const getClient = (request: GetClientRequest) =>
  Axios.get<GetClientResponse>(`${baseApiUrl}/clients/${request.clientPath}/site/${request.sitePath}`);

  const register = (request: RegisterRequest) =>
  Axios.post<RegisterResponse>(`${baseApiUrl}/users/register`, request);

  const getTheme = (request: GetThemeRequest) =>
    Axios.get<RegisterResponse>(`${baseApiUrl}/theme?clientPath=${request.clientPath}&sitePath=${request.sitePath}`);

export default {
  getClient,
  register,
  getTheme
};

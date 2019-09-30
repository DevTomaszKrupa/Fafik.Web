import { GetClientRequest, GetClientResponse, RegisterRequest, RegisterResponse, GetThemeRequest } from 'domain/models';
import Axios from 'axios';

import { API_BASE_URL } from 'application/config';

const getClient = (request: GetClientRequest) =>
  Axios.get<GetClientResponse>(`${API_BASE_URL}/clients/${request.clientName}/site/${request.sitePath}`);

const register = (request: RegisterRequest) => Axios.post<RegisterResponse>(`${API_BASE_URL}/users/register`, request);

const getTheme = (request: GetThemeRequest) =>
  Axios.get<RegisterResponse>(`${API_BASE_URL}/theme?clientName=${request.clientName}&sitePath=${request.sitePath}`);

export default {
  getClient,
  register,
  getTheme,
};

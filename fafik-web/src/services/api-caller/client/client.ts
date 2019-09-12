import { GetClientRequest, GetClientResponse, RegisterRequest, RegisterResponse } from './../../../models';
import Axios from 'axios';

const baseApiUrl = 'http://localhost:5000';

const getClient = (request: GetClientRequest) =>
  Axios.get<GetClientResponse>(`${baseApiUrl}/clients/${request.clientPath}/site/${request.sitePath}`);

const register = (request: RegisterRequest) =>
  Axios.post<RegisterResponse>(`${baseApiUrl}/users/register`, request);

export default {
  getClient,
  register
};

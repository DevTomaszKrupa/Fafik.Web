import { LoginRequest, LoginResponse, AdminClient } from './../../../models';
import Axios from 'axios';

const baseApiUrl = 'http://localhost:5000';

const login = (request: LoginRequest) =>
  Axios.post<LoginResponse>(`${baseApiUrl}/users/authenticate`, request);

const getClients = () =>
    Axios.get<AdminClient>(`${baseApiUrl}/admin/clients`);

export default {
  login,
  getClients
};

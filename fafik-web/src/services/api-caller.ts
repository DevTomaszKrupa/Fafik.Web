import Axios from 'axios';
import { GetClientRequest, GetClientResponse } from '../models';

const baseApiUrl = 'http://localhost:5000';

const getClient = (request: GetClientRequest) =>
  Axios.get<GetClientResponse>(`${baseApiUrl}/clients/${request.clientName}`);

export const apiCaller = {
  getClient
};

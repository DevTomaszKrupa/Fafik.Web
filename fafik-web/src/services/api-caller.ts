import Axios from 'axios';
import { GetClientRequest, GetClientResponse } from '../models';

const baseApiUrl = 'https://localhost:5001';

const getClient = (request: GetClientRequest) =>
  Axios.get<GetClientResponse>(`${baseApiUrl}/clients/${request.clientName}`);

export const apiCaller = {
  getClient
};

import Axios from 'axios';
import { GetClientRequest, GetClientResponse } from '../models';

const baseApiUrl = 'https:localhost:5001/api';

const getClient = (request: GetClientRequest) =>
  Axios.get<GetClientResponse>(`${baseApiUrl}/client/${request.clientName}`);

export const apiCaller = {
  getClient
};

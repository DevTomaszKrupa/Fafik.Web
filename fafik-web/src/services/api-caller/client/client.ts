import { GetClientRequest, GetClientResponse } from './../../../models';
import Axios from 'axios';

const baseApiUrl = 'http://localhost:5000';

const getClient = (request: GetClientRequest) =>
   Axios.get<GetClientResponse>(`${baseApiUrl}/clients/${request.clientPath}/site/${request.sitePath}`);

export default {
  getClient
};

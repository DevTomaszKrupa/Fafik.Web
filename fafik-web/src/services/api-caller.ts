import Axios from 'axios';
import { GetClientRequest, GetClientResponse } from '../models';

const baseApiUrl = 'http://localhost:5000';

// client
const getClient = (request: GetClientRequest) =>
  Axios.get<GetClientResponse>(`${baseApiUrl}/clients/${request.clientPath}/site/${request.sitePath}`);
// ({data:{theme:"romantic"}})
// leaves
const getLeavesTheme = (clientPath: string) =>
  Axios.get<GetClientResponse>(`${baseApiUrl}/leaves?clientPath=${clientPath}`);

const getLeavesMainSite = (clientPath: string) =>
  Axios.get<GetClientResponse>(`${baseApiUrl}/leaves/main?clientPath=${clientPath}`);

const getAboutUsSite = (clientPath: string) =>
  Axios.get<GetClientResponse>(`${baseApiUrl}/leaves/about-us?clientPath=${clientPath}`);

export const apiCaller = {
  getClient,
  getLeavesTheme,
  getLeavesMainSite,
  getAboutUsSite
};

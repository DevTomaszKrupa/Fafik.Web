import Axios from 'axios';

import { GetClientResponse } from 'domain/models';
import { API_BASE_URL } from 'application/config';


const getTheme = (clientPath: string) =>
  Axios.get<GetClientResponse>(`${API_BASE_URL}/leaves?clientPath=${clientPath}`);

const getMainSite = (clientPath: string) =>
  Axios.get<GetClientResponse>(
    `${API_BASE_URL}/leaves/main?clientPath=${clientPath}`
  );

const getAboutUsSite = (clientPath: string) =>
  Axios.get<GetClientResponse>(
    `${API_BASE_URL}/leaves/about-us?clientPath=${clientPath}`
  );


export default {
  getTheme,
  getMainSite,
  getAboutUsSite
};

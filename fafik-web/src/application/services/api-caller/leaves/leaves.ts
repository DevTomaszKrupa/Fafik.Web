import Axios from 'axios';

import { GetClientResponse } from 'domain/models';
import { API_BASE_URL } from 'application/config';

const getTheme = (clientName: string) => Axios.get<GetClientResponse>(`${API_BASE_URL}/leaves?clientName=${clientName}`);

const getMainSite = (clientName: string) => Axios.get<GetClientResponse>(`${API_BASE_URL}/leaves/main?clientName=${clientName}`);

const getAboutUsSite = (clientName: string) => Axios.get<GetClientResponse>(`${API_BASE_URL}/leaves/about-us?clientName=${clientName}`);

export default {
  getTheme,
  getMainSite,
  getAboutUsSite,
};

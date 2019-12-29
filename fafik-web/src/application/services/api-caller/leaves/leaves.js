import Axios from 'axios';

import { API_BASE_URL } from 'application/config';

const getTheme = clientName => Axios.get(`${API_BASE_URL}/leaves?clientName=${clientName}`);

const getMainSite = clientName => Axios.get(`${API_BASE_URL}/leaves/main?clientName=${clientName}`);

const getAboutUsSite = clientName => Axios.get(`${API_BASE_URL}/leaves/about-us?clientName=${clientName}`);

export default {
  getTheme,
  getMainSite,
  getAboutUsSite,
};

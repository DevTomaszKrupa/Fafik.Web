import Axios from 'axios';

import { API_BASE_URL } from 'application/config';

const getThemes = () => Axios.get(`${API_BASE_URL}/theme`);

const getTheme = clientName => Axios.get(`${API_BASE_URL}/theme/${clientName}`);

const initializeTheme = themeId => Axios.post(`${API_BASE_URL}/theme`, { themeId });

export default {
  getThemes,
  initializeTheme,
  getTheme,
};

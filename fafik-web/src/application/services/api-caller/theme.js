import Axios from 'axios';

import { API_BASE_URL } from 'application/config';

const getThemes = () => Axios.get(`${API_BASE_URL}/theme`);

const initializeTheme = data => Axios.post(`${API_BASE_URL}/theme`, data);

export default {
  getThemes,
  initializeTheme,
};

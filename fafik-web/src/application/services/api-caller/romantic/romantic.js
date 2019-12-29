import Axios from 'axios';

import { API_BASE_URL } from 'application/config';

const getTheme = clientName => Axios.get(`${API_BASE_URL}/romantic?clientName=${clientName}`);

export default {
  getTheme,
};

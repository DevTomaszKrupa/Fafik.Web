import Axios from 'axios';

import { API_BASE_URL } from 'application/config';

const getClient = () => Axios.get(`${API_BASE_URL}/admin/client`);

export default {
  getClient,
};

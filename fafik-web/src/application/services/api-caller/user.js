import Axios from 'axios';

import { API_BASE_URL } from 'application/config';

const login = request => Axios.post(`${API_BASE_URL}/user/authenticate`, request);
const register = request => Axios.post(`${API_BASE_URL}/user/register`, request);

export default {
  login,
  register,
};

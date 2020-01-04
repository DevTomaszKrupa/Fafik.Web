import Axios from 'axios';

import { API_BASE_URL } from 'application/config';

const getSite = () => Axios.get(`${API_BASE_URL}/admin/site`);
const deleteSite = () => Axios.delete(`${API_BASE_URL}/admin/site`);

export default {
  getSite,
  deleteSite,
};

import Axios from 'axios';

import { API_BASE_URL } from 'application/config';

const getSite = (siteName, subSiteName = '') => Axios.get(`${API_BASE_URL}/site/${siteName}/${subSiteName}`);

export default {
  getSite,
};

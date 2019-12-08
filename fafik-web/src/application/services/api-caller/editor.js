import Axios from 'axios';

import { API_BASE_URL } from 'application/config';

const saveTextValue = request => Axios.put(`${API_BASE_URL}/editor/text`, request);

export default {
  saveTextValue,
};

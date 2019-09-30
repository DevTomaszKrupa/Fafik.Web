import Axios from 'axios';

import { GetClientResponse } from 'domain/models';
import { API_BASE_URL } from 'application/config';

const getTheme = (clientName: string) => Axios.get<GetClientResponse>(`${API_BASE_URL}/romantic?clientName=${clientName}`);

export default {
  getTheme,
};

import Axios from 'axios';

import { GetClientResponse } from 'domain/models';
import { API_BASE_URL } from 'application/config';

const getTheme = (clientPath: string) =>
  Axios.get<GetClientResponse>(
    `${API_BASE_URL}/romantic?clientPath=${clientPath}`
  );

export default {
  getTheme,
};

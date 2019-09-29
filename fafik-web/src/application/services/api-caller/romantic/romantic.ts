import { GetClientResponse } from 'domain/models';
import Axios from 'axios';

const baseApiUrl = 'http://localhost:5000';

const getTheme = (clientPath: string) =>
  Axios.get<GetClientResponse>(`${baseApiUrl}/romantic?clientPath=${clientPath}`);

export default {
  getTheme
};

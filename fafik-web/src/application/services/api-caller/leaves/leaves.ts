import { GetClientResponse } from 'domain/models';
import Axios from 'axios';

const baseApiUrl = 'http://localhost:5000';

const getTheme = (clientPath: string) =>
  Axios.get<GetClientResponse>(`${baseApiUrl}/leaves?clientPath=${clientPath}`);

const getMainSite = (clientPath: string) =>
  Axios.get<GetClientResponse>(
    `${baseApiUrl}/leaves/main?clientPath=${clientPath}`
  );

const getAboutUsSite = (clientPath: string) =>
  Axios.get<GetClientResponse>(
    `${baseApiUrl}/leaves/about-us?clientPath=${clientPath}`
  );


export default {
  getTheme,
  getMainSite,
  getAboutUsSite
};

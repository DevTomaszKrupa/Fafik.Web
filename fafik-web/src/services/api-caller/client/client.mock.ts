import { GetClientRequest, RegisterRequest, GetThemeRequest } from './../../../models';

const getClient = (request: GetClientRequest) =>
  ({ data: { theme: 'romantic' } });

const register = (request: RegisterRequest) =>
  ({ data: { theme: 'romantic' } });

const getTheme = (request: GetThemeRequest) =>
  ({ data: { theme: 'romantic' } });

export default {
  getClient,
  register,
  getTheme
};

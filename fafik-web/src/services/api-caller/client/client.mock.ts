import { GetClientRequest, RegisterRequest } from './../../../models';

const getClient = (request: GetClientRequest) =>
  ({ data: { theme: 'romantic' } });

const register = (request: RegisterRequest) =>
  ({ data: { theme: 'romantic' } });

export default {
  getClient,
  register
};

import { GetClientRequest } from './../../../models';

const getClient = (request: GetClientRequest) =>
  ({ data: { theme: 'romantic' } });

export default {
  getClient
};

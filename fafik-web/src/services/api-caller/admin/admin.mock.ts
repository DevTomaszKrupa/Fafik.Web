import { LoginRequest } from './../../../models';

const login = (request: LoginRequest) =>
  ({ data: { email: 'kasia@daniel.pl', token: 'tosadasdsamdsasfjfsdaf3231ewd9k12' } });

const getEditorTheme = () =>
  ({ data: { theme: 'romantic' } });

const getClients = () =>
  ({
    data: [
      { name: 'Kasia i Daniel' }
    ]
  });

export default {
  login,
  getEditorTheme,
  getClients
};

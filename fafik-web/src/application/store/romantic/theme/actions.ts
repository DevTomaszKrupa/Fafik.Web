import { GET_ROMANTIC_THEME_STARTED } from './consts';
import { createAction } from '../../actions';

export const getRomanticTheme = (clientPath: string) =>
  createAction(GET_ROMANTIC_THEME_STARTED, clientPath);

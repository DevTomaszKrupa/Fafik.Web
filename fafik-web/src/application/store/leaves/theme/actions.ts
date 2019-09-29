import { GET_LEAVES_THEME_STARTED } from './consts';
import { createAction } from '../../actions';

export const getLeavesTheme = (clientPath: string) =>
  createAction(GET_LEAVES_THEME_STARTED, clientPath);

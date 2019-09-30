import { GET_ROMANTIC_THEME_STARTED } from './consts';
import { createAction } from '../../actions';

export const getRomanticTheme = (clientName: string) => createAction(GET_ROMANTIC_THEME_STARTED, clientName);

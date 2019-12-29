import { createAction } from '../../actions';

export const getLeavesTheme = (clientName: string) => createAction('GET_LEAVES_THEME_STARTED', clientName);

import { createAction } from '../../actions';

export const getLeavesMainSite = (clientName: string) => createAction('GET_LEAVES_MAIN_SITE_STARTED', clientName);

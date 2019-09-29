import { GET_LEAVES_MAIN_SITE_STARTED } from './consts';
import { createAction } from '../../actions';

export const getLeavesMainSite = (clientPath: string) =>
  createAction(GET_LEAVES_MAIN_SITE_STARTED, clientPath);

import { OPEN_ROMANTIC_RSVP_DIALOG, CLOSE_ROMANTIC_RSVP_DIALOG } from './consts';
import { createAction } from '../../../actions';

export const openRsvpDialog = () =>
  createAction(OPEN_ROMANTIC_RSVP_DIALOG);

export const closeRsvpDialog = () =>
  createAction(CLOSE_ROMANTIC_RSVP_DIALOG);

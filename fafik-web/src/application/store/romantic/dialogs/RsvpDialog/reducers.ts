import { Reducer } from 'redux';

import { Action } from '../../../actions';
import {
  OPEN_ROMANTIC_RSVP_DIALOG,
  CLOSE_ROMANTIC_RSVP_DIALOG
} from './consts';

export type RomanticRsvpDialogState = {
  isOpen: boolean;
};

const initialState: RomanticRsvpDialogState = {
  isOpen: false
};

export const romanticRsvpDialogState: Reducer<RomanticRsvpDialogState, Action> = (
  state = initialState,
  action: Action
): RomanticRsvpDialogState => {
  switch (action.type) {
    case OPEN_ROMANTIC_RSVP_DIALOG:
      return {
        isOpen: true
      };

    case CLOSE_ROMANTIC_RSVP_DIALOG:
      return {
        isOpen: false
      };

    default:
      return state;
  }
};

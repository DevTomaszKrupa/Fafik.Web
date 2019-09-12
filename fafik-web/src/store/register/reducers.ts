import { Reducer } from 'redux';
import { Action } from '../actions';


export type RegisterState = {
  readonly isLoading: boolean;
};

const initialState: RegisterState = {
  isLoading: true
};

export const registerState: Reducer<RegisterState, Action> = (state = initialState, action: Action): RegisterState => {
  switch (action.type) {
    case 'REGISTER_STARTED':
      return {
        ...state,
        isLoading: true
      };
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        isLoading: false
      };
    case 'REGISTER_FAILURE':
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

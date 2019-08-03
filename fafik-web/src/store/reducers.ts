import { combineReducers } from 'redux';
import { ClientState, clientState } from './client/reducers';

export type AppState = {
  clientState: ClientState
};

export default combineReducers<AppState>({
  clientState
});

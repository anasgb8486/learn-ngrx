import { createReducer, on } from '@ngrx/store';
import { AppState } from './appstate';
import { setApiStatus } from './app.action';

export const initialState: AppState = {
  apiStatus: '',
  apiResponseMessage: '',
};
export const appReducer = createReducer(
  initialState,
  on(setApiStatus, (state, { apiStatus }) => {
    return apiStatus;
  })
);

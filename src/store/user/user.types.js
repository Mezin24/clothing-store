import { createAction } from 'utils/reducer/reducer';
import { USER_REDUCER_ACTIONS } from './user.actions';

export const setUserAction = (user) =>
  createAction(USER_REDUCER_ACTIONS.SET_USER, user);

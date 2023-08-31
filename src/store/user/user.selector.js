import { createSelector } from 'reselect';

const getUserSlice = (state) => state.user;

export const getCurrentUser = createSelector(
  getUserSlice,
  (userSlice) => userSlice.currentUser
);

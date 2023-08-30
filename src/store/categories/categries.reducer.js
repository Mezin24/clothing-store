import { CATEGORIES_ACTIONS } from './categories.actions';

const INITIAL_STATE = {
  categoriesArray: [],
};

export const categoriesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTIONS.SET_CATEGORIES:
      return {
        ...state,
        categoriesArray: payload,
      };

    default:
      return state;
  }
};

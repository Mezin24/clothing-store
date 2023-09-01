import { CATEGORIES_ACTIONS } from './categories.actions';

const INITIAL_STATE = {
  categoriesArray: [],
  isLoading: false,
  error: '',
};

export const categoriesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTIONS.FETCH_CATEGORIES_PENDING:
      return {
        ...state,
        categoriesArray: [],
        isLoading: true,
        error: '',
      };
    case CATEGORIES_ACTIONS.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categoriesArray: payload,
        isLoading: false,
      };
    case CATEGORIES_ACTIONS.FETCH_CATEGORIES_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    default:
      return state;
  }
};

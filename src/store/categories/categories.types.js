import { createAction } from 'utils/reducer/reducer';
import { CATEGORIES_ACTIONS } from './categories.actions';

export const setCategoriesAction = (categories) =>
  createAction(CATEGORIES_ACTIONS.SET_CATEGORIES, categories);

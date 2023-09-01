import { createAction } from 'utils/reducer/reducer';
import { CATEGORIES_ACTIONS } from './categories.actions';
import { getCategoriesAndDocuments } from 'utils/firebase/config';

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTIONS.FETCH_CATEGORIES_PENDING);

export const fetchCategoriesSuccess = (categoriesArray) =>
  createAction(CATEGORIES_ACTIONS.FETCH_CATEGORIES_SUCCESS, categoriesArray);

export const fetchCategoriesError = (error) =>
  createAction(CATEGORIES_ACTIONS.FETCH_CATEGORIES_REJECTED, error);

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());
  try {
    const categoryArray = await getCategoriesAndDocuments('categories');
    dispatch(fetchCategoriesSuccess(categoryArray));
  } catch (error) {
    dispatch(fetchCategoriesError(error));
  }
};

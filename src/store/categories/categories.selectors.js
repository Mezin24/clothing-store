import { createSelector } from 'reselect';

const getCategoriesSlice = (state) => state.categories;

export const getCategoriesMap = createSelector(
  getCategoriesSlice,
  (categoriesSlice) =>
    categoriesSlice.categoriesArray.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

export const getCategoriesIsLoading = createSelector(
  getCategoriesSlice,
  (categoriesSlice) => categoriesSlice.isLoading
);

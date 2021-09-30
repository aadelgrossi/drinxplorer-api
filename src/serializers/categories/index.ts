import { Category, CategoryRaw, CategoryRawResponse } from './types';

const mapCategories = (input: CategoryRaw[]) => {
  return input.map(item => ({ name: item.strCategory }));
};

export const serializeCategory = (input: CategoryRawResponse): Category[] => {
  const { drinks } = input;

  return mapCategories(drinks);
};

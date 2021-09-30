import {
  Category,
  CategoryRaw,
  CategoryRawResponse,
  DrinkByCategory,
  DrinkByCategoryRaw,
  DrinkByCategoryRawRawResponse,
} from './types';

const mapCategories = (input: CategoryRaw[]): Category[] => {
  return input.map(item => ({ name: item.strCategory }));
};

export const mapDrinksByCategory = (
  input: DrinkByCategoryRaw[],
): DrinkByCategory[] => {
  return input.map(item => ({
    id: item.idDrink,
    name: item.strDrink,
    image: item.strDrinkThumb,
  }));
};

export const serializeCategory = (input: CategoryRawResponse): Category[] => {
  const { drinks } = input;

  return mapCategories(drinks);
};

export const serializeDrinksByCategory = (
  input: DrinkByCategoryRawRawResponse,
): Category[] => {
  const { drinks } = input;

  return mapDrinksByCategory(drinks);
};

export * from './types';

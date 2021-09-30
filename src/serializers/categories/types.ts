import { Drink, DrinkRaw } from 'serializers/drinks/types';

export interface CategoryRaw {
  strCategory: string;
}

export interface CategoryRawResponse {
  drinks: CategoryRaw[];
}

export interface Category {
  name: string;
}

export interface DrinkByCategoryRawRawResponse {
  drinks: DrinkByCategoryRaw[];
}

export type DrinkByCategoryRaw = Pick<
  DrinkRaw,
  'strDrinkThumb' | 'idDrink' | 'strDrink'
>;

export type DrinkByCategory = Pick<Drink, 'id' | 'image' | 'name'>;

import {
  Ingredient,
  IngredientFullRaw,
  IngredientFullRawResponse,
  IngredientRaw,
  IngredientRawResponse,
} from './types';

const mapIngredients = (input: IngredientRaw[]) =>
  input.map(item => ({ name: item.strIngredient1 }));

const mapFullIngredient = (input: IngredientFullRaw): Ingredient => ({
  id: input.idIngredient,
  name: input.strIngredient,
  description: input.strDescription?.split('.').slice(0, 2).join('. ') ?? null,
  alcoholic: input.strAlcohol === 'Yes',
  type: input.strType,
  abv: Number(input.strABV),
});

export const serializeIngredients = (
  input: IngredientRawResponse,
): Pick<Ingredient, 'name'>[] => {
  const { drinks } = input;

  return mapIngredients(drinks);
};

export const serializeFullIngredient = (
  input: IngredientFullRawResponse,
): Ingredient => {
  const { ingredients } = input;

  return mapFullIngredient(ingredients[0]);
};

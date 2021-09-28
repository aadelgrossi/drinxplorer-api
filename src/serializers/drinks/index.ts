import { Drink, DrinkRaw, DrinkRawResponse, DrinkIngredient } from './types';

const mapDrinkIngredients = (_input: DrinkRaw): DrinkIngredient[] => {
  const ingredients = [] as DrinkIngredient[];

  for (let i = 1; i <= 15; i++) {
    const name = eval(`_input.strIngredient${i}`);
    const measure = eval(`_input.strMeasure${i}`);

    if (name) {
      ingredients.push({
        name,
        measure,
        photo: encodeURI(
          `https://www.thecocktaildb.com/images/ingredients/${name}.png`,
        ),
      });
    }
  }

  return ingredients;
};

export const mapDrink = (input: DrinkRaw): Drink => {
  const drink = {} as Drink;

  const {
    idDrink,
    strDrink,
    strTags,
    strAlcoholic,
    strGlass,
    strInstructions,
    dateModified,
  } = input;

  drink.id = idDrink;
  drink.name = strDrink;
  drink.tags = strTags?.split(',');
  drink.alcoholic = strAlcoholic === 'Alcoholic';
  drink.glass = strGlass;
  drink.ingredients = mapDrinkIngredients(input);
  drink.instructions = strInstructions
    .split('.')
    .filter(i => i !== '')
    .map(i => i.trim());
  drink.dateModified = new Date(dateModified);

  return drink;
};

export const serializeDrink = (input: DrinkRawResponse): Drink => {
  const { drinks } = input;

  return mapDrink(drinks[0]);
};

export const serializeDrinks = (input: DrinkRawResponse): Drink[] => {
  const { drinks } = input;

  return drinks.map(drink => mapDrink(drink));
};

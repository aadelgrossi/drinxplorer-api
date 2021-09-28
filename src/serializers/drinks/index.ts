import { Drink, DrinkRaw, DrinkRawResponse, DrinkIngredient } from './types';

const mapDrinkIngredients = (_drink: DrinkRaw): DrinkIngredient[] => {
  const ingredients = [] as DrinkIngredient[];

  for (let i = 1; i <= 15; i++) {
    const name = eval(`_drink.strIngredient${i}`);
    const measure = eval(`_drink.strMeasure${i}`);

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

export const mapDrink = (drink: DrinkRaw): Drink => {
  const response = {} as Drink;

  const {
    idDrink,
    strDrink,
    strTags,
    strAlcoholic,
    strGlass,
    strInstructions,
    dateModified,
  } = drink;

  response.id = idDrink;
  response.name = strDrink;
  response.tags = strTags?.split(',');
  response.alcoholic = strAlcoholic === 'Alcoholic';
  response.glass = strGlass;
  response.ingredients = mapDrinkIngredients(drink);
  response.instructions = strInstructions
    .split('.')
    .filter(i => i !== '')
    .map(i => i.trim());
  response.dateModified = new Date(dateModified);

  return response;
};

export const serializeDrink = (object: DrinkRawResponse): Drink => {
  const { drinks } = object;

  return mapDrink(drinks[0]);
};

export const serializeDrinks = (object: DrinkRawResponse): Drink[] => {
  const { drinks } = object;

  return drinks.map(drink => mapDrink(drink));
};
